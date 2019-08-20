import React from 'react';
import Connect from '../store/connect'
import {Props, State} from '../models/propsAndState'
import '../assets/css/App.css';

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(this)
    this.props.initData()
  }

  render() {
    const {data} = this.props.indexData;
    return (
      <div className="App">
        <ul>
          
        {
          data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default Connect(App);
