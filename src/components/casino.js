import React from 'react'

class Casino extends React.Component {


  render() {
    return (
      <div >
          {this.props.casinos.map((c,i) => <p key={i}>{c.name}</p>)}
      </div> 
    );
  }

}

export default Casino