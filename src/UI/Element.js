import React from "react";
// import Matrix from "./Matrix"; 

class Element extends React.Component{
    el = this.props.el
    constructor(props) {
        super(props)
        this.state = {
            numb: 0,
            id: 0 
        }
    }
    
    render(){

        return(
            <form>
                <input type='number' el='' onChange={(e)=> this.setState({numb: e.target.value }) /*this.props.onAdd({
                    el: this.state.el})*/} />
            </form>    
        )
    }
}

export default Element