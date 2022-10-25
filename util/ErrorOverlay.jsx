import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "./button";

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occured!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button title="Okay" onPress={onConfirm} />
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.white,
  },
  text: {
    textAlign: "center",
    color: GlobalStyles.colors.blueDark,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
