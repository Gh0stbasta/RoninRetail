fetch('http://localhost:8000/mitarbeiter/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Shadow Blade',
        status: 'Active',
        herkunft: 'Hidden Village',
        kills: 47,
        ehre: 'High',
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));