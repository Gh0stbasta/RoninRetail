document.getElementById('equipmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hier würde später die Logik zum Hinzufügen zur Datenbank kommen
    alert('Equipment wurde erfolgreich hinzugefügt');
    window.location.href = '/equipment';
  });