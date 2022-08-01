import * as constants from './constants'
const initState = {
    input: '',
    works: []
}
const myReducer = (state = initState, actions) => {
    switch (actions.key) {
        case constants.addWorks:
            return {
                ...state,
                works: [...state.works, actions.data]
            }
        case constants.deleteWork:
            let data = [...state.works];
            return {
                ...state,
                works: data.filter((res, index) => index !== actions.data)
            }
        case constants.changeInput:
            return {
                ...state,
                input: actions.data
            }
        default:
            break;
    }

}
export { initState }
export default myReducer