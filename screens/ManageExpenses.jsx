import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";

import { useContext, useEffect, useLayoutEffect, useState } from "react";


import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonIcon from "../util/buttonIcon";
import { ExpenseContext } from "../store/expenseContext";
import { storeExpense } from "../util/http";

const ManageExpenses = ({ route, navigation }) => {
  
  const expenseCtx = useContext(ExpenseContext)

  const editedItemId = route.params?.expenseId;
  let isEdited = !!editedItemId;

  const expenseItem = expenseCtx.expenses.find((expense) => expense.id === editedItemId)
  const [title, setTitle] = useState(isEdited ? expenseItem.title : "");
  const [amount, setAmount] = useState(
    isEdited ? expenseItem.amount.toString() : ""
  );

  useEffect(() => {
    if(isEdited){
      setTitle(expenseItem.title)
      setAmount(expenseItem.amount.toString())
    }
    
  }, [isEdited])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdited]);

  const onSave = () => {
    
    const date = new Date().toDateString()
    expenseCtx.addExpense({title: title, amount: amount*1, date: date})
    storeExpense({ title: title, amount: amount * 1, date: date });
    setTitle("");
    setAmount(null);
    navigation.goBack();
  };

  const onRemove = () => {
    // dispatch(removeExpense({id: editedItemId}))
    console.log(editedItemId)
    expenseCtx.removeExpense(editedItemId);
    navigation.goBack();
  };

  const onCancel = () => {
    setTitle(""); 
    setAmount(null);
    navigation.goBack();
  }

  const onUpdate = () => {
    expenseCtx.updateExpense(editedItemId, {title, amount: amount*1});
    navigation.goBack();

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
      <View style={styles.buttonContainer}>
        <ButtonIcon
          icon={<FontAwesome5 name="check" size={24} />}
          color={GlobalStyles.colors.white}
          bgColor={GlobalStyles.colors.blue}
          onPress={isEdited? onUpdate: onSave}
        />
        {isEdited && (
          <ButtonIcon
            icon={<MaterialIcons name="delete" size={24} />}
            color={GlobalStyles.colors.white}
            bgColor={GlobalStyles.colors.red}
            onPress={onRemove}
          />
        )}
        <ButtonIcon
          icon={<FontAwesome name="remove" size={24} />}
          color={GlobalStyles.colors.white}
          bgColor={GlobalStyles.colors.yellow}
          onPress={onCancel}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.white,
    width: "100%",
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
    borderBottomColor: GlobalStyles.colors.blueDark,
    borderBottomWidth: 1,
    flex: 1,
  },
  headerBox: {
    backgroundColor: GlobalStyles.colors.white,
    width: "100%",
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
  box: {
    width: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default ManageExpenses;
