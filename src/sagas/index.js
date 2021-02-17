import * as entriesSaga from './entriesSaga'
import * as entriesSagaDeletion from './entriesSagaDeletion'
import * as entriesSagaAddition from './entriesSagaAddition'
// import * as testSaga from './testSata'

const initSagas = (sagaMiddleware) => {
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesSagaAddition).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}

export default initSagas
