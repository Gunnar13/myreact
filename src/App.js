//import logo from './logo.svg';
import './App.css';


//<img src={logo} className="App-logo" alt="logo" />

/*
инлайновый стиль <div style={{paddingTop: '25px', border: '1px solid white'}}>
<header className="App-header"> --->>>  import './App.css';

*/
function App(props) {
  return (
      <div className="App">
        <header
      className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}                         
      style={{top: props.topPosition || '10px'}}
     >

        My First React App
        <h3>Hello, {props.name}</h3>
        <div>
        <h3>Домашнее задание</h3>
        <p style={{fontSize: '18px', width:'400px'}}>1.Развернуть новый проект с использованием create-react-app. - + </p>
        <p style={{fontSize: '18px', width:'700px'}}>Проект создал, как описано в методичке и на уроке </p>
        <p style={{fontSize: '18px', width:'400px'}}>3.Стилизовать компоненты через css (при желании можно использовать less или sass, однако для sass нужно дополнительно установить node-sass: документация CRA). </p>
        <p style={{fontSize: '18px', width:'800px'}}>разобрал что такое инлайновый стиль и className=</p>
        <p style={{fontSize: '18px', width:'400px'}}>5.Установить расширение React Devtools. Установил в фаерфоксе так как хромом не пользуюсь, похоже на Vue Devtools </p>






          
           </div>
        <div style={{paddingTop: '25px', border: '1px solid white'}}>
    Inline Styles
   </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;
