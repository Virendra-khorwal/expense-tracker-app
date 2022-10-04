import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../constants/styles";


const AddExpense = ({title}) => {
    const navigation = useNavigation();

    const onNavigate = () => {
        navigation.navigate("ManageExpenses");
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.innerContainer} android_ripple={{ color: 'white'}} onPress={onNavigate}>
                <Text style={styles.text} >
                    {title}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.blue,
        marginBottom: 16,
        borderRadius: 4,
        elevation: 4,
        marginVertical: 10,
    },
    innerContainer: {
        padding: 10,
    },
    text: {
        color: GlobalStyles.colors.white,
        textAlign: 'center'
    }
})

export default AddExpense;