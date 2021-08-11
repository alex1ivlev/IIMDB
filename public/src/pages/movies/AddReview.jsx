import React, {useState} from "react";
import api from "../../api";

export function AddReview(props){

    const [newReview, setNewReview] = useState({title: "", comment: "", rank: null});
    const submitHandler = e => {
            e.preventDefault();
            api.addReview(props.id, newReview).then(res => {
                console.log(res.data);
                setNewReview({title: "", comment: "", rank: null});
            })
    }

    return(
        <div key={props.id}>
            <form onSubmit={submitHandler}>
                <h3> Add new review : </h3>
                <label htmlFor="title">
                      Review title: <input type="text" name="title" id="title" className="form-label"  textAlign="left"
                                            onChange={e => setNewReview({...newReview, title: e.target.value})}
                                            value={newReview.title}/><br/>
                </label>
                <label htmlFor="comment">
                    Comment: <input type="text" name="comment" id="comment" className="form-label"  textAlign="left"
                                    onChange={e => setNewReview({...newReview, comment: e.target.value})}
                                    value={newReview.comment}/><br/>
                </label>
                <label htmlFor="rank">
                    Rank: <input type="number" name="rank" id ="rank" className="form-label"  textAlign="left"
                                 onChange={e => setNewReview({...newReview, rank: parseInt(e.target.value)})}
                                 value={newReview.rank}/> <br/>
                </label>
                <input type="submit" value="SUBMIT REVIEW"/>
            </form>

        </div>
    )
}
