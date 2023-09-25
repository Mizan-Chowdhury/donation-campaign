import { Link } from "react-router-dom";

const DonatedCard = ({ card }) => {
  const {id,image_2,title,Category,price,bg_color,btn_color,text_color} = card;
  return (
    <div>
      <div className="flex">
        <div className="w-72">
          <img className="w-full h-full" src={image_2} alt="" />
        </div>
        <div
          className="p-4 rounded-r-lg space-y-2 w-full"
          style={{ backgroundColor: bg_color }}
        >
          <div
            className="rounded-md inline-block p-1 px-2"
            style={{ backgroundColor: btn_color }}
          >
            <p className="font-semibold" style={{ color: text_color }}>
              {Category}
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div>
            <p style={{ color: text_color }}>${price}</p>
          </div>
          <Link to={`/Cards/${id}`}><div>
            <button
              className="p-1 px-2 rounded text-white"
              style={{ backgroundColor: text_color }}
            >
              View Details
            </button>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
