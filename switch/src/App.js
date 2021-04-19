import './App.css';
import React from 'react';
import Top from './components/Top/Top';
import Bottom from './components/Bottom/Bottom';


class App extends React.Component {
  state ={colour: "black"}

    switching = (x) => {
      if (x === true) {
        this.setState({
          colour:"white"
        })
      }
      else {
        this.setState({
          colour:"black"
        })
      }
    }

    render () {
      return (
        <div className="App">
          <Top colour={this.state.colour} />
          <Bottom  switching={this.switching} />
        </div>
      );
  }
}


export default App;
