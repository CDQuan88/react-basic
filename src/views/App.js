import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo Apps with React.js (Cao Quan)
        </p>

        <ListTodo />


        {/* Here is shortcut declare  */}
        {/* <MyComponent/>  */}

        {/* Here is full declare, use when it has children */}

        {/* <MyComponent> </MyComponent> */}

      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
