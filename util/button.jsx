import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ color, title, bgColor, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={{...styles.innerContainer, backgroundColor: bgColor}} onPress={onPress} android_ripple={{color: "#333"}}>
        <Text style={{...styles.text, color: color}} >{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 4,
  },
  innerContainer: {
    padding: 10,
    alignItems: "center",
  },
  text: {},
});

export default Button;
