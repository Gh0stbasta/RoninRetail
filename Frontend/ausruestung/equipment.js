// Beim Laden des Fensters müssen die Daten aus dem Backend geladen werden - Fetch Get Befehl
window.addEventListener('load', () => {
    fetch('http://127.0.0.1:8000/product/')
        .then(response => response.json())
        .then(data => {
            // Hier können Sie die Tabelleneinträge mit den geladenen Daten erstellen
            const tableBody = document.getElementById('equipment-table');
            tableBody.innerHTML = ''; // Vorhandene Tabelleneinträge löschen

            data.forEach(item => {
              const row = document.createElement("tr");

              const idCell = document.createElement("td"); // Es wird damit eine neue Zelle erstellt
              idCell.textContent = item.id; // Er nimmt einen Wert aus dem Backend und schreibt ihn in die Zelle
              row.appendChild(idCell); // Erweitert die Tabellenreihe mit einer Zelle

              const nameCell = document.createElement("td");
              nameCell.textContent = item.name;
              row.appendChild(nameCell);

              const typeCell = document.createElement("td");
              typeCell.textContent = item.zustand;
              row.appendChild(typeCell);

              const preisCell = document.createElement("td");
              preisCell.textContent = item.preis + " €";
              row.appendChild(preisCell);

              const imageCell = document.createElement("td");
              const image = document.createElement("img");
              image.src = item.image; // Vollständige URL verwenden
              image.alt = item.name; // Alt-Text hinzufügen
              imageCell.appendChild(image);
              row.appendChild(imageCell);

              const actionsCell = document.createElement("td");

              const editButton = document.createElement("button");
              editButton.textContent = "Bearbeiten";
              editButton.classList.add("bearbeiten-btn"); // Add CSS class 'add-btn' to the button
              editButton.addEventListener("click", () => {
                window.location.href = `./bearbeiten.html?id=${item.id}`;
                // Funktion zum Bearbeiten hier hinzufügen
              });
              actionsCell.appendChild(editButton);

              const deleteButton = document.createElement("button");
              deleteButton.textContent = "Löschen";
              deleteButton.classList.add("add-btn");
              deleteButton.addEventListener("click", () => {
                // Funktion zum Löschen hier hinzufügen
                // console.log("klappt")
                fetch(`http://127.0.0.1:8000/product/${item.id}`, {
                  method: "DELETE",
                })
                  .then((response) => {
                    if (response.ok) {
                      // Löschen erfolgreich, Tabelleneintrag entfernen
                      row.remove();
                    } else {
                      console.error("Fehler beim Löschen:", response.status);
                    }
                  })
                  .catch((error) =>
                    console.error("Fehler beim Löschen:", error)
                  );
              });
              actionsCell.appendChild(deleteButton);

              row.appendChild(actionsCell);

              tableBody.appendChild(row);
            });
            console.log(data);
        })
        .catch(error => console.error('Fehler:', error));
});

// Wenn die Daten geladen sind, sollen die Tabelleneinträge mit einer Schleife durch die Daten erstellt werden

// Wenn der Löschen-Button gedrückt wird, muss eine Funktion die Daten aus dem Backend löschen - Fetch Delete Befehl

// Wenn der Erstellen-Button gedrückt wird, muss eine neue Seite aufgerufen werden, auf der wir Daten eingeben können

document.querySelector(".add-equipment-btn").addEventListener("click", () => {
    window.location.href = "./erstellen.html";
  });
  

// Wenn der Bearbeiten-Button gedrückt wird, muss eine neue Seite zum Bearbeiten der Daten aufgerufen werden
