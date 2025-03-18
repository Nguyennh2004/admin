const ctx1 = document.getElementById('areaChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7', 'Mar 9', 'Mar 11', 'Mar 13'],
        datasets: [{
            label: 'Data',
            data: [10000, 25000, 20000, 30000, 28000, 32000, 40000],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: true,
        }]
    }
});

const ctx2 = document.getElementById('barChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [4000, 5000, 6000, 8000, 10000, 15000],
            backgroundColor: 'blue'
        }]
    }
});
