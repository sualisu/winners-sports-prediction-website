// Sample data for predictions
const predictions = [
    { date: '2024-08-10', match: 'Team A vs Team B', prediction: 'Team A will win', result: 'Pending' },
    { date: '2024-08-11', match: 'Team C vs Team D', prediction: 'Draw', result: 'Pending' },
    { date: '2024-08-12', match: 'Team E vs Team F', prediction: 'Team F will win', result: 'Team F won' },
    { date: '2024-08-13', match: 'Team G vs Team H', prediction: 'Team G will win', result: 'Pending' },
];

// Function to load predictions into the table
function loadPredictions() {
    const tableBody = document.querySelector('#predictionTable tbody');
    
    predictions.forEach(prediction => {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = prediction.date;
        row.appendChild(dateCell);

        const matchCell = document.createElement('td');
        matchCell.textContent = prediction.match;
        row.appendChild(matchCell);

        const predictionCell = document.createElement('td');
        predictionCell.textContent = prediction.prediction;
        row.appendChild(predictionCell);

        const resultCell = document.createElement('td');
        resultCell.textContent = prediction.result;
        row.appendChild(resultCell);

        tableBody.appendChild(row);
    });
}

// Load predictions when the page is loaded
window.onload = loadPredictions;

