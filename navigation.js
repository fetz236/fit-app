import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/HomePage/Home"
import FitnessDetail from "./screens/HomePage/FitnessDetail"
import { Provider as ReduxProvider } from 'react-redux'
import store from "./redux/Store"
import configureStore from './redux/Store'
import ScheduleDetail from './screens/HomePage/ScheduleDetail'
import TrainerHome from './screens/HomePage/TrainerHome'
import TrainerScheduleDetail from './screens/HomePage/TrainerScheduleDetail'
import TrainerDetail from './screens/HomePage/TrainerDetail'
import UserDetail from './screens/HomePage/UserDetail'
import { TabView } from 'react-native-elements';
import { Tab } from 'react-native-elements/dist/tab/Tab';
import Search from './screens/SearchPage/SearchHome';
import UpcomingHome from './screens/UpcomingPage/UpcomingHome';
import Icon from 'react-native-vector-icons/Ionicons';
import Checkout from './screens/HomePage/Checkout';
import ChangePayment from './components/checkout/ChangePayment';
import AuthenticationScreen from './screens/Authentication/AuthenticationScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import SignUpScreen from './screens/Authentication/SignUpScreen';
import ForgotPasswordScreen from './screens/Authentication/ForgotPasswordScreen';
import AccountCreatedScreen from './screens/Authentication/AccountCreatedScreen';




const tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const UpcomingStack = createStackNavigator();

const config_transition = {
    animation: 'timing',
    config: {
      duration:0,
    },
  };

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{
        headerShown:false,

    }}>
        <HomeStack.Screen name="Home" component={Home} options={{animationEnabled:false}}/>
        <HomeStack.Screen name="TrainerHome" component={TrainerHome} options={{animationEnabled:false}}/>
        <HomeStack.Screen name = "FitnessDetail" component={FitnessDetail}/>
        <HomeStack.Screen name = "ScheduleDetail" component={ScheduleDetail}/>
        <HomeStack.Screen name = "TrainerDetail" component={TrainerDetail}/>
        <HomeStack.Screen name = "TrainerScheduleDetail" component={TrainerScheduleDetail}/>
        <HomeStack.Screen name = "UserDetail" component={UserDetail}/>
        <HomeStack.Screen name = "Checkout" component={Checkout}/>
        <HomeStack.Screen name = "ChangePayment" component={ChangePayment}/>
        <HomeStack.Screen name = "AuthenticationScreen" component={AuthenticationScreen} options={{ presentation:'modal'}}/>
        <HomeStack.Screen name = "LoginScreen" component={LoginScreen} options={{ presentation:'modal', transitionSpec:{open:config_transition, close:config_transition}, animationEnabled:true}}/>
        <HomeStack.Screen name = "SignUpScreen" component={SignUpScreen} options={{ presentation:'modal', transitionSpec:{open:config_transition, close:config_transition}, animationEnabled:true}}/>
        <HomeStack.Screen name = "ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ presentation:'modal', transitionSpec:{open:config_transition, close:config_transition}, animationEnabled:true}}/>
        <HomeStack.Screen name = "AccountCreatedScreen" component={AccountCreatedScreen} options={{ presentation:'modal', transitionSpec:{open:config_transition, close:config_transition}, animationEnabled:true}}/>


    </HomeStack.Navigator>

)

const SearchStackScreen = () => (
    <SearchStack.Navigator screenOptions={{
        headerShown:false,
    }}>
        <SearchStack.Screen name="Search" component={Search}/>
    </SearchStack.Navigator>
)

const UpcomingStackScreen = () => (
    <UpcomingStack.Navigator screenOptions={{
        headerShown:false,
    }}>
        <UpcomingStack.Screen name="UpcomingHome" component={UpcomingHome}/>

    </UpcomingStack.Navigator>
)


export default function RootNavigation() {
    const store = configureStore();
    

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>

                <tab.Navigator screenOptions={{
                    headerShown:false,
                    tabBarActiveTintColor:"white",
                    tabBarInactiveTintColor:"white",
                    tabBarActiveBackgroundColor:"#800020",
                    tabBarInactiveBackgroundColor:"#800020",
                    tabBarStyle:{
                        height:'10%',
                        backgroundColor:'#800020',
                        marginTop:'1%'
                    }
                }}
                
                >
                    <tab.Screen name="Home" component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                          ),
                    }}
                    />
                    <tab.Screen name="Search" component={SearchStackScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="search" color={color} size={size} />
                          ),
                    }}
                    />
                    <tab.Screen name="Upcoming" component={UpcomingStackScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="calendar" color={color} size={size} />
                          ),
                    }}
                    />
                </tab.Navigator>

            </NavigationContainer>
        </ReduxProvider>
    )
}
