import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCard = ({ card }) => {
  const {
    id,
    image_2,
    title,
    Category,
    price,
    bg_color,
    btn_color,
    text_color,
  } = card;

  return (
    <div>
      <div className="flex flex-grow">
        <div className="flex-grow">
          <img className="w-full h-full" src={image_2} alt="" />
        </div>
        <div
          className="p-4 rounded-r-lg space-y-1 lg:space-y-2 w-full flex-grow"
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
            <h1 className="text-lg lg:text-xl font-bold">{title}</h1>
          </div>
          <div>
            <p style={{ color: text_color }}>${price.toFixed(2)}</p>
          </div>
          <div>
            <Link to={`/Cards/${id}`}>
              <button
                className="p-1 px-2 rounded text-white"
                style={{ backgroundColor: text_color }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;

DonatedCard.propTypes = {
  card: PropTypes.object.isRequired,
};
