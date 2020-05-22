const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big";

const main = (
  <div>
    <h1 person="osoby" onClick={() => alert("click")} className="red">Pierwszy artykuł</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur harum magnam voluptas nobis vel magni tempora odio voluptates iste quibusdam illum ex ipsam, ad, quae ducimus totam, iure alias?</p>
  </div>
)

const text = "Stopka";
const largeTxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus doloribus maiores ipsum adipisci non ex ut odit quasi! Numquam quae officiis enim quasi illo quos porro labore magni fuga."
  ;

const footer = (
  <footer>
    <p className="big">{text}</p>
    {largeTxt}
  </footer>
)

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'));