// Füge einen Event-Listener zum Formular hinzu, der auf das 'submit'-Ereignis reagiert
document.getElementById('equipmentForm').addEventListener('submit', function(e) {
  // Verhindere das Standardverhalten des Formulars (Seiten-Neuladen)
  e.preventDefault();
  
  // Erstelle ein FormData-Objekt aus dem Formular
  const namefeld = document.getElementById('name');
  const zustandfeld = document.getElementById('zustand');
  const preisfeld = document.getElementById('preis');
  const imagefeld = document.getElementById('image');

  let serverobject = {
    name: namefeld.value,
    zustand: zustandfeld.value,
    preis: preisfeld.value,
    image: imagefeld.files[0]
  }

  console.log(serverobject);
  // Sende die Formulardaten an den Server
  fetch('http://localhost:8000/product/', {
    method: 'POST', // HTTP-Methode POST
    headers: {
      'Content-Type': 'application/json' // Setze den Content-Type-Header
    },
    body:serverobject // Formulardaten als JSON-String
  })
 
  .then(response => response.json()) // Konvertiere die Antwort in JSON
  .then(data => {
    // Erfolgreiche Antwort vom Server
    console.log('Success:', data); // Logge die Erfolgsnachricht
  })
  .catch((error) => {
    // Fehler bei der Anfrage
    console.error('Error:', error); // Logge die Fehlermeldung
  });
  
  // Zeige eine Benachrichtigung an, dass das Equipment erfolgreich hinzugefügt wurde
  alert('Equipment wurde erfolgreich hinzugefügt');
  
  // Leite den Benutzer zur Seite '/equipment' weiter
  // window.location.href = '/equipment';
  });