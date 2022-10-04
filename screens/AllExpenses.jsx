import { StyleSheet, Text, View } from "react-native"
import AddExpense from "../components/AddExpense";
import ExpenseCard from "../components/ExpenseCard";
import { GlobalStyles } from "../constants/styles";


const AllExpenses = () => {
    return (
        <View style={styles.container}>
            <AddExpense title="Add Expense" />
            <ExpenseCard title="Test" amount="50" />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        paddingVertical: 50,
        
    }
})

export default AllExpenses;