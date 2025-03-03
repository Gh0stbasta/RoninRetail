// Beim Laden des Fensters müssen die Daten aus dem Backend geladen - Fetch Get Befehl
window.onload = function () {
  fetch("http://127.0.0.1:8000/mitarbeiter/")
    .then((response) => response.json())
    .then((data) => {
      // Hier können Sie die Tabelleneinträge erstellen
      const tableBody = document.getElementById("table-body");
      data.forEach((mitarbeiter) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = mitarbeiter.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = mitarbeiter.name;
        row.appendChild(nameCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = mitarbeiter.status;
        row.appendChild(statusCell);

        const herkunftCell = document.createElement("td");
        herkunftCell.textContent = mitarbeiter.herkunft;
        row.appendChild(herkunftCell);

        const killsCell = document.createElement("td");
        killsCell.textContent = mitarbeiter.kills;
        row.appendChild(killsCell);

        const ehreCell = document.createElement("td");
        ehreCell.textContent = mitarbeiter.ehre;
        row.appendChild(ehreCell);

        const imageCell = document.createElement("td");
        const image = document.createElement("img");
        image.src = mitarbeiter.bild; // Vollständige URL verwenden
        imageCell.appendChild(image);
        row.appendChild(imageCell);

        const deleteButtonCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Bearbeiten";
        editButton.className = "bearbeiten-btn";

        editButton.addEventListener("click", () => {
          // Hier können Sie die Logik zum Bearbeiten der Daten hinzufügen
          window.location.href = `./bearbeiten.html?id=${mitarbeiter.id}`;
        });

        deleteButtonCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.className = "add-btn";

        deleteButton.addEventListener("click", () => {
          // Hier können Sie den Fetch Delete Befehl hinzufügen
          fetch(`http://127.0.0.1:8000/mitarbeiter/${mitarbeiter.id}/`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                row.remove();
              } else {
                console.error("Löschen fehlgeschlagen");
              }
            })
            .catch((error) => console.error("Error:", error));
        });
        deleteButtonCell.appendChild(deleteButton);
        row.appendChild(deleteButtonCell);

        tableBody.appendChild(row);
      });
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};

// Wenn der Erstellen Button gedrückt wird, muss eine neue Seite aufgerufen werden wo wir Daten eingeben können
document.querySelector(".add-equipment-btn").addEventListener("click", () => {
  window.location.href = "./erstellen.html";
});

// Wenn der Bearbeiten Button gedrückt wird, muss eine neue Seite zum Bearbeiten der Daten aufgerufen werden
