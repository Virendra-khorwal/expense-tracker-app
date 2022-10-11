import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

const ExpenseCard = ({ itemData}) => {

  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('ManageExpenses', {
      expenseId : itemData.id,
    })
  }
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.innerContainer} android_ripple={{elevation: 10, color: GlobalStyles.colors.blue}} onPress={onPressHandler}>
        <View>
          <Text style={styles.title}>{itemData.title}</Text>

          <Text>{itemData.date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.subtitle}>{itemData.amount} ₹</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    // width: "100%",
    borderRadius: 4,
    elevation: 2,

    flexDirection: "row",
    overflow: 'hidden',
    marginVertical: 6,
  },
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.blue,
    fontSize: 20,
  },
  subtitle: {
    color: GlobalStyles.colors.white,
    marginVertical: 4,
    fontSize: 16,
  },
  priceContainer: {
    backgroundColor: GlobalStyles.colors.blue,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
});

export default ExpenseCard;
