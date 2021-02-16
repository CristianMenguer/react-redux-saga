import { types as modalsTypes } from '../actions/modals.actions'

const initialModals = {
    isEditModalOpen: false,
    idEditModal: 0,
}

const modalsReducer = (state = initialModals, action) => {
    if (action.type === modalsTypes.OPEN_EDIT_MODAL) {
        return {
            ...state,
            isEditModalOpen: true,
            idEditModal: action.payload.id
        }
    }
    //
    if (action.type === modalsTypes.CLOSE_EDIT_MODAL) {
        return {
            ...state,
            isEditModalOpen: false,
            idEditModal: 0,
        }
    }
    //
    return state
}

export default modalsReducer
