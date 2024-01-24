import React, { useState } from 'react';

function SupportZoo() {

    const [donationAmount, setDonationAmount] = useState('');
    const [totalDonation, setTotalDonation] = useState(0);


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
            <p>Help keep the Zoo Free to the Public!</p>
            <p>Your donation helps us keep the zoo free for everyone. It supports animal care, habitat maintenance, and educational programs, ensuring the zoo remains a place of wonder and learning for all. Join us in making a difference. Every contribution counts in keeping the adventure accessible to everyone.</p>
            <p>Total Donations This Month: ${totalDonation.toFixed(2)}</p>
            <form onSubmit={handleDonationSubmit}>
                <input
                type="number"
                value={donationAmount}
                onChange={handleDonationAmount}
                placeholder='Enter donation amount'
                step="0.01" // Allows decimale values in input
                min="0" // Minimum input value
                />
                <button type='submit'>Donate</button>
            </form>
        </div>
    )
}

export default SupportZoo;