import { useState } from "react";
import { useParams } from "react-router-dom";


function Comments({ comments }){
    
    const { id } = useParams();
    const [ formData , setFormData ] = useState("");
    const [ commComment , setCommComment ] = useState(comments)
    const commentsToRender = commComment.map((comment) => <li className="ui comment" key={comment} >{comment}</li>)

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
        <div className="ui form">
            <h2 className="ui dividing header">Community Comments</h2>
            <form onSubmit={handleCommentSubmit} type="submit">
                <input onChange={ e => setFormData(e.target.value)} type="text" value={formData} />
                <button type="Submit">Submit</button>
            </form>
            <div className="ui comments">
            {commentsToRender}
            </div>
        </div>

    )
}

export default Comments;