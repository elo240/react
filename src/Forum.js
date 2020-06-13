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
        if(this.state.newpost.trim().length>4){
            this.doSendNewPost();
        }else{
            alert("New post have to containd minimum of 5 characters")
        }
    }
    async doSendNewPost(){
        try{
            let res= await fetch("/forum/newpost",{
                method: "post",
                headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},body:JSON.stringify({
                    userID:UserStore.userID,
                    newpost:this.state.newpost
                })
            });
            let result=await res.json();
            console.log(result);
            if(result && result.success){
                alert("Post added correctly");
                this.forceUpdate();
            }else{
                alert("Error, please try again later");
            }
        }catch(e){
            console.log(e);
        }
    }
    async doRemove(str){
        try{
            let postdata=str.split(".");
            console.log(postdata);
            let res = await fetch("/forum/remove", {
				method: "post",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					postid:postdata[1],
					ownerid:postdata[0]
				}),
            });
            let result= await res.json();
            if(result && result.success){
                alert("Post delted");
            }else{
                alert("Error, please try again later");
            }
        }catch(e){
            console.log(e);
        }

    }
    async componentDidMount(){
        try{
            let res=await fetch("/forum/load",{
                method: "post",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				}, 
            });
            let result=await res.json();
            if(result && result.success){
                const dbposts=result.body.map(post=>{
                    if (UserStore.userID===post.user_id || UserStore.userID===1){
                        return (<tr>
                            <td>{post.id}</td>
                            <td>{post.username}</td>
                            <td>{post.body}</td>
                            <td>
                                <Button onClick={()=>this.doRemove(`${post.username}.${post.id}`)} >Delete</Button>
                            </td>
                            </tr>);
                    }else{
                        return (<tr>
                            <td>{post.id}</td>
                            <td>{post.username}</td>
                            <td>{post.body}</td>
                            <td></td>
                            </tr>);
                    }
                })
                this.setState({posts:dbposts});

            }else{
                alert("Couldnt connect please try again later");
            }
        }catch(e){
            console.log(e);
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
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