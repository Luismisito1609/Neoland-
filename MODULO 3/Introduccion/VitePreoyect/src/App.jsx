// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [setRevelar,setRevelarBoton]=useState(false);
//   const saludoSegunLaHora=(hora)=>{
//     if (hora>=6 && hora<12){
//       return 'Buenos dias';
//     } if (hora >=12 && hora<21){
//       return 'Buenas tardes';
//     } else {return 'Buenas noches';}
//   }
//   const arrayMundos=['Tierra','Marte','Venus'];

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <p>{saludoSegunLaHora(count)}</p>
//       <ul>{arrayMundos.map((mundo, index)=>
//       (<li key={index}>{mundo}</li>))}
//       </ul>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={()=> setRevelarBoton(true)}>
//         {setRevelar && (<p>Me descubriste</p>)}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div> 
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [setRevelar, setRevelarMensaje] = useState(false);
  
  const saludoSegunLaHora = (hora) => {
    if (hora >= 6 && hora < 12) {
      return 'Buenos días';
    } else if (hora >= 12 && hora < 21) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  };

  const arrayMundos = ['Tierra', 'Marte', 'Venus'];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{saludoSegunLaHora(count)}</p>
      <ul>
        {arrayMundos.map((mundo, index) => (
          <li key={index}>{mundo}</li>
        ))}
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setRevelarMensaje(true)}>Mostrar contenido</button>
        {setRevelar && (
          <p>LO DESCUBRISTE</p>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;