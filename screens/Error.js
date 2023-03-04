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
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';
import {View} from 'react-native';

const {brand, darkLight, primary} = Colors;

const Error = ({navigation}) => {




    const [hidePassword, setHidePassword] = useState(true);

    return (
       <>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeContainer>
                <Avatar resizeMode="cover" source={require('./../assets/img/bad.png')}/>
                    <PageTitle welcome={true}>Error</PageTitle> 
                    <SubTitle welcome={true}>Invalid card details</SubTitle>
                    <StyledFormArea>
                    
               
                    <StyledButton onPress={() => navigation.navigate('Signup')}>
                        <ButtonText>
                            Back
                        </ButtonText>
                    </StyledButton>
                    

                    </StyledFormArea>

                </WelcomeContainer>
            </InnerContainer>
            </>
    );
};



export default Error;