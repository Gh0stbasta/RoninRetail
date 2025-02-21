import sqlite3

# Mock data with cool samurai names
mock_data = [
    {'name': 'Miyamoto Musashi', 'status': 'Ronin', 'herkunft': 'Harima Province', 'kills': 60, 'ehre': 'High'},
    {'name': 'Tomoe Gozen', 'status': 'Samurai', 'herkunft': 'Echizen Province', 'kills': 28, 'ehre': 'High'},
    {'name': 'Hattori Hanzo', 'status': 'Ninja', 'herkunft': 'Iga Province', 'kills': 50, 'ehre': 'Medium'},
    {'name': 'Oda Nobunaga', 'status': 'Daimyo', 'herkunft': 'Owari Province', 'kills': 100, 'ehre': 'High'},
    {'name': 'Tokugawa Ieyasu', 'status': 'Shogun', 'herkunft': 'Mikawa Province', 'kills': 75, 'ehre': 'High'},
    {'name': 'Date Masamune', 'status': 'Daimyo', 'herkunft': 'Mutsu Province', 'kills': 80, 'ehre': 'High'},
    {'name': 'Sanada Yukimura', 'status': 'Samurai', 'herkunft': 'Shinano Province', 'kills': 45, 'ehre': 'High'},
    {'name': 'Uesugi Kenshin', 'status': 'Daimyo', 'herkunft': 'Echigo Province', 'kills': 90, 'ehre': 'High'},
    {'name': 'Takeda Shingen', 'status': 'Daimyo', 'herkunft': 'Kai Province', 'kills': 85, 'ehre': 'High'},
    {'name': 'Hojo Ujiyasu', 'status': 'Daimyo', 'herkunft': 'Sagami Province', 'kills': 70, 'ehre': 'High'}
]

# Open a connection to the database
conn = sqlite3.connect('db.sqlite3')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Create table if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS mitarbeiter_mitarbeiter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    status TEXT,
    herkunft TEXT,
    kills INTEGER,
    ehre TEXT
)
''')

# Insert mock data into the table
for entry in mock_data:
    cursor.execute('''
    INSERT INTO mitarbeiter_mitarbeiter (name, status, herkunft, kills, ehre)
    VALUES (:name, :status, :herkunft, :kills, :ehre)
    ''', entry)

# Commit the transaction
conn.commit()

# Don't forget to close the connection when done
conn.close()