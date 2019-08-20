import React from 'react';
import Connect from '../store/connect'
import {Props, State} from '../models/propsAndState'
import '../assets/css/App.css';
import { Button } from 'antd-mobile';
import '../assets/css/test.scss';

class App extends React.Component<Props, State> {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(this)
    // this.props.initData()
  }

  render() {
    // const {data} = this.props.indexData;
    return (
      <div className="App">
        {/* <ul>
          
        {
          data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        }
        </ul> */}
        <span className="test">张三</span>
        <Button type="primary">默认按钮</Button>
      </div>
    );
  }
}

export default Connect(App);
