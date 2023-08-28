import { For, type Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [todos, setTodos] = createSignal<Task[]>([]);
  const addTodo = (newTodo: Task) => setTodos(xs => [...xs, newTodo]);
  addTodo({name: "Invent the universe"});
  addTodo({name: "Make apple pie from scratch"});
  return (
    <> 
      <h3>Your todos:</h3>
      <ul>
        <For each={todos()}>{item =>
          <li>{item.name}</li>
        }</For>
      </ul>
    </>
  );
};

export default App;
