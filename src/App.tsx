// import Counter from './components/Counter'
// import ToggleButton from './components/ToogleButton'
// import NameForm from './components/NameForm'
// import CounterWithEffect from './components/CounterWithEffect'
// import CardModule from './components/cardModule/CardModule'
// import UserList from './components/UserList/UserList'
// import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
// import SearchPost from './components/SearchPost/SearchPost'
import Counter from './components/CounterWithUseReducer.js'
import Authenticator from './components/Authenticator.jsx'
import ThemeCustom from './components/ThemeCustom.jsx'
import CounterWithCustomHook from './components/CounterWithCustomHook.jsx'
import CounterWithReactMemo from './components/CounterWithReactMemo.jsx'
import CounterTs from './components/CounterTs.js'

import Button from './components/Button.js'

import './App.css'

function greet(name: string) {
    return (`Hola ${name}`);
}

function App() {
    const items = ['react', 'javascript', 'css', 'html']

    const handClick = () => alert('Ya estoy clickeado!')

    console.log(greet('cristian'));
    
    return (
        <>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>

            <br/>
            <Counter />

            <br/>
            <ThemeCustom />

            <br/>
            <Authenticator />

            <br/>
            <CounterWithCustomHook />
            
            <br/>
            <CounterWithReactMemo />

            <br/>
            <Button onclick={ handClick } label='Click me!'/>

            <br/>
            <CounterTs />
        </>
    )
}

export default App
