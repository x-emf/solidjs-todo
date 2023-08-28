import { Index, type Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [todos, setTodos] = createSignal<Task[]>([]);
  const addTodo = (newTodo: Task) => setTodos(xs => [...xs, newTodo]);
  const rmTodo = (index: number) => setTodos(xs => {
    let draft = [...xs];
    draft.splice(index, 1);
    return draft;
  });
  let nextTodo: HTMLInputElement | undefined;
  const addNextTodo = () => {
    let text = nextTodo!.value;
    if (text === '') return;
    addTodo({
      name: nextTodo!.value,
    });
    nextTodo!.value = '';
  };
  return (
    <> 
      <h3>Your todos:</h3>
      <ul>
        <Index each={todos()}>{(x, i) =>
          <li>{x().name} <span onclick={() => rmTodo(i)}>🗑️</span></li>
        }</Index>
      </ul>
      <input ref={nextTodo}></input>
      <button onclick={addNextTodo}>Add todo</button>
    </>
  );
};

export default App;
