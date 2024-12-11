import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import { TextInput } from 'react-native-paper';
import { colors } from '../assets/colors';

const Login = () => {

    const StyledView = styled.View`

    `;
    const StyledInput = styled.TextInput`
        border: 1px solid black;
        border-radius: 8px;
        padding: 10px 16px;
    `;

    return (
        <Container>
            <StyledView>
                <Text className="text-2xl text-center">Login</Text>
                <View className="gap-5">
                    <TextInput
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
                    <View>
                        <Pressable>
                            <Text
                                className="text-right mb-1 text-xs"
                                style={{color: colors.accent}}
                            >
                                Forget password
                            </Text>
                        </Pressable>
                        <TextInput
                            label={
                                <Text>Password <Text className="text-red-400">*</Text></Text>
                            }
                            style={{backgroundColor: colors.bg_gray}}
                            theme={{
                                colors: {
                                    primary: colors.accent,
                                },
                            }}
                        />
                    </View>
                </View>
            </StyledView>
        </Container>
    );
};

export default Login;
