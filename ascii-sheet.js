function convertAsciiToHtml(ascii) {
    // Supprimer les lignes vides ou celles avec uniquement des espaces avant et après le tableau
    const cleanedAscii = ascii
        .split('\n') // Diviser en lignes
        .filter(line => line.trim() !== '') // Supprimer les lignes vides
        .join('\n'); // Réassembler en texte

    const lines = cleanedAscii.split('\n');
    let html = '<table border="1"><thead><tr>';

    // Extraction des entêtes du tableau
    const headers = lines[1].split('|').map(header => header.trim()).filter(Boolean);
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });

    html += '</tr></thead><tbody>';

    // Extraction des données des lignes du tableau
    for (let i = 3; i < lines.length - 1; i++) {
        const rowData = lines[i].split('|').map(cell => cell.trim()).filter(Boolean);
        html += '<tr>';
        rowData.forEach(cell => {
            html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    }

    html += '</tbody></table>';
    return html;
}

function convertAllSheets() {
    const sheets = document.querySelectorAll('sheet');
    sheets.forEach(sheet => {
        const asciiContent = sheet.textContent.trim();
        const htmlTable = convertAsciiToHtml(asciiContent);
        sheet.innerHTML = htmlTable;
    });
}

window.addEventListener('DOMContentLoaded', convertAllSheets);

// Pour s'assurer que les <sheet> sont toujours rechargés après chaque intervalle de temps, tu peux ajouter :
setInterval(convertAllSheets, 0.0001); // Rechargement toutes les 1 seconde
