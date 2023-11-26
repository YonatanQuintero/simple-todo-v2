import TODO_ACTION_TYPES from "../types/TodoTypes";
import { createAction } from "../utils/ReducerUtils";

export const addTodo = (todo) => {
    return createAction(TODO_ACTION_TYPES.ADD, todo);
}

export const toggleTodo = (todo) => {
    return createAction(TODO_ACTION_TYPES.TOGGLE, todo);
}

export const removeTodo = (todo) => {
    return createAction(TODO_ACTION_TYPES.REMOVE, todo);
}
