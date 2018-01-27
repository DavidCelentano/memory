import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run_demo(root) {
  ReactDOM.render(<Demo moves={0} />, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moves: 0, tiles:['a', 'b', 'a', 'b', 'c', 'd', 'c', 'd', 'e', 'f', 'e', 'f', 'g', 'h', 'g', 'h'], matches: [], guess: '1'}; //TODO RANDOM
  }

  increment(moves) {
    var moves = 1 + this.state.moves;
    this.setState({moves: moves});
  }
  
  makeGuess(value) {
    if (this.state.guess == '1') {
      this.setState({guess: value});
    }
    else {
      if (this.state.guess == value) {
        var nMatches = this.state.matches;
        nMatches.push(value);
        this.setState({matches: nMatches});
        this.setState({guess: '1'});//reset guess
      }
    }
  }

  render() {
    var makeGuess = this.makeGuess.bind(this);
   // console.log(this.state.matches);
    return (
      <div className="row">
        <div className="col">
	  <Side state={this.state} matches={this.state.matches} makeGuess={makeGuess} value={this.state.tiles[0]} />
          <Side state={this.state} matches={this.state.matches} makeGuess={makeGuess} value={this.state.tiles[0]} />
        </div>
      </div>
    );
  }
}

function Side(params) {
  if (params.matches.includes(params.value)) {
    return (
      <div id="side-0" className="side col">
        <Button>{params.value}</Button>
      </div>
    );
  }
  else {
    return (
      <div id="side-0" className="side col">
	<Button onClick={() => params.makeGuess(params.value)}>?</Button>
      </div>
    );
  }
}

