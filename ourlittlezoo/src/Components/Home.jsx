import React from 'react';
import AnimalPreview from './HomeChildren/AnimalPreview';
import EventPreview from './HomeChildren/EventPreview';
import SupportZoo from './HomeChildren/SupportZoo';


function Home( {events, animals} ) {

    return (
        <>
            <div className='two wide column float left'>
            <EventPreview events={events} />
            </div> 
            <div className='ten wide column'>
                <div>
                    <div style={{padding : 50}}>
                        <h1 className='ui header'>some of our friends currently on Exhibit...</h1>
                    </div>
                    <AnimalPreview animals={animals} />
                </div>
            </div>
                <div className='four wide column float right'>
                <SupportZoo  />
            </div>
        </>
    )

}
export default Home;
