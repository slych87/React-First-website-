// Nowy komponent wyświetlenie tekstu
//losowanie liczky
//Wyświetlanie nazwy przycisku z obiektu props, ze zmiennej bezpośrednio lub z obiektu state.b 

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: ""
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    text: "",
    btn: 'uruchom'
  }

  handleClick = () => {

    const number = Math.floor(Math.random() * 10)

    this.setState(() => ({
      text: this.state.text + number
    })
    )
  }


  render() {
    const btnName = "stwórz liczbę"
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{this.state.btn}</button>
        <PanelResult text={this.state.text} />
      </React.Fragment>
    )

  }
}

const PanelResult = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

ReactDOM.render(<App btnTitle="dodaj cyfrę" />, document.getElementById('root'))