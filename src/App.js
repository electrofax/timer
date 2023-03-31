import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [formData, setText] = useState({
    username: '',
    password: '',
  });
  console.log(formData);

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(formData);
    setText(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Плюс</button>
      <button onClick={() => setCount((next) => next - 1)}>Минус</button>
      <form >
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;