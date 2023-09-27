// import Chart from "react-google-charts";
import { Chart } from "react-google-charts";


const Statistics = () => {

      const data = [
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7], // CSS-style declaration
      ];
    
    const options = {
      title: "My Daily Activities",
      pieHole: 0.4,
      is3D: false,
    };

      return (
            <div className="h-[65vh] flex justify-center items-center">
                 <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
            </div>
      );
};

export default Statistics;