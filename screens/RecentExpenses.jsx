import { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ExpenseList from "../components/ExpenseList";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expenseContext";

const RecentExpenses = () => {
    const expenseCtx = useContext(ExpenseContext);
    const today = new Date().toDateString();
    const expenseData = expenseCtx.expenses


    return (
      <View style={styles.container}>
        {expenseData.length > 0 ? (
          <ExpenseList expense={expenseData} />
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