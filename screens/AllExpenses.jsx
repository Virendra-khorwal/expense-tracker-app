import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddExpense from "../components/AddExpense";
import ExpenseCard from "../components/ExpenseCard";
import { GlobalStyles } from "../constants/styles";
import ExpenseList from "../components/ExpenseList";

const AllExpenses = () => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("ManageExpenses");
  };

  const DUMMY_EXPENSE = [
    {
      id: "e1",
      title: "Test",
      amount: 120,
      date: new Date("2022-09-11"),
    },
    {
      id: "e2",
      title: "Shoes",
      amount: 500,
      date: new Date("2022-09-11"),
    },
    {
      id: "e3",
      title: "Tea",
      amount: 20,
      date: new Date("2022-09-11"),
    },
    {
      id: "e4",
      title: "Stationary",
      amount: 250,
      date: new Date("2022-09-11"),
    },
    {
      id: "e5",
      title: "Test",
      amount: 120,
      date: new Date("2022-09-11"),
    },
    {
      id: "e6",
      title: "Shoes",
      amount: 500,
      date: new Date("2022-09-11"),
    },
    {
      id: "e8",
      title: "Tea",
      amount: 20,
      date: new Date("2022-09-11"),
    },
    {
      id: "e7",
      title: "Stationary",
      amount: 250,
      date: new Date("2022-09-11"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AddExpense title="Add Expense" onPress={onNavigate} />
      </View>
      <ExpenseList expense={DUMMY_EXPENSE} />
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
