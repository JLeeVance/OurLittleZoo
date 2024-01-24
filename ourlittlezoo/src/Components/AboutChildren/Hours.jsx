
function Hours(){

    return(
        <div className="ui segment">
            <div className="ui card">
                <h1 className="ui header">Hours of Operation:</h1>
                <div>
                    <h2 className="ui header">Monday - Friday:</h2>
                    <div>
                    <p>Zoo Gates Open: 9:00 AM</p>
                    <p>Last Entry: 4:30 PM</p>
                    <p>Zoo Closes: 5:00 PM</p>
                    </div>
                </div>
                <div>
                    <h2 className="ui header">Saturday - Sunday:</h2>
                    <div>
                        <p>Zoo Gates Open: 10:00 AM</p>
                        <p>Last Entry: 4:30 PM</p>
                        <p>Zoo Closes: 5:30 PM</p>
                    </div>
                </div>
                <div>
                    <h2 className="ui header">Special Events and Holidays:</h2>
                    <ul>
                        <p>Please check our Events Page for holiday hours, extended hours, and special events.</p>
                    </ul>
                </div>
                <p><em>Note: Zoo hours are subject to change. We recommend contacting us for the most up-to-date information</em></p>
            </div>
        </div>
    )
}

export default Hours;