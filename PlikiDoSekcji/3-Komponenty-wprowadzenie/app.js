// komponent funkcyjny, bezstanowy

const Header = () => {
  return (

    <h1>Witaj na stronie</h1>

  )
}

//komponent klasowy,stanowy

class Article extends React.Component {
  // state = {
  //   number: 0,
  // }

  render() {
    return (
      <section>
        <h2>Artykuł numer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est qui laboriosam cum sit perspiciatis sunt eveniet aut debitis praesentium, ratione accusantium provident et quos aspernatur corrupti iste voluptatibus tempora!</p>
      </section>
    )
  }
}

const Blog = () => {
  return (
    <>
      <Header />
      <Article />
    </>
  )
}

ReactDOM.render(<App2 />, document.getElementById('root'))