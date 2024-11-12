const csvUrl = '/data/blocks_found_dev.csv';
const dateData = [];
const totalData = [];

Papa.parse(csvUrl, {
  download: true,
  header: true,
  delimiter: ",",
  complete: data => {
    data.data.forEach(row => {
      const dateString = row['Date'];
      const value = row['Blocks Found'];

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

    var barOptions = {
      chart: {
        id: "barChart",
        height: 100,
        type: "bar",
        foreColor: "#ccc",
        brush: {
          target: "barChart",
          enabled: true
        },
        selection: {
          enabled: true,
          fill: {
            color: "#fff",
            opacity: 0.4
          },
          xaxis: {
            min: new Date("08 November 2024 00:00:00").getTime(),
            max: new Date("12 November 2024 23:59:59").getTime()
          }
        }
      },
      colors: ["#FF0080"],
      series: [
        {
          data: totalData
        }
      ],
      stroke: {
        width: 2
      },
      grid: {
        borderColor: "#444"
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        }
      },
    };

    var barChart = new ApexCharts(document.querySelector("#barChart"), barOptions);
    barChart.render();

  }});

