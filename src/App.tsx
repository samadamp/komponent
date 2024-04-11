import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import "./App.css";
import RadioButton from "./components/RadioButton/RadioButton";
import NotAButton from "./components/NotAButton/NotAButton";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const plans = ["Student", "Premium", "Free"];
  const cardsData = [{ text: "HEJ" }, { text: "PÅ" }, { text: "DIG" }];

  const handleClick = (isChecked: boolean) => {
    console.log("is checked", isChecked);
    
  }

  return (
    <>
      <NavBar />

      <Cards cards={cardsData} />
      <NotAButton onClick={handleClick}/>
      <ProgressBar progress={5} />

      <RadioButton plans={plans} PlanHeader="Choose Plan" />

      
    </>
  );
}

export default App;
