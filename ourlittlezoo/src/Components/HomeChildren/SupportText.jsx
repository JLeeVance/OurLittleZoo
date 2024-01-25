
function SupportText({ totalDonation }){

    return(
        <div>
            <p>Help keep the Zoo Free to the Public!</p>
            <p>Your donation helps us keep the zoo free for everyone. It supports animal care, habitat maintenance, and educational programs, ensuring the zoo remains a place of wonder and learning for all. Join us in making a difference. Every contribution counts in keeping the adventure accessible to everyone.</p>
            <p>Total Donations This Month: ${totalDonation.toFixed(2)}</p>
        </div>
    )
}

export default SupportText;