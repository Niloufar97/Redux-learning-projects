import { addTodoAction, completeTodoAction, removeTodoAction } from "./actionTypes"
export const addTodoCreator = (title) => {
    return(
        {
            type: addTodoAction,
            title
        }
    )
}
export const completeTodoCreator = (id) => {
    return(
        {
            type: completeTodoAction,
            id
        }
    )
}
export const removeTodoCreator = (id) => {
    return(
        {
            type: removeTodoAction,
            id
        }
    )
}