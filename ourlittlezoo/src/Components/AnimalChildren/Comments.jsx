import { useState } from "react";
import { useParams } from "react-router-dom";


function Comments({ comments }){
    
    const { id } = useParams();
    const [ formData , setFormData ] = useState("");
    const [ commComment , setCommComment ] = useState(comments)
    const commentsToRender = commComment.map((comment) => <li key={comment} >{comment}</li>)

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
        <div>
            <h2>Community Comments</h2>
            <form onSubmit={handleCommentSubmit} type="submit">
                <input onChange={ e => setFormData(e.target.value)} type="text" value={formData} />
                <button type="Submit">Submit</button>
            </form>
            {commentsToRender}
        </div>

    )
}

export default Comments;