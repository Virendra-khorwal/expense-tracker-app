import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../constants/styles";
import ExpenseList from "../components/ExpenseList";
import { fetchExpense } from "../util/http";

import Button from "../util/button";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/expenseContext";
import LoadingOverlay from "../util/LoadingOverlay";

const AllExpenses = () => {
  const navigation = useNavigation();
  const [isFetching, setIsFetching] = useState(true);
  const [fetchedExpenses, setFetchtedexpenses] = useState([]);
  const onNavigate = () => {
    navigation.navigate("ManageExpenses");
  };

  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expenses = await fetchExpense();
      setFetchtedexpenses(expenses);
      expenseCtx.setExpense(expenses);
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
      {expenseCtx.expenses.length > 0 ? (
        <ExpenseList expense={expenseCtx.expenses} />
      ) : (
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}> No Item Found!</Text>
          <Image
            style={styles.image}
            source={require("../assets/images/emptylist.jpg")}
          />
        </View>
      )}
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

export default AllExpenses;
