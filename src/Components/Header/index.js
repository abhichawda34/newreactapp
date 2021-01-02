import React, {Component} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            title: 'MY default'
        }
    }

    componentDidMount(){
        this.setState = {
            title: 'New title'
        }
    }

    
    render(){
     return(
         <div>
             <h1>{this.props.title}</h1>
             <h2>{this.state.title}</h2>
         </div>
     )   
    }
}

export default Header;