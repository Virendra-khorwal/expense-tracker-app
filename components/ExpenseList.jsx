import { FlatList, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/styles";
import ExpenseCard from "./ExpenseCard"


const ExpenseList = ({expense}) => {

    const expenseSum = expense.reduce((sum, expense) => (
        sum + expense.amount
    ), 0);

    return (
        <View>
            <View style={styles.headerBox}>
                <Text>
                    Last 7 Days
                </Text>
                <Text style={styles.totalText}>
                    {expenseSum} ₹
                    </Text>
            </View>
            <FlatList style={styles.list} data={expense} renderItem={(items) => (
                <ExpenseCard itemData= {items.item} />
            )} />
        </View>
    )
};

const styles = StyleSheet.create({
    headerBox : {
        backgroundColor: GlobalStyles.colors.white,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        elevation: 2,
    },
    totalText: {
        color: GlobalStyles.colors.blue,
        fontWeight : 'bold',
    },
    list : {
        marginVertical: 16,
    }
})

export default ExpenseList;