import React, { useState } from 'react';
import SupportText from './SupportText';


function SupportZoo() {

    const [donationAmount, setDonationAmount] = useState('');
    const [totalDonation, setTotalDonation] = useState(0);
    const [showSupport , setShowSupport] = useState(false)


    const handleDonationAmount = (e) => {
        const amount = parseFloat(e.target.value);
        setDonationAmount(amount);
        console.log(amount);
    }
    
    const handleDonationSubmit = (e) => {
        e.preventDefault();
        console.log(donationAmount);
        if (donationAmount > 0) {
            setTotalDonation(prevTotal =>  prevTotal + donationAmount);
            setDonationAmount('');
        }
        alert('Thank you for your donation!');
    }



    return (
        <div>
            <h1>Support OurLittleZoo</h1>
            <button className="ui button" onClick={() => setShowSupport(!showSupport)}>Learn More</button>
            {showSupport && 
            <div>
                <SupportText  totalDonation={totalDonation}   />
                <form onSubmit={handleDonationSubmit}>
                    <input
                    type="number"
                    value={donationAmount}
                    onChange={handleDonationAmount}
                     placeholder='Enter donation amount'
                    step="0.01" // Allows decimale values in input
                    min="0" // Minimum input value
                    />
                    <button className="ui button " type='submit'>Donate</button>
                </form>
            </div>
            }

        </div>
    )
}

export default SupportZoo;