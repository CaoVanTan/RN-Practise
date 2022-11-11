import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderBack = (props) => {
    const { title } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
            >
                <Feather name="arrow-left" size={32} color="black" />
            </TouchableOpacity>
            {title ? <Text style={styles.title}>{title}</Text> : null}
        </View>
    );
};

export default HeaderBack;

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
});
