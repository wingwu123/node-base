import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
    /*
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
    */
  
    componentDidMount() {
      //this.interval = setInterval(() => this.tick(), 1000);
    }

    render(){
        return (
        <div>
            <h1>Hello, world!</h1>
            <DatePicker />
        </div>
        );
    }
}

export default App
