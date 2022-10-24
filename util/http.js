import axios from "axios";

const BACKEND_URL = "https://expense-tracker-app-e5a1c-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = (expenseData) => {
  axios.post(
    BACKEND_URL+"/expense.json",
    expenseData
  );
};

export const fetchExpense = async () => {
    const response = await axios.get(
        BACKEND_URL+ '/expense.json'
    );

    const expenses = [];

    for(const key in response.date) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            title: response.data[key].title,
        };
        expenses.push(expenseObj);
    }

    return expenses;
}