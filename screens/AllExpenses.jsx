import { StyleSheet, Text, View } from "react-native"


const AllExpenses = () => {
    return (
        <View style={styles.container}>
            <Text>
                All Expenses Page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    }
})

export default AllExpenses;