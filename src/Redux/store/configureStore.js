import { createStore, combineReducers } from 'redux'
import entriesReducer from '../reducers/entries.reducers'

const configureStore = () => {

    const store = createStore(combineReducers({
        entries: entriesReducer
    }))

    store.subscribe(() => {
        console.log('store:', store.getState())
    })

    return store
}

export default configureStore