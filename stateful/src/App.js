import './App.css';
import React,{useState,useEffect,useRef} from 'react';
function App() {

  const [name,setName] = useState(() =>{
    const saved = localStorage.getItem('name');
    const initalValue = JSON.parse(saved);
    return initalValue || " ";
  });

  const usernameRef = useRef();

  
  const handleChange = () =>{
    const valueinput = usernameRef.current;
    setName (valueinput.value);
  }
  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name]);


  return (
    <div className="App">
        <div className="titulo">Stateful App</div>
        <div>
          <div>Ingrese su nombre</div>
          <form>
            <input 
            id="name" 
            type="text" 
            ref={usernameRef}
            onChange={handleChange}
            >
            </input>
          </form>
        </div>
        <p className="hola">Hola {name}!!</p>
        <p> Ten un lindo dia!! :)</p>
    </div>
  );
}


export default App;
