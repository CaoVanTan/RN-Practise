import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header/Header";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <Header title="Home">
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("Setting")}
                >
                    <Ionicons
                        name="ios-settings-outline"
                        size={32}
                        color="black"
                    />
                </TouchableOpacity>
            </Header>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
