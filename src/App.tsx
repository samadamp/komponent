import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import './App.css'

function App() {
 

  const cardsData = [
    { text: "HEJ" },
    { text: "PÅ" },
    { text: "DIG" }
  ];

  return (
    <>

    <NavBar/>

    <Cards cards={cardsData}/>
    
    
    </>
    
  )
}

export default App
