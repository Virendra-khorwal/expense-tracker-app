import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";

const ExpenseCard = ({ itemData}) => {

  return (
    <View style={styles.container}>
      <Pressable style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>{itemData.title}</Text>

          <Text>{itemData.date.toDateString()}</Text>
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
    padding: 12,
    flexDirection: "row",

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
  },
});

export default ExpenseCard;
