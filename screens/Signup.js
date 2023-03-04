import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';
import {View} from 'react-native';



const {brand, darkLight, primary} = Colors;

const Signup = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/astro.png')}/>
               
               

                <Formik
                    initialValues={{cardNumber: '', cvv: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Error');
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput
                        label = "Card Number"
                        icon="credit-card"
                        placeholder="000 0000 0000 0000 0000"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('cardNumber')}
                        onBlur={handleBlur('cardNumber')}
                        value={values.cardNumber}
                        
                    />
                    <MyTextInput
                        label = "CVV"
                        icon="credit-card"
                        placeholder="***"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('cvv')}
                        onBlur={handleBlur('cvv')}
                        value={values.cvv}
                    />
                    
                    <MyTextInput
                        label = "Password"
                        icon="lock"
                        placeholder="*************"
                        placeholderTextColor = {darkLight}
                        onChangeText = {handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                    <MyTextInput
                        label = "Confirm Password"
                        icon="lock"
                        placeholder="*************"
                        placeholderTextColor = {darkLight}
                        onChangeText = {handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Sign Up
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    
                    <ExtraView>
                        <ExtraText>Already have an account? </ExtraText>
                        <TextLink>
                            <TextLinkContent onPress={() => navigation.navigate('Login')}>Login</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                    </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;