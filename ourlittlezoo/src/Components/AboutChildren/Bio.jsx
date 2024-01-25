import zooOwners from "../siteImages/zooOwners.jpg"


function Bio(){

    return(
        <div className="ui card , sixteen wide column">
            <div className="">
                <div className="sixteen wide column">
                    <h1 className="ui large header center aligned">Our Little Story...</h1>
                </div>

                <div className="ui grid">
                    <div className="eight wide column">
                        <div className="ui fluid text container" style={{padding:70}}>
                            <span style={{padding: 10}} >Meet Sarah and James Anderson, the passionate founders of OurLittleZoo, where a love for animals turned into a commitment to conservation. From volunteering at local shelters to global adventures in wildlife conservation, their journey led to the creation of a sanctuary that houses a diverse array of species.
                                At OurLittleZoo, we go beyond providing a captivating experience. Our mission is to be a force for positive change. Through education, advocacy, and hands-on initiatives, we aim to raise awareness about the delicate balance of nature and inspire responsibility toward our planet's precious inhabitants.
                                Every enclosure is designed with the well-being of the animals in mind. Our dedicated caretakers ensure that each resident receives the care, enrichment, and love they deserve. Join us at OurLittleZoo, where every visit contributes to the greater mission of preserving the wonders of the natural world. Together, let's make a difference, inspiring conservation one paw at a time.
                            </span>
                        </div>
                    </div>
                    <div className="eight wide column">
                        <div >
                            <img  className="ui circular image"  alt="Owners" src={zooOwners} />
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Bio;