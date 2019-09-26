import React, { Component } from 'react';
import Button from "../../../components/Button/Button";
import { connect } from 'react-redux';

class BusinessForm extends Component {

  state = {
    title: '',
    goalHours: 0
  }

  titleHandler = (e) => {
    this.setState({title: e.target.value})
  }

  hoursHandler = (e) =>{
    this.setState({goalHours: e.target.value})
  }

  addBusiness = () => {
    let data = {
      id: this.props.business.length,
      title: this.state.title,
      goalHours: this.state.goalHours,
      hours: 0,
      description: '',
      progress: 0,
    }
    this.props.addBusiness(data);
}




  render(){
    return(
      <div>
        <input onChange={(e)=>this.titleHandler(e)} type="text" placeholder="Title"/>
        <input onChange={(e)=>this.hoursHandler(e)} type="number" placeholder="Your goal (in hours)"/><br/>
        <Button clicked={this.addBusiness}>asd</Button>
      </div>
      )
  }

}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

export default connect(mapStateToProps)(BusinessForm);