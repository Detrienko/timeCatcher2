import React, {Component} from 'react';
import classes from './BusinessList.module.css';
import addBusiness from '../../images/icons/addBusiness.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';

import BusinessForm from '../../containers/Forms/BusinessForm/BusinessForm';
import BusinessTab from '../BusinessTab/BusinessTab';

class BusinessList extends Component {

  state={
    isBusinessFormShown: false,
  }

  showBusinessForm = () => {
    this.setState({isBusinessFormShown: !this.state.isBusinessFormShown})
  }

  render(){

  let businessForm = null;

  if(this.state.isBusinessFormShown){
    businessForm = <BusinessForm addBusiness={this.props.addBusiness}/>;
  }   

  let businessTab = this.props.business.map(
    (el)=><BusinessTab business={el}/>
    ) 

      console.log('here');
      console.log(this.props);

  return (
  	<div className={classes.businessListWrapper}>
  		<img/>
  		<h1>Time Catcher</h1>
  		<h2>Business List</h2>
      <button onClick={this.showBusinessForm} className={classes.createBusinessBtn}>
        <img className={classes.addBusinessIcon}/>
  			<span>Create Business</span>
  		</button>
      {businessForm}
	    <ul>
        {businessTab}
	    </ul>	
    </div>	
  );
}
}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      addBusiness: (data) => dispatch(actions.addBusiness(data)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
