import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Test",
        amount: 120,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e2",
        title: "Shoes",
        amount: 500,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e3",
        title: "Tea",
        amount: 20,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e4",
        title: "Stationary",
        amount: 250,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e5",
        title: "Test",
        amount: 120,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e6",
        title: "Shoes",
        amount: 500,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e8",
        title: "Tea",
        amount: 20,
        date: new Date("2022-09-11").toDateString(),
    },
    {
        id: "e7",
        title: "Stationary",
        amount: 250,
        date: new Date("2022-09-11").toDateString(),
    },
];

export const ExpenseContext = createContext({
    expense: [],
    addExpense: ({title, amount, date}) => {},
    removeExpense: (id) => {},
    updateExpense: (id,{title,amount,date}) => {},
})

const ExpenseReducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        
        case 'ADD':
            const id = new Date().toString() + Math.random().toString
            return [{...action.payload, id: id}, ...state ]
        case 'UPDATE':
            const updatableExpanseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpanseItem  = state[updatableExpanseIndex];
            const updatedItem = {...updatableExpanseItem, ...action.payload.data};
            const updatedExpense = [...state];
            updatedExpense[updatableExpanseIndex] = updatedItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

const ExpenseContextProvider = ({children}) => {

    const [expenseState, dispatch] = useReducer(ExpenseReducer, DUMMY_EXPENSES);

    const addExpense = ({...expenseData}) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const removeExpense = (id) => {
        dispatch({type: 'DELETE', payload:id})
    }

    const updateExpense = (id, {...expenseData}) => {
        dispatch({type: 'UPDATE', payload: {id:id, data:expenseData}})
    }

    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        removeExpense: removeExpense,
        updateExpense: updateExpense
    }

    return (
        <ExpenseContext.Provider value={value} >
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider;