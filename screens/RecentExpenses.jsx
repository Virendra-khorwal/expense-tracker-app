import { StyleSheet, View } from "react-native";
import ExpenseCard from "../components/ExpenseCard";
import { GlobalStyles } from "../constants/styles";

const RecentExpenses = () => {
    return (
      <View style={styles.container}>
        <ExpenseCard title="Test" amount="50" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 50,
  },
});


export default RecentExpenses;