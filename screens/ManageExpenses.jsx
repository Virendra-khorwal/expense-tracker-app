import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AddExpense from "../components/AddExpense";
import { useState } from "react";
import {addExpense} from '../Redux/dataSlice'
import { useDispatch } from "react-redux";

const ManageExpenses = ({ route, navigation }) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const dispatch = useDispatch()

    const onSave = () => {
        dispatch(addExpense({title: title, amount: amount}))
        console.log(title)
    }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Add New Expense Item</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons
            style={styles.box}
            name="title"
            size={24}
            color={GlobalStyles.colors.blue}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Title"
            value={title}
            cursorColor={GlobalStyles.colors.blue}
            onChangeText={(e) => setTitle(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Feather
            style={styles.box}
            name="dollar-sign"
            size={24}
            color={GlobalStyles.colors.blue}
          />
          <TextInput
            style={styles.inputBox}
            keyboardType="number-pad"
            placeholder="Amount"
            value={amount}
            cursorColor={GlobalStyles.colors.blue}
            onChangeText={(e) => setAmount(e)}
          />
        </View>
      </View>
      <AddExpense title="Add" onPress={onSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.white,
    width: 350,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  inputBox: {
    marginLeft: 20,
    color: GlobalStyles.colors.blue,
    fontSize: 20,
  },
  headerBox: {
    backgroundColor: GlobalStyles.colors.white,
    width: 350,
    padding: 12,
    marginVertical: 20,
    borderRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: "center",
    color: GlobalStyles.colors.blue,
  },
  box : {
    width: 20
  }
});

export default ManageExpenses;
