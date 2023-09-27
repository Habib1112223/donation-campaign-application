import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteDonationCard = ({favorite}) => {
    const {id, image, title, price, category, button_bg_color, card_bg_color, text_color, category_bg_color} = favorite;

    return (
        <div className={`relative flex w-full max-w-[48rem] flex-row rounded-xl shadow-md`}>
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
                <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className={`p-6 bg-[${card_bg_color}] opacity-20 w-full`}>
                <h3 className={`text-[${text_color}] bg-[${category_bg_color}] bg-opacity-25 rounded-[4px] text-sm py-1 px-[10px] mb-3`}>{category}</h3>

                <h2 className={`mb-2 text-2xl font-semibold text-[${text_color}]`}>
                    {title}
                </h2>
                <p className={`mb-5 text-base font-semibold text-[${text_color}]`}>
                    ${price}
                </p>
                <Link className="inline-block" to={`/donation-details/${id}`}>
                    <button
                        className="px-4 py-[9px] rounded-[4px]"
                        type="button"
                    >
                        View Details
                       
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FavoriteDonationCard;