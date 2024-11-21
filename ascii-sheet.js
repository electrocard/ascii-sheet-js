document.addEventListener("DOMContentLoaded", () => {
    const asciiContainer = document.getElementById("ascii-container");


    function convertAsciiToHtml(ascii) {
        const rows = ascii.split("\n").filter(row => row.trim() !== "");
        const table = document.createElement("table");

        rows.forEach((row, index) => {
            if (row.startsWith("+")) return; 
            const tr = document.createElement("tr");

            // Identifier l'en-tête
            const isHeader = index === 1;
            const cellType = isHeader ? "th" : "td";

            // Extraire le contenu des colonnes
            row.split("|").forEach((cell, idx) => {
                if (idx === 0 || idx === row.split("|").length - 1) return; 
                const td = document.createElement(cellType);
                td.textContent = cell.trim(); 
                tr.appendChild(td);
            });

            table.appendChild(tr);
        });

        return table;
    }

    function isAsciiTable(text) {
        const lines = text.trim().split("\n");
        return (
            lines.length > 2 &&
            lines[0].startsWith("+") &&
            lines[0].includes("-") &&
            lines[1].startsWith("|") &&
            lines[1].includes("|")
        );
    }

    function renderContent(container) {
        const rawContent = container.textContent.trim();
        container.innerHTML = ""; 

        const segments = rawContent.split("\n\n"); 

        segments.forEach(segment => {
            if (isAsciiTable(segment)) {
                
                const htmlTable = convertAsciiToHtml(segment);
                container.appendChild(htmlTable);
            } else {
                
                const paragraph = document.createElement("p");
                paragraph.textContent = segment;
                container.appendChild(paragraph);
            }
        });
    }

    
    renderContent(asciiContainer);
});