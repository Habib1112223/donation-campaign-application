
import { useEffect, useState } from "react";
import FavoriteDonationCard from "../../components/Cards/FavouriteDonationCard";

const Donation = () => {
      const [favoriteDonations, setFavoriteDonations] = useState([]);
      const initialItemsToShow = 4;
      const [showAll, setShowAll] = useState(false);
      const itemsToShow = showAll ? favoriteDonations.length : initialItemsToShow;
      const [noData, setNoData] = useState();


      useEffect(() => {
            const storedDonation = localStorage.getItem('donationArray');
            if (storedDonation) {
                  const parsedDonation = JSON.parse(storedDonation);
                  setFavoriteDonations(parsedDonation);
            } else {
                  setNoData(
                        <div className="flex justify-center items-center h-[65vh]">
                              <h2 className="text-5xl">No favorite donation data found.</h2>
                        </div>
                  );
            }
      }, [])

      const clearFavoriteData = () => {
            localStorage.clear("donationArray");
            setFavoriteDonations([]);
            setNoData(
                  <div className="flex justify-center items-center h-[65vh]">
                        <h2 className="text-5xl">No favorite donation data found.</h2>
                  </div>
            );

      }

      return (
            <div className="pb-10 px-2 lg:px-0">
                  {
                        noData ? noData : <>

                              <div className="grid lg:grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {
                                          favoriteDonations.slice(0, itemsToShow)?.map(favorite =>
                                                <FavoriteDonationCard key={favorite.id} favorite={favorite}></FavoriteDonationCard>
                                          )
                                    }
                              </div>
                              <div className="text-center mt-10">
                                    {
                                          favoriteDonations.length >= 5 ? <>{!showAll && (
                                                <button className="text-base px-7 py-[14px] rounded-md bg-[#009444] text-white" onClick={() => setShowAll(true)}>Show All</button>
                                          )}</> : " "
                                    }

                              </div>

                        </>
                  }

                  <div className="text-center">
                        {
                              favoriteDonations.length > 0 ? <><button className=" text-base mt-5 px-7 py-[14px] rounded-md bg-[#D58056] text-white" onClick={clearFavoriteData}>Remove Data</button></> : " "
                        }
                  </div>

            </div>
      );
};

export default Donation;