    // Fonction pour convertir un tableau ASCII en tableau HTML
    function convertAsciiToHtml(ascii) {
        const lines = ascii.trim().split('\n');
        let html = '<table border="1"><thead><tr>';

        // Extraire les en-têtes du tableau (2e ligne ASCII)
        const headers = lines[1].split('|').map(header => header.trim()).filter(Boolean);
        headers.forEach(header => {
            html += `<th>${header}</th>`;
        });

        html += '</tr></thead><tbody>';

        // Extraire les données des lignes suivantes
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

    // Fonction pour parcourir toutes les balises <sheet> et convertir les tableaux ASCII
    function convertAllSheets() {
        const sheets = document.querySelectorAll('sheet');
        sheets.forEach(sheet => {
            const asciiContent = sheet.textContent.trim();
            const htmlTable = convertAsciiToHtml(asciiContent);
            sheet.innerHTML = htmlTable;  // Remplacer le contenu du <sheet> par le tableau HTML
        });
    }

    // Exécuter la conversion au chargement de la page
    window.onload = convertAllSheets;
