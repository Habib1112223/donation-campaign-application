import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useRouteLoaderData } from 'react-router-dom';


const Cards = ({ cards, searchItem }) => {
      const [filteredCategory, setFilteredCategory] = useState([]);
      const [noFoundCat, setNoFoundCat]  = useState("")

      useEffect(() => {
            if (!searchItem || searchItem.toLowerCase() === 'all') {
              setFilteredCategory([...cards]);
            } else {
              const filtered = cards.filter(cat => cat.category.toLowerCase() === searchItem.toLowerCase());
              if (filtered.length === 0) {
                  setNoFoundCat(`No matching items for searchItem: ${searchItem}`);
              }
              setFilteredCategory([...filtered]);
            }
          }, [cards, searchItem]);


      return (
            <div className="lg:py-10 py-5 px-2 lg:px-0">
                  
                  <div className='grid lg:grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
                        {
                              
                              filteredCategory?.map(card => <Card key={card.id} card={card}></Card>)
                        }
                  </div>
                  <div>
                        {
                              filteredCategory.length === 0 && <h2 className='text-2xl text-center font-bold'>{noFoundCat}</h2>
                        }
                  </div>
            </div>
      );
};

export default Cards;