document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myDoughnutChart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      }
    });
  });
