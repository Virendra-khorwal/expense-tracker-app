import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddExpense from "../components/AddExpense";
import ExpenseCard from "../components/ExpenseCard";
import { GlobalStyles } from "../constants/styles";
import ExpenseList from "../components/ExpenseList";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("ManageExpenses");
  };

  const expenseData = useSelector(state => state.expense.data)

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AddExpense title="Add Expense" onPress={onNavigate} />
      </View>
      <ExpenseList expense={expenseData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: "100%",
  }
});

export default AllExpenses;
