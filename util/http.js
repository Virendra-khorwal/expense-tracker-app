import axios from "axios";

const BACKEND_URL = "https://expense-tracker-app-e5a1c-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = async(expenseData) => {
  const response = await axios.post(
    BACKEND_URL+"/expense.json",
    expenseData
  );
  const id = response.data.name;
  return id;
};

export const fetchExpense = async () => {
    const response = await axios.get(
        BACKEND_URL+ '/expense.json'
    );

    const expenses = [];
    // console.log(response)
    for(const key in response.data) {
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

export const updateExpense = (id, expenseData) => {
  return axios.put(BACKEND_URL + `/expense/${id}.json`, expenseData)
}

export const deleteExpense = (id) => {
  return axios.delete(BACKEND_URL + `/expense/${id}.json`)
} 