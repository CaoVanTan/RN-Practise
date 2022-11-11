import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import HeaderBack from "../components/Header/HeaderBack";
import Button from "../components/Button/Button";

const SettingScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <HeaderBack />
            <View style={styles.wrapper}>
                <Text>SettingScreen</Text>
                <Button
                    title="Logout"
                    color="black"
                    style={{
                        marginTop: 32,
                        borderWidth: 1,
                        borderColor: "black",
                    }}
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
