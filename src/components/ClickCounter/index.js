import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container1 container-fluid">
        <h1 className="heading">The Button has been clicked {count} times</h1>
        <p>Click the button to increase the count</p>
        <button className="clickBtn btn btn-primary" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
