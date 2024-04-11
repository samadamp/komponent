import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import "./App.css";
import RadioButton from "./components/RadioButton/RadioButton";

function App() {
  const plans = ["Student", "Premium", "Free"];
  const cardsData = [{ text: "HEJ" }, { text: "PÅ" }, { text: "DIG" }];

  return (
    <>
      <NavBar />

      <Cards cards={cardsData} />

      <RadioButton plans={plans} PlanHeader="Choose Plan" />
    </>
  );
}

export default App;
