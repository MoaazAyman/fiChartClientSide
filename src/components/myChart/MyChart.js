import Chart from "react-apexcharts";
import "./MyChart.css";

const MyChart = ({ tickerDataFetched }) => {
  //data on the y-axis
  const series = tickerDataShape(tickerDataFetched);

  const options = {
    //data on the x-axis
    chart: {
      type: "candlestick",
      height: 200,
      zoom: {
        enabled: true,
        type: "x",
        resetOnAfterZoom: false,
      },
      pan: {
        enabled: true,
      },
    },
    xaxis: {
      type: "datetime",
      categories: tickerDataFetched.map((item) => item.timestamp),
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    fill: {
      colors: ["#F44336"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Financial Market Data ",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px",
      },
    },
  };

  function tickerDataShape(tickerFetchedData) {
    return [
      {
        name: "Volume",
        data: tickerFetchedData.map((item) => ({
          x: new Date(item.timestamp),
          y: [item.open, item.high, item.low, item.close, item.volume],
        })),
      },
    ];
  }

  return (
    <div className="chart" data-testid="my-chart">
      <Chart
        options={options}
        series={series}
        type="bar"
        height="450"
        width="100%"
        background="#f4f4f4"
      />
    </div>
  );
};

export default MyChart;
