import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ExpenseList from "../components/ExpenseList";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expenseContext";
import { fetchExpense } from "../util/http";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
    const expenseCtx = useContext(ExpenseContext);
    // const today = new Date().toDateString();
    // const expenseData = expenseCtx.expenses
    const [fetchedExpenses, setFetchtedexpenses] = useState([]);

    useEffect(() => {
      const getExpenses = async() => {
        const expenses = await fetchExpense();
        setFetchtedexpenses(expenses);
        expenseCtx.setExpense(expenses);
      }

      getExpenses();
    },[])

    // const recentExpenses = fetchedExpenses.filter((expense) => {
    //   const today = new Date();
    //   const date7DaysAgo = getDateMinusDays(today, 7);

    //   return expense.data >= date7DaysAgo.toDateString() && expense.date <= today.toDateString()
    // })
    console.log(expenseCtx.expenses)

    return (
      <View style={styles.container}>
        {expenseCtx.expenses.length > 0 ? (
          <ExpenseList expense={expenseCtx.expenses} />
        ) : (
          <View style={styles.imageContainer}>
            <Text style={styles.imageText}> No recent Item Found!</Text>
            <Image
              style={styles.image}
              source={require("../assets/images/emptylist.jpg")}
            />
          </View>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 30,
    marginTop: 14,
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 6,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageText: {
    marginVertical: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.red,
  },
});


export default RecentExpenses;