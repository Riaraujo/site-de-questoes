function afundar() {
    // Adiciona a classe "afundar" temporariamente para simular o afundamento
    document.getElementById('afundavel').classList.add('afundar');

    // Remove a classe "afundar" após um curto período de tempo
    setTimeout(function() {
        document.getElementById('afundavel').classList.remove('afundar');
    }, 100);
}


const ctx = document.getElementById('grafico1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


