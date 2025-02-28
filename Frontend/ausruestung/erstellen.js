// Füge einen Event-Listener zum Formular hinzu, der auf das 'submit'-Ereignis reagiert
document
  .getElementById("equipmentForm")
  .addEventListener("submit", function (e) {
    // Verhindere das Standardverhalten des Formulars (Seiten-Neuladen)
    e.preventDefault();

    // Erstelle ein FormData-Objekt aus dem Formular
    const serverObjekt = new FormData();
    serverObjekt.append("name", document.getElementById("name").value);
    serverObjekt.append("zustand", document.getElementById("zustand").value);
    serverObjekt.append("preis", document.getElementById("preis").value);
    serverObjekt.append("image", document.getElementById("image").files[0]);

    // Sende die Formulardaten an den Server
    fetch("http://localhost:8000/product/", {
      method: "POST", // HTTP-Methode POST
      body: serverObjekt, // Formulardaten als JSON-String
    })
      .then((response) => response.json()) // Konvertiere die Antwort in JSON
      .then((data) => {
        // Erfolgreiche Antwort vom Server
        console.log("Success:", data); // Logge die Erfolgsnachricht
        // Leite den Benutzer zur Seite '/equipment' weiter
        window.location.href = "./equipment.html";
      })
      .catch((error) => {
        // Fehler bei der Anfrage
        console.error("Error:", error); // Logge die Fehlermeldung
      });

    // Zeige eine Benachrichtigung an, dass das Equipment erfolgreich hinzugefügt wurde
    alert("Equipment wurde erfolgreich hinzugefügt");
  });
