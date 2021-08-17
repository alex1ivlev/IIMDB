import React, {useState} from "react";
import api from "../../api";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';


export function AddReview(props){

    const [newReview, setNewReview] = useState({title: "", comment: "", rank: 0});
    const submitHandler = e => {
            e.preventDefault();
            api.addReview(props.id, newReview).then(res => {
                console.log(res.data);
                setNewReview({title: "", comment: "", rank: 0});
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
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend"> Rank: </Typography>
                        <Rating
                            name="half-rating" defaultValue={0} precision={0.5}
                            onChange={e => setNewReview({...newReview, rank: parseInt(e.target.value)})}
                            value={newReview.rank}
                        />
                    </Box>
                </label>
                <input type="submit" value="SUBMIT REVIEW"/>
            </form>

        </div>
    )
}
