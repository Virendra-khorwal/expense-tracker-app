import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import ExpenseList from "../components/ExpenseList";

import { ExpenseContext } from "../store/expenseContext";

const RecentExpenses = () => {
    const expenseCtx = useContext(ExpenseContext);
    const today = new Date().toDateString();
    const expenseData = expenseCtx.expenses


    return (
      <View style={styles.container}>
        <ExpenseList expense={expenseData} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 30,
  },
});


export default RecentExpenses;