

import { Link } from "react-router-dom";


const Card = ({ card }) => {
      const { id, title, category, image, card_bg_color, text_color, category_bg_color} = card;

      return (
            <Link to={`/donation-details/${id}`}>
                  <div className="flex mx-w-96 flex-col rounded-xl shadow-md">
                        <img
                              src={image}
                              alt="img-blur-shadow"
                        />
                        <div className={`p-4 bg-[${card_bg_color}] bg-opacity-20`}>
                              <button className={`text-[${text_color}] bg-[${category_bg_color}] bg-opacity-25 py-1 px-[10px] rounded-[4px]`}>{category}</button>
                              <h5 className={`mt-2 text-xl font-semibold text-[${text_color}]`}>
                                    {title}
                              </h5>
                        </div>
                  </div>
            </Link>
      );
};

export default Card;

