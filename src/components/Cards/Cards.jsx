import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Cards = ({card}) => {
    const {id, image , title, Category, bg_color, btn_color, text_color} = card;


    return (
        <Link to={`/Cards/${id}`}>
        <div>
            <div>
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="p-4 rounded-b-lg space-y-2" style={{backgroundColor: bg_color}}>
                <div className="py-1 px-3 rounded-md inline-block" style={{backgroundColor: btn_color}}>
                    <p className="font-semibold" style={{color: text_color}}>{Category}</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold" style={{color: text_color}}>{title}</h1>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Cards;

Cards.propTypes={
    card: PropTypes.object.isRequired
}