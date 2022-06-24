import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Profile from '../pages/Profile';
import About from '../pages/About';

const Stack = createNativeStackNavigator();

export const NavigationHandler = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Home"
                component={Home}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
            />
            <Tabs.Screen
                name="About"
                component={About}
            />
        </Tabs.Navigator>
    );
};
