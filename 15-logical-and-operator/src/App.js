import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Button from "./Components/Button";
import Reset from "./Components/Reset";
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Reset />
    </div>
  );
}
export default App;
