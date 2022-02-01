import "./App.css";
import TodoApp from "./components/TodoApp";

export default function App(props) {
  // const {name,classs}=props
  console.log(props);
  return (
    <div className="App">
      <span className="title">Todo List</span>
      <TodoApp />
      {/* <h1>{props.name}</h1>

      <h1>Hello CodeSandbox</h1>
       <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
