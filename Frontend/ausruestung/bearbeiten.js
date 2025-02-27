document.getElementById('equipmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hier würde später die Update-Logik zur Datenbank kommen
    alert('Equipment wurde erfolgreich aktualisiert');
    window.location.href = '/equipment';
  });

  // Funktion zum Auslesen und Setzen der URL-Parameter
  function getEquipmentData() {
    const urlParams = new URLSearchParams(window.location.search);
    const equipmentId = urlParams.get('id');
    
    // In einer echten Anwendung würden Sie hier einen API-Call machen
    // Dies ist nur ein Beispiel mit statischen Daten
    const equipmentData = [
      { id: 1, name: "Beispielname 1", zustand: 5, preis: 25, image: 100 },
      { id: 2, name: "Beispielname 2", zustand: 6, preis: 30, image: 90 },
      { id: 3, name: "Beispielname 3", zustand: 7, preis: 28, image: 80 },
      { id: 4, name: "Beispielname 4", zustand: 8, preis: 22, image: 70 },
      { id: 5, name: "Beispielname 5", zustand: 5, preis: 35, image: 60 },
      { id: 6, name: "Beispielname 6", zustand: 9, preis: 40, image: 50 },
      { id: 7, name: "Beispielname 7", zustand: 10, preis: 20, image: 40 },
      { id: 8, name: "Beispielname 8", zustand: 11, preis: 27, image: 30 },
      { id: 9, name: "Beispielname 9", zustand: 12, preis: 33, image: 20 },
    ];
    
    if (equipmentId) {
      const equipment = equipmentData.find(item => item.id === parseInt(equipmentId));
      if (equipment) {
        document.getElementById('name').value = equipment.name;
        document.getElementById('zustand').value = equipment.zustand;
        document.getElementById('preis').value = equipment.preis;
        document.getElementById('image').value = equipment.image;
      } else {
        alert('Equipment nicht gefunden');
        window.location.href = '/equipment';
      }
    }
  }
  
  // Daten beim Laden der Seite abrufen
  window.onload = getEquipmentData;