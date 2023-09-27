import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  const [LCData, setLCData] = useState([]);
  const jsonData = useLoaderData();

  useEffect(() => {
    const lcData = JSON.parse(localStorage.getItem("myDonation"));
    setLCData(lcData);
  }, []);

  let donatedPercent = 0;
  if (LCData) {
    const donatedData = LCData.map((data) => data.length);
    donatedPercent = (donatedData.length / jsonData.length) * 100;
  }
  const totalDonation = 100 - donatedPercent;

  const data = [
    ["", ""],
    ["Total Donation", totalDonation],
    ["Your Donation", donatedPercent],
  ];

  const options = {
    legend: "none",
    pieStartAngle: -150,
  };

  return (
    <div className="mx-auto mt-[95px] lg:mt-0">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
      <div className="flex justify-center gap-10 pb-5">
        <div className="flex items-center gap-3">
          <p className="text-lg">Your Donation</p>
          <div className="bg-[#DC3912] w-8 lg:w-20 h-3 rounded-sm"></div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-lg">Total Donation</p>
          <div className="bg-[#3366CC] w-8 lg:w-20 h-3 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
