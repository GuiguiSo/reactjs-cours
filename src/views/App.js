import React from 'react'
import './App.css'
import Casino from '../components/casino'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
      user: ['A','B','C'],
      name : 'Guillaume'
    }
  }

  componentDidMount(){
    console.log(this.state.name)
    this.setState({
      name : 'Guillaume Le tricheur'
    }, () => console.log('call back :' , this.state.name))

  }

  render() {
    return (
      <div className="App">
        {
          this.state.user.map((user,i) => <p key={i}>{user}</p>)
        }
        <Casino casinos = {[{name: 'Monsupercasino', url:'httpmdr'}, {name: 'Moncasino', url:'httplolmdr'}]}></Casino>
        <Button variant="danger">Link</Button>{' '}
        <Button variant="primary">Primary</Button>
      </div> 
    );
  }

}

export default App;
