import sqlite3

products = [
    {
        "name": "Katana",
        "zustand": "Neu",
        "preis": 299.99,
        "image": "images/katana.jpg"
    },
    {
        "name": "Yoroi Rüstung",
        "zustand": "Gebraucht",
        "preis": 1599.99,
        "image": "images/yoroi.jpg"
    },
    {
        "name": "Kabuto Helm",
        "zustand": "Neu",
        "preis": 499.99,
        "image": "images/kabuto.jpg"
    },
    {
        "name": "Wakizashi",
        "zustand": "Neu",
        "preis": 199.99,
        "image": "images/wakizashi.jpg"
    },
    {
        "name": "Tanto",
        "zustand": "Gebraucht",
        "preis": 99.99,
        "image": "images/tanto.jpg"
    }
]

# Verbindung zur SQLite-Datenbank herstellen
conn = sqlite3.connect('/Users/paria.keshavarzi/VSCode/Samurai/RoninRetail/Backend/db.sqlite3')
cursor = conn.cursor()

# Tabelle erstellen, falls sie nicht existiert
cursor.execute('''
CREATE TABLE IF NOT EXISTS ausrüstung_product (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    zustand TEXT NOT NULL,
    preis REAL NOT NULL,
    image TEXT NOT NULL
)
''')

# Produkte in die Datenbank einfügen
for product in products:
    cursor.execute('''
    INSERT INTO ausrüstung_product (name, zustand, preis, image)
    VALUES (?, ?, ?, ?)
    ''', (product['name'], product['zustand'], product['preis'], product['image']))

# Änderungen speichern und Verbindung schließen
conn.commit()
conn.close()