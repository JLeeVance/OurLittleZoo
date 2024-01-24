import React from 'react';
import AnimalPreview from './HomeChildren/AnimalPreview';
import EventPreview from './HomeChildren/EventPreview';
import SupportZoo from './HomeChildren/SupportZoo';


function Home( {events, animals} ) {


    return (
        <div>
            <AnimalPreview animals={animals} />
            <EventPreview events={events} />
            <SupportZoo />
        </div>
        
        
    )

}
export default Home;
