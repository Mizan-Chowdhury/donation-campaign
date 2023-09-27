import Swal from "sweetalert2";
import { saveDonatedCardToLocalStorage } from "../utility/donatedCards";

const ClickedCard = ({ card }) => {
  const { image, title, description, price, text_color } = card;

  const hanleDonatedCard = () => {
    Swal.fire(
      "Congratulation!",
      "Thank you for donating! Your support means a lot to us.",
      "success"
    );
    saveDonatedCardToLocalStorage(card);
  };

  return (
    <div className="px-2 lg:px-32 ">
      <div className="rounded relative">
        <img className="w-full h-[75vh] rounded-3xl" src={image} alt="" />
        <div className="absolute bg-black bg-opacity-50 bottom-0 right-0 left-0 py-7 rounded-b-3xl">
          <button
            onClick={hanleDonatedCard}
            className="p-2 px-3 ml-5 text-white rounded"
            style={{ backgroundColor: text_color }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="rounded-b-lg space-y-2">
        <div>
          <h1 className="text-3xl font-bold my-5">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ClickedCard;
