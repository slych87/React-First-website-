//Przycisk - po kliknięciu dodawana jest literka do tekstu.
class App extends React.Component {

  state = {
    text: "",
    number: 2
  }

  handleClick() {
    // this.state.text += "a";
    // console.log(this.state.text);
    console.log(this);
    const letter = "a"
    // this.setState({
    //   text: this.state.text + letter,
    // })


    this.setState((prevState) => {
      return {
        text: this.prevState.text + letter,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))