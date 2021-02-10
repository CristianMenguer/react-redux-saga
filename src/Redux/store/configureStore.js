import { createStore, combineReducers } from 'redux'
import entriesReducer from '../reducers/entries.reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import modalsReducer from '../reducers/models.reducers'

const configureStore = () => {

    const store = createStore(combineReducers({
        entries: entriesReducer,
        modals: modalsReducer,
    }),
        composeWithDevTools()
    )

    // store.subscribe(() => {
    //     console.log('store:', store.getState())
    // })

    return store
}

export default configureStore
