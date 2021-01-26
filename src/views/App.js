import React from 'react'
import './App.css'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
    }
  }

  componentDidMount(){
    console.log(this.state.name)
    this.setState({

    }, () => console.log('call back :' , this.state.name))

  }

  render() {
    return (
      <div className="App">
        <Footer></Footer>
      </div> 
    );
  }

}

export default App;
