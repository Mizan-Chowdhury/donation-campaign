import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donation = () => {
    const [data,setData]=useState([]);
    const [error, setError] = useState('');
    useEffect(()=>{
        const getLsData = JSON.parse(localStorage.getItem('myDonation'));
        if(getLsData){
            setData(getLsData);
        }else{
            setError('data nai');
        }
    },[])
    console.log(data);
    return (
        <div>
           {
            error? (<p>{error}</p>)
            :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-5 lg:p-32">
                {
                    data?.map(card=> <DonatedCard key={card.id} card={card}></DonatedCard>)
                }
            </div>
           }
        </div>
    );
};

export default Donation;