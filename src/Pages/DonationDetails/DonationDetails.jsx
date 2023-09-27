import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from "sweetalert";

const DonationDetails = () => {
      const [donation, setDonation] = useState({});
      const { id } = useParams()
      const donations = useLoaderData();

      useEffect(() => {
            const findDonation = donations?.find(a => a.id === id);
            setDonation(findDonation)
      }, [donations, id]);


      const addDonation = (newDonation) => {
            const existingDonations = JSON.parse(localStorage.getItem('donationArray')) || [];

            const alreadyAdded = existingDonations.find(a => a.id === newDonation.id)
            if (!alreadyAdded) {
                  const updatedDonations = [...existingDonations, newDonation];
                  localStorage.setItem('donationArray', JSON.stringify(updatedDonations));

                  swal("Good job!", "success");
            } else {
                  swal("Already exists", `${newDonation.title}`);
            }
      };


      const handleClick = () => {
            const newDonation = donation;
            addDonation(newDonation);
      };

      return (
            <div className='pb-[120px]'>
                  <div className='relative'>
                        <img className='w-full h-[500px]' src={donation.image} alt={donation.title} />
                        <div className='w-full absolute z-auto bottom-0 left-0 py-[37px] pl-[37px] bg-[#0b0b0b] opacity-75'>
                              <button onClick={handleClick} className='bg-[#FF444A] rounded-[4px] text-white px-[26px] py-4'>donate ${donation.price}</button>
                        </div>
                  </div>
                  <div className='mt-[56px]'>
                        <h2 className="text-[40px] font-bold text-[#0b0b0b] mb-6">{donation.title}</h2>
                        <p>{donation.description}</p>
                  </div>

            </div>
      );
};

export default DonationDetails;