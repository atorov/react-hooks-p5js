export default function (state, { type, payload }) {
    switch (type) {
        case 'SET_SLIDER_VALUE':
            return {
                ...state,
                slider: payload,
            }

        case 'TOGGLE_SKETCH':
            return {
                ...state,
                [payload.key]: payload.value,
            }

        default:
            return state
    }
}
