import Counter from "./Components/Counter";
import Effect from "./Components/effect";
import Reducer from "./Components/reduse";
import Color from "./Components/context"
import CallbackExample from "./Components/callback";
import "./style/style.css"

function App() {


  return (
    <div className="App">
        <h1>Стараюсь с каждом хуком усложнять функции</h1>
        <div className='blockHooks'>
            <h1>Использование реакт хука useState</h1>
            <Counter/>
        </div>

        <div className='blockHooks'>
            <h1>Использование реакт хука useEffect</h1>
            <Effect/>
        </div>

        <div className='blockHooks'>
            <h1>Использование реакт хука useReducer</h1>
            <Reducer/>
        </div>

        <div className='blockHooks'>
            <h1>Использование реакт хука useContext</h1>
            <Color/>
        </div>

        <div className='blockHooks'>
            <h1>Использование реакт хука useCallback</h1>
            <CallbackExample/>
        </div>
    </div>
  );
}

export default App;
