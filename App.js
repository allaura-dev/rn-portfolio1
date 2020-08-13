
import * as React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Portfolio from './components/screens/LandingScreen';
import Resume from './components/screens/ResumeScreen';
import Tuts from './components/screens/TutorialSreen';
import Logo from './assets/images/logos/AHDevStudio.png';


const Drawer = createDrawerNavigator();

function DrawerLogo({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Image source = {Logo} style={{ width: '100px' , height : '100px' }}/>
      <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left', width: '150px' , height : '150px' }} />
    </TouchableOpacity>
  );
}

  
function NavDrawer() {
    return (
      <Drawer.Navigator >
        <Drawer.Screen name="AH! Dev Studios" component={ DrawerLogo } />
        <Drawer.Screen name="Portfolio" component={ Portfolio } />
        <Drawer.Screen name="Resume" component={Resume} />
        <Drawer.Screen name="Tutorials" component={Tuts} />
      </Drawer.Navigator>
    );
  }


export default function App() {
  return (
    <NavigationContainer>
        <NavDrawer />
    </NavigationContainer>
  );
}