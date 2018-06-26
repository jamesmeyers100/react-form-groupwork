import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import SnackList from './SnackList/SnackList';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
});

class App extends Component {
  
  constructor(){
    super();
    this.state={
      snack: ''
    }
  }

  addSnack = (event) => {
    event.preventDefault();
    const action = {type: 'ADD_SNACK', payload: this.state.snack};
    this.props.dispatch(action);
    this.state.snack = '';
  }

  handleSnackChange = (event) => {
    this.setState({
      snack: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Add Snack</h3>
        <form>
          <input onChange={this.handleSnackChange} value={this.state.snack}/>
          <input type="submit" onClick={this.addSnack}/>
        </form>
        <SnackList />
        {/* <div>
                {this.props.reduxStore.snackReducer.map( (snack, i)=> <p>{snack}</p>)}
        </div> */}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
