import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "./screens/Home"
import FitnessDetail from "./screens/FitnessDetail"
import { Provider as ReduxProvider } from 'react-redux'
import store from "./redux/Store"
import configureStore from './redux/Store'
import ScheduleDetail from './screens/ScheduleDetail'
import TrainerHome from './screens/TrainerHome'
import TrainerScheduleDetail from './screens/TrainerScheduleDetail'
import TrainerDetail from './screens/TrainerDetail'
import UserDetail from './screens/UserDetail'

export default function RootNavigation() {
    const store = configureStore();

    const stack = createStackNavigator();
    const screen_options = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <stack.Navigator screenOptions={screen_options}>
                    <stack.Screen name = "Home" component={Home}/>
                    <stack.Screen name = "TrainerHome" component={TrainerHome}/>
                    <stack.Screen name = "FitnessDetail" component={FitnessDetail}/>
                    <stack.Screen name = "ScheduleDetail" component={ScheduleDetail}/>
                    <stack.Screen name = "TrainerScheduleDetail" component={TrainerScheduleDetail}/>
                    <stack.Screen name = "TrainerDetail" component={TrainerDetail}/>
                    <stack.Screen name = "UserDetail" component={UserDetail}/>
                </stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}
