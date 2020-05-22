class Counter extends React.Component {

  state = {
    count: 0,
    result: 0
  }

  handleMatchClick(type, number) {
    debugger
    if (type === "substraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleMatchClick.bind(this, "substractions", 10)}>-10</button>
        <button>-1</button>
        <button>Reset</button>
        <button>+1</button>
        <h1>Liczba kliknięć:  {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    )

  }

}

ReactDOM.render(<Counter />, document.getElementById('root'))