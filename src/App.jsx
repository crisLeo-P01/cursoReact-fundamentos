// import Counter from './components/Counter'
// import ToggleButton from './components/ToogleButton'
// import NameForm from './components/NameForm'
// import CounterWithEffect from './components/CounterWithEffect'
// import CardModule from './components/cardModule/CardModule'
// import UserList from './components/UserList/UserList'
// import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
// import SearchPost from './components/SearchPost/SearchPost'
import Counter from './components/Counter/Counter'
import Authenticator from './components/authenticator'
import ThemeCustom from './components/ThemeCustom'
import CounterWithCustomHook from './components/CounterWithCustomHook'
import CounterWithReactMemo from './components/CounterWithReactMemo'

import './App.css'

function App() {
    const items = ['react', 'javascript', 'css', 'html']
    
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
        </>
    )
}

export default App
