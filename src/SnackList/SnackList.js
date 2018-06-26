import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  });
  
class SnackList extends Component {
    render(){
        return(
            <div>
                {this.props.reduxStore.snackReducer.map( (snack, i)=> <p key={i}>{snack}</p>
                )}
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(SnackList);
