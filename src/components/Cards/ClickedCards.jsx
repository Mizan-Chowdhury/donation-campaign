import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ClickedCard from "./ClickedCard";

const ClickedCards = () => {
  const { id } = useParams();
  const cards = useLoaderData();
  const [card, setCard] = useState([]);
  useEffect(() => {
    {
      const clickedCards = cards?.find((card) => card.id == id);
      setCard(clickedCards);
    }
  }, [cards, id]);
  return (
    <div className="py-10"><ClickedCard card={card}></ClickedCard></div>
  );
};

export default ClickedCards;
