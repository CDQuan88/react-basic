import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Cao Quan)
        </p> 

        {/* Here is shortcut declare  */}
        <MyComponent/> 

        {/* Here is full declare, use when it has children */}

        {/* <MyComponent> </MyComponent> */}

      </header>
    </div>
  );
}

export default App;
