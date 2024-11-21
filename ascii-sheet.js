
    function convertAsciiToHtml(ascii) {
        const lines = ascii.trim().split('\n');
        let html = '<table border="1"><thead><tr>';

        const headers = lines[1].split('|').map(header => header.trim()).filter(Boolean);
        headers.forEach(header => {
            html += `<th>${header}</th>`;
        });

        html += '</tr></thead><tbody>';


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

    window.onload = convertAllSheets;
