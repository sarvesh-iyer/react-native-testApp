import { View, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import { TextInput } from 'react-native-paper';
import { colors } from '../assets/colors';
import Button from '../components/utils/Button/Button';
import { MaterialIcon } from '../components/utils/Icons/MaterialIcon';

const Login = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [pwd, setpwd] = useState("")
    // const isVisible = useRef(false);

    const toggle = () => {
        // isVisible.current = !isVisible.current
        setIsVisible(!isVisible)
    } 

    return (
        <Container>
            <View className="px-4 py-10">
                <Text className="text-2xl text-center">Login</Text>
                <View className="mt-14">
                    <TextInput
                        key="email"
                        label={
                            <Text>Email <Text className="text-red-400">*</Text></Text>
                        }
                        style={{backgroundColor: colors.bg_gray}}
                        theme={{
                            colors: {
                                primary: colors.accent,
                            },
                        }}
                    />
                    <View className="mt-7">
                        <Pressable >
                            <Text className="text-right mb-1 text-xs" style={{color: colors.accent}}>
                                Forget password
                            </Text>
                        </Pressable>
                        <TextInput
                            key="password"
                            label={
                                <Text>Password <Text className="text-red-400">*</Text></Text>
                            }
                            style={{backgroundColor: colors.bg_gray}}
                            theme={{
                                colors: {
                                    primary: colors.accent,
                                },
                            }}
                            value={pwd}
                            onChangeText={setpwd}
                            secureTextEntry={isVisible ? false : true}
                            right={
                                <TextInput.Icon
                                    icon={isVisible ? 'eye' : 'eye-off'}
                                    // forceTextInputFocus={false}
                                    onPress={toggle}
                                />
                            }
                        />
                    </View>
                    <Button
                        variant="primary"
                        title="Log in"
                        btnClass="mt-12"
                    />
                </View>
            </View>
        </Container>
    );
};

export default Login;
