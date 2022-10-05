import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";

const ExpenseCard = ({ itemData}) => {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{itemData.title}</Text>
        <Text style={styles.subtitle}>{itemData.amount} ₹</Text>
        <Text>
          {itemData.date.toDateString()}
        </Text>
      </View>
      <View>
        <Pressable>
          <Feather name="edit" color={GlobalStyles.colors.red} size={24} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    width: "100%",
    borderRadius: 4,
    elevation: 2,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.blue,
    fontSize: 20,
  },
  subtitle: {
    color: GlobalStyles.colors.blueDark,
    marginVertical: 4,
    fontSize: 16,
  },
});

export default ExpenseCard;
