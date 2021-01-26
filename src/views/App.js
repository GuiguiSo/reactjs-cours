import React from 'react'
import './App.css'
import Cards from '../components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      card: [{
        Img: "img/raccoon.jpg",
        Title: 'Card Title',
        Text: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      }],
    }

  }

  render() {
    return (
        <div className={"app"}>
          {this.state.card.map((c,i) => <div key={i}>
            <Cards card = {c}></Cards>
          </div>)}
        </div>

  );
  }

}

export default App;
