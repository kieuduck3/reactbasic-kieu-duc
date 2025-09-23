import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
 // 
      //* 2 components : class components / function components ( function/arrow function )
      // **/
const App = () => {
     
  // function app() {} 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World From React With( Kiều Anh Đức)
        </p>
        
        <MyComponent/>
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
