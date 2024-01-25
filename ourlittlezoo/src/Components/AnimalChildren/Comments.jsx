import { useState } from "react";
import { useParams } from "react-router-dom";


function Comments({ comments , name }){
    
    const { id } = useParams();
    const [ formData , setFormData ] = useState("");
    const [ commComment , setCommComment ] = useState(comments)
    const commentsToRender = commComment.map((comment) => {
       return ( 
        <div className="ui comments">
            <div className="">
                <div className="content">
                    <p className="ui center align" key={comment}>{comment}</p>
                </div>
            </div>
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
            <h2 className="ui dividing header">Community Comments</h2>
            <form class="ui form" onSubmit={handleCommentSubmit} type="submit">
                <div class="field">
                    <label>What surprised <strong>you</strong> about the {name}</label>
                    <input onChange={ e => setFormData(e.target.value)} type="text" value={formData} />
                    <button type="Submit">Submit</button>
                </div>
            </form>
        <div className="">
            {commentsToRender}
        </div>
      </div>

    )
}

export default Comments;