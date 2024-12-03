import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DataDesaChart = ({ data, title }) => {
  const options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
      },
    },
    title: {
      text: title,
    },
    subtitle: {
      text: "Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya",
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Medals",
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DataDesaChart;
