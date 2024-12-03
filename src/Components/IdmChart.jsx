import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Indeks Desa Membangun (IDM)",
  },
  subtitle: {
    text: "SKOR : IKS, IKE, IKL",
  },
  tooltip: {
    headerFormat: "",
    pointFormat:
      '<span style="color:{point.color};">\u25CF</span> <b> {point.z}</b><br/><br/>' +
      "Skor : <b>{point.y}</b><br/>" +
      "Persentase : <b>{point.percentage:.1f} %</b><br/>",
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
      minPointSize: 100,
      innerSize: "20%",
      zMin: 0,
      name: "countries",
      borderRadius: 5,
      data: [
        {
          name: `IKS`,
          y: 0.89142857142857,
          z: `Indeks Ketahanan Sosial`,
        },
        {
          name: `IKE`,
          y: 0.73333333333333,
          z: `Indeks Ketahanan Ekonomi`,
        },
        {
          name: `IKL`,
          y: 0.93333333333333,
          z: `Indeks Ketahanan Lingkungan`,
        },
      ],
      colors: ["#4caefe", "#23e274", "#cfeb1a"],
    },
  ],
};

const IdmChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default IdmChart;
