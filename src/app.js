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
      count: 0
    }
  }

  handleAdd = e => {
    e.preventDefault();

    this.setState({ count: this.state.count + 1 });
  }

  handleSub = e => {
    e.preventDefault();

    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <section>
        <p>{ this.state.count }</p>
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
