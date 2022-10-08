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
import Modify from './screens/UpcomingPage/Modify';
import Cancel from './screens/UpcomingPage/Cancel';
import BookingConfirmation from './components/checkout/BookingConfirmation';
import ViewPerks from './components/checkout/ViewPerks';
import AccountDetailsScreen from './screens/HomePage/AccountDetailsScreen';
import ContactPreferencesScreen from './screens/HomePage/ContactPreferencesScreen';
import PaymentDetailsScreen from './screens/HomePage/PaymentDetailsScreen';
import ReferUserScreen from './screens/HomePage/ReferUserScreen';
import { header_style } from './styles/components/HeaderStyle';





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
        <HomeStack.Screen name="HomePage" component={Home} options={{animationEnabled:false}}/>
        <HomeStack.Screen name="TrainerHome" component={TrainerHome} options={{animationEnabled:false}}/>
        <HomeStack.Screen name = "FitnessDetail" component={FitnessDetail}/>
        <HomeStack.Screen name = "ScheduleDetail" component={ScheduleDetail} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:' Select Class Date'
            }}/>
        <HomeStack.Screen name = "TrainerDetail" component={TrainerDetail} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white',headerTitle:''
            }}/>
        <HomeStack.Screen name = "TrainerScheduleDetail" component={TrainerScheduleDetail} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:'Select Trainer Date'
            }}/>
        <HomeStack.Screen name = "UserDetail" component={UserDetail} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:''
            }}/>
        <HomeStack.Screen name = "AccountDetailsScreen" component={AccountDetailsScreen} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:' Account Details'
            }}/>
        <HomeStack.Screen name = "PaymentDetailsScreen" component={PaymentDetailsScreen} options={{headerShown:true, 
        headerStyle:header_style.full_container, headerBackTitleVisible:false, 
        headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:'Payment Methods'
            }}/>
        <HomeStack.Screen name = "ContactPreferencesScreen" component={ContactPreferencesScreen} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:' Contact Preferences'
            }}/>
        <HomeStack.Screen name = "ReferUserScreen" component={ReferUserScreen} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:' Refer a Friend'
            }}/>
        <HomeStack.Screen name = "Checkout" component={Checkout} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:' Checkout'
            }}/>
        <HomeStack.Screen name = "ChangePayment" component={ChangePayment} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:' Change Payment'
            }}/>
        <HomeStack.Screen name = "BookingConfirmation" component={BookingConfirmation}/>
        <HomeStack.Screen name = "ViewPerks" component={ViewPerks}/>
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
        <SearchStack.Screen name="SearchPage" component={Search}/>
    </SearchStack.Navigator>
)

const UpcomingStackScreen = () => (
    <UpcomingStack.Navigator screenOptions={{
        headerShown:false,
    }}>
        <UpcomingStack.Screen name="UpcomingHome" component={UpcomingHome}/>
        <UpcomingStack.Screen name="Modify" component={Modify} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:'Modify Booking'
            }}/>
        <UpcomingStack.Screen name="Cancel" component={Cancel} options={{headerShown:true, 
            headerStyle:header_style.full_container, headerBackTitleVisible:false, 
            headerTitleStyle:header_style.title, headerTintColor: 'white', headerTitle:'Cancel Booking'
            }}/>


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
