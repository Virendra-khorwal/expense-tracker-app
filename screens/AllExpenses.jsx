import { StyleSheet,View } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { GlobalStyles } from "../constants/styles";
import ExpenseList from "../components/ExpenseList";

import Button from "../util/button";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenseContext";

const AllExpenses = () => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate("ManageExpenses");
  };

  const expenseCtx = useContext(ExpenseContext);

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
      {
        expenseCtx.expense.length() > 0 ? (
          <ExpenseList expense={expenseCtx.expenses} />)
          : (
            <View>

            </View>
          )
      }
      
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
