import { Pressable, View,Text, StyleSheet } from "react-native"

const ButtonIcon = ({icon, onPress, bgColor, color }) => {

    return <View style={{...styles.container, backgroundColor:bgColor}}>
        <Pressable style={{...styles.innerContainer}} onPress={onPress}>
            <Text style={{...styles.text, color: color}}>
                {icon}
            </Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        borderRadius: 4,

    },
    innerContainer : {
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    text : {
        fontSize: 24,
    }
})

export default ButtonIcon;