import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterByEffect';
import { CounterHook } from './bases/Counterhook';
import { CounterReducerComponent } from './counterReducer/CounterReduceComponent';
/* import { CounterReducerComponent } from './bases/CounterReducer'; */


function App() {
  return (
    <div className="App">
      <h1>hello word</h1>
      <Counter initialValues={5} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </div>
  );
}

export default App;
