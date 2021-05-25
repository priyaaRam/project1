import React from 'react';
//import ReactDOM from 'react-dom';

export default class Customer extends React.Component{
 
    constructor(props){
    super(props);
    this.state={date:new Date()};
}

ChangeCnameHandler=()=>{
    this.setState({cname:'NewVal'});
}


    //life-cycle method of React
    render(){
        return(
            <div>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                <h2>{this.state.custid}</h2>
                <h2>{this.state.cname}</h2>
                <button onClick={this.ChangeCnameHandler}> Change State</button>
            </div>
        );        
    }

}

