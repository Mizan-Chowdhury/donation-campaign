import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donation = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const getLsData = JSON.parse(localStorage.getItem("myDonation"));
    if (getLsData) {
      setData(getLsData);
    } else {
      setError("");
    }
  }, []);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : seeAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-5 pt-10 lg:px-32">
          {data?.map((card) => (
            <DonatedCard key={card.id} card={card}></DonatedCard>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-5 pt-10 lg:px-32">
          {data?.slice(0, 4).map((card) => (
            <DonatedCard key={card.id} card={card}></DonatedCard>
          ))}
        </div>
      )}
      {data.length >= 4 && <div className="py-10">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className={`block mx-auto ${
            seeAll && "hidden"
          } bg-[#009444] text-white rounded p-2 px-5`}
        >
          See All
        </button>
      </div>}
    </div>
  );
};

export default Donation;
