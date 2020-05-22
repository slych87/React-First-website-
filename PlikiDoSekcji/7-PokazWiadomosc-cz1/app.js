class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }

  handleMessageButton() {

    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive
    }))
  }

  render() {

    // console.log(this.state.messageIsActive)

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia error laudantium dolore! Error, reprehenderit corrupti nostrum rem perspiciatis adipisci illo, doloremque culpa quidem architecto distinctio, vitae assumenda modi voluptatibus!'

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : "Pokaż"}</button>
        {/*this.state.messageIsActive ? <p>{text}</p> : null*/}
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    )
  }
  // <p>{this.state.messageIsActive && text}</p>
}

ReactDOM.render(<Message />, document.getElementById('root'))