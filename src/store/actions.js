import * as constants from './constants.js'
export const addWorksFunc = (data) => {
    return {
        key: constants.addWorks,
        data
    }
}
export const deleteWorksFunc = (data) => {
    return {
        key: constants.deleteWork,
        data
    }
}
export const changeInputFunc = (data) => {
    return {
        key: constants.changeInput,
        data
    }
}