import React from "react";
import Card from "./components/Card";

class List extends React.Component{
    constructor(){
        super();
        this.state={
            key:0,
            cards:[]
        }
        this.fetchItems=this.fetchItems.bind(this);
    }
    async componentDidMount(){
        this.fetchItems();
    }
    async fetchItems(){
        const data= await fetch('https://dog.ceo/api/breed/husky/images/random/9');
        const items= await data.json();
        let i=this.state.key;
        const cards=items.message.map(item=>{
            i++
            this.setState({
                key: i
            })
            return <Card key={this.state.key} imgUrl={item}/>
        });
        this.setState({cards:this.state.cards.concat(cards)});
        
    }


    render(){
        return(
            <div id="cards" className="row">
                {this.state.cards}
                <button className="btn btn-primary text-center pagination-centered col-12" onClick={this.fetchItems}>More</button>
            </div>);
        }
}
export default List;