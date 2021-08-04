var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

var chBar = document.getElementById("chBar");
if (chBar) {
    new Chart(chBar, {
    type: 'bar',
    data: {
    labels: ["assists", "goals", "pim", "shots", "games", "powerPlayGoals", "powerPlayPoints", "penaltyMinutes", "shotPct", "gameWinningGoals", "overTimeGoals", "shortHandedGoals", "shortHandedPoints", "plusMinus", "points"],
    datasets: [{
        label:"player 1",
        data: [589, 445, 483, 503, 689, 692, 634, 123, 654, 789, 852, 963, 741, 159, 357],
        backgroundColor: colors[0]
    },
    {
        label:"player 2",
        data: [639, 465, 493, 478, 589, 632, 674, 357, 159, 741, 963, 852, 789, 654, 123],
        backgroundColor: colors[1]
    }]
    },
    options: {
    legend: {
        display: true
    },
    scales: {
        xAxes: [{
        barPercentage: 0.4,
        categoryPercentage: 0.5
        }]
    }
    }
    });
}