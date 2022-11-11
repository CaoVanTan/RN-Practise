import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Button from "../components/Button/Button";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [mode, setMode] = useState("signIn");
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        if (email === "" || password === "") {
            Alert.alert("Thông báo", "Bạn phải nhập email và mật khẩu!");
        } else {
            if (email === "minhtan006237@gmail.com" && password === "cvtan") {
                navigation.navigate("Home");
                setEmail("");
                setPassword("");
            } else {
                Alert.alert(
                    "Thông báo",
                    "Email hoặc mật khẩu không chính xác!"
                );
            }
        }
    };

    const handleSignUp = () => {
        if (email === "" || password === "") {
            Alert.alert("Thông báo", "Bạn phải nhập email và mật khẩu!");
        } else {
            setMode("signIn");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <ImageBackground
            source={require("../../assets/background.jpg")}
            resizeMode="stretch"
            style={styles.background}
        >
            <StatusBar barStyle={"light-content"} />

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperInput}>
                            <Text style={styles.title}>Email:</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="email-address"
                                cursorColor="white"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={(value) => setEmail(value)}
                            />
                        </View>
                        <View style={styles.wrapperInput}>
                            <Text style={styles.title}>Password:</Text>
                            <TextInput
                                style={styles.input}
                                cursorColor="white"
                                autoCapitalize="none"
                                secureTextEntry={isShowPassword}
                                value={password}
                                onChangeText={(value) => setPassword(value)}
                            />
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                                style={styles.password}
                            >
                                {isShowPassword ? (
                                    <Ionicons
                                        name="eye-outline"
                                        size={24}
                                        color="white"
                                    />
                                ) : (
                                    <Ionicons
                                        name="eye-off-outline"
                                        size={24}
                                        color="white"
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    {mode === "signIn" ? (
                        <View style={styles.wrapper}>
                            <Button
                                title="Sign in"
                                background="#18A2EB"
                                style={{
                                    borderWidth: 1,
                                    borderColor: "white",
                                    marginBottom: 24,
                                }}
                                onPress={handleSignIn}
                            />

                            <Button
                                title="Sign up"
                                background="#4D33B9"
                                style={{
                                    borderWidth: 1,
                                    borderColor: "white",
                                }}
                                onPress={() => {
                                    setEmail("");
                                    setPassword("");
                                    setMode("signUp");
                                }}
                            />
                        </View>
                    ) : (
                        <View style={styles.wrapper}>
                            <Button
                                title="Sign up"
                                background="#4D33B9"
                                style={{
                                    borderWidth: 1,
                                    borderColor: "white",
                                }}
                                onPress={handleSignUp}
                            />

                            <Button
                                title="Sign in"
                                background="#18A2EB"
                                style={{
                                    borderWidth: 1,
                                    borderColor: "white",
                                    marginTop: 24,
                                }}
                                onPress={() => {
                                    setEmail("");
                                    setPassword("");
                                    setMode("signIn");
                                }}
                            />
                        </View>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
    },
    container: {
        flex: 1,
        marginTop: "70%",
        marginBottom: "30%",
        marginHorizontal: 24,
        justifyContent: "space-between",
    },
    wrapper: {},
    wrapperInput: {
        width: "100%",
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: "white",
        marginTop: 2,
    },
    input: {
        width: "65%",
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },
    password: {
        position: "absolute",
        right: 0,
    },
});
