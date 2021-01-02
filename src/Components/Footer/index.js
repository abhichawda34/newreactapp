import React, {Component} from 'react';

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            title : 'New Footer 2'
        }
    }


    render(){
     return(
         <div>
             <p>{this.props.title}</p>
             <p>{this.state.title}</p>
         </div>
     )   
    }
}

export default Footer;
