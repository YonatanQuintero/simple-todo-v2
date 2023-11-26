import { createContext, useContext, useReducer, useEffect } from "react";

const ActionTypes = {
    "SET_TODOS": "SET_TODOS",
    "ADD_TODO": "ADD_TODO",
    "TOGGLE_TODO": "TOGGLE_TODO",
    "REMOVE_TODO": "REMOVE_TODO",
    "CLEAR_TODOS_DONE": "CLEAR_TODOS_DONE",
};

/**
 * Context for managing Todo-related state and actions.
 * @type {React.Context}
 */
const TodoContext = createContext();

/**
 * Reducer function to handle Todo-related state changes.
 *
 * @param {Object} state - Current state.
 * @param {Object} action - Action object containing type and payload.
 * @returns {Object} - New state after applying the action.
 * @throws Will throw an error if the action type is not handled.
 */
const todoReducer = (state, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_TODOS:
        case ActionTypes.ADD_TODO:
        case ActionTypes.TOGGLE_TODO:
        case ActionTypes.REMOVE_TODO:
        case ActionTypes.CLEAR_TODOS_DONE:
            return { ...state, ...payload };
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};

/**
 * Provider component for managing Todo-related state.
 *
 * @param {Object} props - React component properties.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {React.ReactNode} - Wrapped components with TodoContext.Provider.
 */
const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        stats: {
            total: 0,
            todo: 0,
            done: 0,
        },
        index: 0,
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/data/todos.json");
                const todos = await response.json();
                const stats = updateStats(todos);
                const index = todos.length;
                dispatch({ type: ActionTypes.SET_TODOS, payload: { todos, stats, index } });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    /**
     * Adds a new todo to the state.
     *
     * @param {string} value - The value of the new todo.
     */
    const addTodo = (value = "") => {
        const index = state.index + 1;
        const newTodo = {
            id: index,
            value: value,
            done: false,
        };
        const todos = [...state.todos, newTodo];
        const stats = updateStats(todos);
        dispatch({ type: ActionTypes.ADD_TODO, payload: { todos, stats, index } });
    };

    /**
     * Toggles the 'done' status of a todo.
     *
     * @param {number} id - The ID of the todo to be toggled.
     * @param {boolean} done - The new 'done' status.
     */
    const toggleTodo = (id, done = false) => {
        const todos = state.todos.map((todo) => (todo.id === id ? { ...todo, done } : todo));
        const stats = updateStats(todos);
        dispatch({ type: ActionTypes.TOGGLE_TODO, payload: { todos, stats } });
    };

    /**
     * Removes a todo from the state.
     *
     * @param {number} id - The ID of the todo to be removed.
     */
    const removeTodo = (id) => {
        const todos = state.todos.filter((todo) => todo.id !== id);
        const stats = updateStats(todos);
        dispatch({ type: ActionTypes.REMOVE_TODO, payload: { todos, stats } });
    };

    /**
     * Clears all completed todos from the state.
     */
    const clearDone = () => {
        const todos = state.todos.filter((todo) => !todo.done);
        const stats = updateStats(todos);
        dispatch({ type: ActionTypes.CLEAR_TODOS_DONE, payload: { todos, stats } });
    };

    const value = { state, addTodo, toggleTodo, removeTodo, clearDone };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

/**
 * Custom hook to access the TodoContext.
 *
 * @returns {Object} - TodoContext value.
 * @throws Will throw an error if used outside of a TodoProvider.
 */
const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
};

/**
 * Updates the statistics based on the provided todos.
 *
 * @param {Object[]} todos - The array of todos.
 * @returns {Object} - Updated statistics.
 */
const updateStats = (todos) => {
    const total = todos.length;
    const todo = todos.filter((todo) => !todo.done).length;
    const done = total - todo;
    return { total, todo, done };
};

export { TodoProvider, useTodoContext };
