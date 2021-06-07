import * as React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../Screens/Login';
const Stack = createStackNavigator();


// const StackNavigator = () => {
//     return (
//         <Stack.Navigator initialRouteName="Login" headerMode={false}>
//              <Stack.Screen name="Login" component={Login} />

//         </Stack.Navigator>
//     );
// };



export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login"  options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
