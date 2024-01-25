
function Hours(){

    return(
        <div className="">
            <div className="ui card">
                <h1 style={{padding:10}} className="ui header center aligned">Hours of Operation:</h1>
                <div style={{padding:10}}>
                    <h2 className="ui header">Monday - Friday:</h2>
                    <div>
                    <p>Zoo Gates Open: 9:00 AM</p>
                    <p>Last Entry: 4:30 PM</p>
                    <p>Zoo Closes: 5:00 PM</p>
                    </div>
                </div>
                <div style={{padding:10}}>
                    <h2 className="ui header">Saturday - Sunday:</h2>
                    <div>
                        <p>Zoo Gates Open: 10:00 AM</p>
                        <p>Last Entry: 4:30 PM</p>
                        <p>Zoo Closes: 5:30 PM</p>
                    </div>
                </div>
                <div style={{padding:10}}>
                    <h2 className="ui header">Special Events and Holidays:</h2>
                    <span>Please check our Events Page for holiday hours, extended hours, and special events.</span> 
                </div>
                <div style={{padding:10}}>
                    <p><em>Note: Zoo hours are subject to change. We recommend contacting us for the most up-to-date information</em></p>
                </div>
            </div>
        </div>
    )
}

export default Hours;