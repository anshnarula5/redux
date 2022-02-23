import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { decrease, increase, reset } from "./redux/actions/counterActions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div>
      <div>{counter}</div>
    </div>
  );
}

export default App;
