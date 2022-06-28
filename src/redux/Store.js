import { createStore } from 'redux'

export const configureStore = () => {
    let  store = createStore(rootReducer)
    return store;
}