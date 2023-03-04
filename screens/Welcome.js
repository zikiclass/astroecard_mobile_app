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

const Welcome = () => {




    const [hidePassword, setHidePassword] = useState(true);

    return (
       <>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Astro E-Card</PageTitle> 
                    <SubTitle welcome={true}>Welcome !</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/astro.png')}/>
               
                  
                    

                    </StyledFormArea>

                </WelcomeContainer>
            </InnerContainer>
            </>
    );
};



export default Welcome;