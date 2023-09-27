import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donation = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const getLsData = JSON.parse(localStorage.getItem("myDonation"));
    if (getLsData) {
      setData(getLsData);
    } else {
      setError(<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center space-y-3">
      <h1 className="text-3xl lg:text-6xl font-bold">No donation found.</h1>
      <p className="text-xl">Please make a donation. Thank you.</p>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>);
    }
  }, [error.statusText, error.message]);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : seeAll ? (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 px-5 pt-10 lg:px-32 py-5">
          {data.map((card) => (
            <DonatedCard key={card.id} card={card}></DonatedCard>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 px-5 pt-10 lg:px-32 py-5">
          {data.slice(0, 4).map((card) => (
            <DonatedCard key={card.id} card={card}></DonatedCard>
          ))}
        </div>
      )}
      {data.length > 4 && <div className="py-10">
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
