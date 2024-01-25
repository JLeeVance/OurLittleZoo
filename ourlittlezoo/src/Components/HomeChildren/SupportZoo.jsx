import React, { useState } from 'react';
import SupportText from './SupportText';


function SupportZoo() {

    const [donationAmount, setDonationAmount] = useState('');
    const [totalDonation, setTotalDonation] = useState(1340);
    const [showSupport , setShowSupport] = useState(false)


    const handleDonationAmount = (e) => {
        const amount = parseFloat(e.target.value);
        setDonationAmount(amount);
        console.log(amount);
    }
    
    const handleDonationSubmit = (e) => {
        e.preventDefault();

        if (donationAmount > 0) {
            setTotalDonation(prevTotal =>  prevTotal + donationAmount);
            setDonationAmount('');
        }
        alert('Thank you for your donation!');
    }



    return (
        <div>
            <h1>Support OurLittleZoo</h1>
            <button className="ui button" onClick={() => setShowSupport(!showSupport)} style={{backgroundColor: "#90A07B"}} >Learn More</button>
            {showSupport && 
            <div className='ui fluid segment'>
                <SupportText  totalDonation={totalDonation}   />
                <form onSubmit={handleDonationSubmit} style={{alignItems: "center"}}>
                    <input
                    className='ui form'
                    type="number"
                    value={donationAmount}
                    onChange={handleDonationAmount}
                     placeholder='Donation amount'
                    step="0.01" // Allows decimale values in input
                    min="0" // Minimum input value
                    />
                    <button className="ui button " type='submit' style={{backgroundColor: "#90A07B"}}>Donate</button>
                </form>
            </div>
            }

        </div>
    )
}

export default SupportZoo;