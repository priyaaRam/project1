import logo from './logo.svg';
import './App.css';
export default function Header(){
    return(       
        <div>
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="50" width="100"/>
               <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>             
        </div>
    );
}