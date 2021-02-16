import * as entriesSaga from './entriesSaga'

const initSagas = (sagaMiddleware) => {
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}

export default initSagas
