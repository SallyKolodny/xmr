const csvUrl = '/data/stacked_shares_found.csv';
const dateData = [];
const totalData = [];

Papa.parse(csvUrl, {
  download: true,
  header: true,
  delimiter: ",",
  complete: data => {
    data.data.forEach(row => {
      const dateString = row['Date'];
      const value = row['Shares Found'];

      // Check for missing or invalid data
      if (!dateString || isNaN(value)) {
        console.log('Invalid or missing data found. Skipping this row.');
        return;
      }

      // Parse the date string and convert it to a timestamp
      const date = new Date(dateString).getTime();

      dateData.push(date);
      //totalData.push(Number(total));
      totalData.push({ x: date, y: value });

    });
    
    const areaOptions = {
      chart: {
        id: "barChart",
        stacked: true,
        type: "bar",
        height: 275,
        foreColor: "#ccc",
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      colors: ["#00baec"],
      stroke: {
	    curve: 'stepline',
        width: 3
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0,
        }
      },
      markers: {
        size: 0,
        colors: ["#000524"],
        strokeColor: "#00baec",
        strokeWidth: 1
      },
      series: [
        {
          name: "Shares Found",
          data: totalData
        }
      ],
      tooltip: {
        theme: "dark"
      },
      title: {
	    text: 'Shares Found',
	    align: 'left'
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        min: 0
      }
    };

    var areaChart = new ApexCharts(document.querySelector("#areaChart"), areaOptions);
    areaChart.render();

  }});

