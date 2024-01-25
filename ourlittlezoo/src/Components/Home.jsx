import React from 'react';
import AnimalPreview from './HomeChildren/AnimalPreview';
import EventPreview from './HomeChildren/EventPreview';
import SupportZoo from './HomeChildren/SupportZoo';


function Home( {events, animals} ) {

    return (
        <>
            <div className='two wide column float left center aligned'>
                <EventPreview events={events} />
            </div> 
            <div className='ten wide column center aligned'>
                <div className='ui header center aligned' style={{paddingTop: 20}}>
                    <span className="lightfont" style={{fontFamily: "Nixie One"}}>OurLitteZoo opened in the spring of 2005, and has grown every year since. We currently host three main exhibits; North America, Asia, and Africa</span>
                </div>
                <div>
                    <div style={{padding : 50}}>
                        <h1 className='ui medium header'>some of our friends currently on Exhibit...</h1>
                    </div>
                    <AnimalPreview animals={animals} />
                </div>
            </div>
            <div className='four wide column float right center aligned'>
                <SupportZoo  />
            </div>
        </>
    )

}
export default Home;
