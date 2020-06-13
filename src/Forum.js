import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserStore from "./stores/UserStore";
class Forum extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[],
            newpost:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
		const value = target.value;
		const name = target.name;
        this.setState({ [name]: value });
    }
    handleSubmit(event){
        event.preventDefault();


    }
    render(){
        return(
            <div className="container-fluid">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>Number</th>
                        <th>Author</th>
                        <th>Post</th>
                        <th>Mod</th>
                    </tr>
                    </thead>
                    {this.state.posts}
                    <tr>
                        <td></td>
                        <td>{UserStore.username}</td>
                        <td><TextField name="newpost" required onChange={this.handleChange} placeholder="Your post" type="textarea" value={this.state.newpost} /></td>
                        <td><Button variant="outlined" onClick={this.handleSubmit}>Submit</Button></td>
                </tr>
                </table>
            </div>
        )  
        ;
    }
}
export default Forum;