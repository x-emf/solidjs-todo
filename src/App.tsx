import { For, type Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [todos, setTodos] = createSignal(["a", "b"]);
  return (
    <> 
      <h3>Your todos:</h3>
      <ul>
        <For each={todos()}>{item =>
          <li>{item}</li>
        }</For>
      </ul>
    </>
  );
};

export default App;
