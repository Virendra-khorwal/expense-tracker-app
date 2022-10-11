import { Pressable, Text, View } from "react-native";

const button = ({ color, title, bgColor }) => {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default button;
