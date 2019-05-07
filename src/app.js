import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Coolest Counter App</h1>
      </header>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      count: 0
    }
  }

  handleAdd = e => {
    e.preventDefault();
    let clicks = this.state.clicks + 1;
    let count = this.state.count + 1;

    this.setState({ clicks, count });
  }

  handleSub = e => {
    e.preventDefault();
    let clicks = this.state.clicks + 1;
    let count = this.state.count - 1;

    this.setState({ clicks, count});
  }

  render() {
    return (
      <section>
        <p>Number of clicks: { this.state.clicks }</p>
        <h3>Current count: { this.state.count }</h3>
        <button onClick={ this.handleAdd }>+</button>
        <button onClick={ this.handleSub }>-</button>
      </section>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    )
  }
}

export default App;
