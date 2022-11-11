import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = (props) => {
    const { title, children } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

export default Header;

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
