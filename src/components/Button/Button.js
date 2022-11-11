import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = (props) => {
    const { title, onPress, background, color = "white", style } = props;

    return (
        <TouchableOpacity
            style={[styles.container, style, { backgroundColor: background }]}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={[styles.title, { color: color }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 56,
    },
    title: {
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold",
    },
});
