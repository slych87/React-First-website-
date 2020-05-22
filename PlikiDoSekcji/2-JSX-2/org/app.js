const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big";

const handleClick = () => alert("klik!")

const main = (
  <div>
    <h1 person="osoby" onClick={handleClick} className="red">Pierwszy artykuł</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eaque amet! A ad assumenda autem. Cumque placeat deleniti libero neque a facilis nam mollitia vitae minima? Eum atque quaerat nisi.</p>
  </div>


)

const text = "stopka";

const largeTxt = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste fugit doloremque, amet sint quibusdam possimus, veritatis odit laborum minima esse exercitationem similique ratione deleniti vel iusto nam eos magnam quia?"
const footer = (
  <footer>
    <p className={classBig}>{text}</p>
    {largeTxt}
  </footer>
)

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'));