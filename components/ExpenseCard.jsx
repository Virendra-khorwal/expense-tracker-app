import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";

const ExpenseCard = ({ title, amount }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{amount} $</Text>
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
    width: 340,
    borderRadius: 4,
    elevation: 2,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.blue,
    fontSize: 20,
  },
  subtitle: {
    color: GlobalStyles.colors.gray,
    marginTop: 4,
  },
  
});

export default ExpenseCard;
