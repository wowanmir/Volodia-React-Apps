import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';

const texts = [
  'Click',
  'Click',
  'Click pls',
  'Click c\'mon',
  'cliiick',
  'sosiska'];
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
    <Counter count = {count} />
    {texts.map((text, index) => {
      return <Button key={index} text={text} onClick={incrementCount} />})}
    </div>
  );
}
export default App;
