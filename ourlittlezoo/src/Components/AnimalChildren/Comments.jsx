import { useState } from "react";
import { useParams } from "react-router-dom";


function Comments({ comments , name }){
    
    const { id } = useParams();
    const [ formData , setFormData ] = useState("");
    const [ commComment , setCommComment ] = useState(comments)
    const commentsToRender = commComment.map((comment) => {
       return ( 
        <div key={comment} className="ui circular segment">  
            <p >{comment}</p>
        </div>)
    })

    function handleCommentSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:3000/animals/${id}` , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "comments": [ ...comments , formData]
        })
        })
        setCommComment([...commComment , formData])
        setFormData("")
    }

    return(
        <div className={"ui rounded form" && "green"}>
            <h2 className="ui dividing huge header">Community Comments</h2>
            <form className="ui form" onSubmit={handleCommentSubmit} type="submit">
                <div className="field" style={{padding:15}}>
                    <label className="ui sub header" style={{padding:10}}>What surprised you about the {name}?</label>
                    <input onChange={ e => setFormData(e.target.value)} type="text" value={formData} />
                    <div style={{padding:10}}>
                        <button className="ui button" type="Submit" style={{backgroundColor: "#90A07B" , padding:10}}  >Submit</button>
                    </div>
                </div>
            </form>
            <div className="ui one column grid">
                {commentsToRender}
            </div>
      </div>
    )
}

export default Comments;