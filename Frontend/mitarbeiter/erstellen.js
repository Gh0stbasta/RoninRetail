// Füge einen Event-Listener zum Formular hinzu, der auf das 'submit'-Ereignis reagiert
document
  .getElementById("equipmentForm")
  .addEventListener("submit", function (e) {
    // Verhindere das Standardverhalten des Formulars (Seiten-Neuladen)
    e.preventDefault();

    // Erstelle ein FormData-Objekt aus dem Formular
    const serverObjekt = new FormData();
    serverObjekt.append("name", document.getElementById("name").value);
    serverObjekt.append("status", document.getElementById("status").value);
    serverObjekt.append("herkunft", document.getElementById("herkunft").value);
    serverObjekt.append("kills", document.getElementById("kills").value);
    serverObjekt.append("ehre", document.getElementById("ehre").value);
    serverObjekt.append("bild", document.getElementById("image").files[0]);
  

    // Sende die Formulardaten an den Server
    fetch("http://localhost:8000/mitarbeiter/", {
      method: "POST", // HTTP-Methode POST
      body: serverObjekt, // Formulardaten
    })
      .then((response) => response.json()) // Konvertiere die Antwort in JSON
      .then((data) => {
        // Erfolgreiche Antwort vom Server
        console.log("Success:", data); // Logge die Erfolgsnachricht
        // Leite den Benutzer zur Seite '/equipment' weiter
        window.location.href = "./samurai.html";
      })
      .catch((error) => {
        // Fehler bei der Anfrage
        console.error("Error:", error); // Logge die Fehlermeldung
      });

    // Zeige eine Benachrichtigung an, dass das Equipment erfolgreich hinzugefügt wurde
    alert("Equipment wurde erfolgreich hinzugefügt");
  });
