import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export default store

//TODO: clean after finish testing
//store.subscribe(() => console.info(store.getState()))

/*
//...test event dispatch
const unsubscribe = store.subscribe(() => console.info(store.getState()))
import('./actions').then((Actions) => {
    console.info("Test event dispatch")
    store.dispatch(Actions.selectConfig())
    unsubscribe()
})
*/