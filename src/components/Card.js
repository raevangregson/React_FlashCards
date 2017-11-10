import React, { Component } from 'react';
import {connect} from 'react-redux';

class Card extends Component{

render(){
  return(
    <div>
      {this.props.text};
    </div>
  )
}
}
function mapStateToProps(state){
  return{
    if (state.isFront){
          text:state.front;
        }
        else if (!state.isFront){
          text:state.back;
        }
  };
  }

export default connect((mapStateToProps)(Card));
