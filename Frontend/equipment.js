// Beim Laden des Fensters müssen die Daten aus dem Backend geladen - Fetch Get Befehl
window.addEventListener('load', () => {
    fetch('http://127.0.0.1:8000/product/')
        .then(response => response.json())
        .then(data => {
            // Hier können Sie die Tabelleneinträge mit den geladenen Daten erstellen
            const tableBody = document.getElementById('equipment-table');
            tableBody.innerHTML = ''; // Clear existing table entries

            data.forEach(item => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                const typeCell = document.createElement('td');
                typeCell.textContent = item.type;
                row.appendChild(typeCell);

                const priceCell = document.createElement('td');
                priceCell.textContent = item.price;
                row.appendChild(priceCell);

                const actionsCell = document.createElement('td');

                const editButton = document.createElement('button');
                editButton.textContent = 'Bearbeiten';
                editButton.addEventListener('click', () => {
                    // Bearbeiten Funktion hier hinzufügen
                });
                actionsCell.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Löschen';
                deleteButton.addEventListener('click', () => {
                    // Löschen Funktion hier hinzufügen
                });
                actionsCell.appendChild(deleteButton);

                row.appendChild(actionsCell);

                tableBody.appendChild(row);
            });
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
});

// Wenn die Daten geladen sind, sollen die Tabelleneinträge erstellt werden mit einer Schleife duch die Daten

// Wenn der Löschen Button gedrückt wird, muss eine Funktion die Daten aus dem Backend löschen - Fetch Delete Befehl

// Wenn der Erstellen Button gedrückt wird, muss eine neue Seite aufgerufen werden wo wir Daten eingeben können

// Wenn der Bearbeiten Button gedrückt wird, muss eine neue Seite zum Bearbeiten der Daten aufgerufen werden
