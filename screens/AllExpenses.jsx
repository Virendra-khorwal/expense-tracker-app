import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddExpense from "../components/AddExpense";
import ExpenseCard from "../components/ExpenseCard";
import { GlobalStyles } from "../constants/styles";
import ExpenseList from "../components/ExpenseList";
import { useSelector } from "react-redux";
import Button from "../util/button";

const AllExpenses = () => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("ManageExpenses");
  };

  const expenseData = useSelector(state => state.expense.data)

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Expense"
          bgColor={GlobalStyles.colors.blue}
          color={GlobalStyles.colors.white}
          onPress={onNavigate}
        />
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
    marginBottom: 10,
  }
});

export default AllExpenses;
