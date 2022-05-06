import React  from 'react';
import './App.css';
import { fetchHelloWorld } from './services/HelloWorldService';



export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: Date.now()
    }
    setInterval(() => {
      this.setState({
        currentTime: Date.now()
      });
    }, 1000)
  }

  async clickHandler(){
    const result = await fetchHelloWorld();
    this.setState({
      label : result
    });
  }

  render() {
    return (
      <div className="App">
        {new Date(this.state.currentTime).toLocaleString()}
        <button onClick={() => this.clickHandler()}>Call API</button>
        {this.state.label}
      </div>
    );
  }
}

export default App;

// function App() {
//   const [currentTime, setCurrentTime] = useState(Date.now());
//   const [label, setLabel] = useState("");
//   const clickHandler = async () => {
//     const result = await fetchHelloWorld();
//     setLabel(result);
//   };

//   setInterval(() => {
//     setCurrentTime(Date.now());
//   }, 1000)
//   return (
//     <div className="App">
//       {new Date(currentTime).toLocaleString()}
//       <button onClick={() => clickHandler()}>Call API</button>
//       {label}
//     </div>
//   );
// }


