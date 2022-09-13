import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { checkout_style } from '../../styles/checkout/CheckoutPageStyle'
import { CardField, useStripe } from '@stripe/stripe-react-native';


export default function CheckoutPage({navigation}) {
    
    const [changeState, setChangeState] = useState(false);

    const changePayment = () => {
        setChangeState(true);
    };


    const { confirmPayment } = useStripe();
    const [cardDetails, setCardDetails] = useState()

    const handlePayPress = async() => {
        if(!cardDetails?.complete){
            alert("Card Details are not complet")
        }
    }

    return (
        <SafeAreaView>
            
            <Information time="12"/>
            <Order/>
            <Payment confirmPayment={confirmPayment} changePayment={changePayment} setCardDetails={setCardDetails} 
            navigation={navigation}/>
            { 
                changeState && <ChangePayment/>
            }
            <Confirmation handlePayPress={handlePayPress}/>
        </SafeAreaView>

    )
}


const Information = (props) => (
    <>
        <View style={checkout_style.header_container}>
            <Text style={checkout_style.title}>Checkout</Text>
            <Text style={checkout_style.sub_heading}>Marylebone Square Gym</Text>
        </View>
        <Divider width={1} style={checkout_style.divider}/>
        <View style ={checkout_style.order_container}>
            <Text style={checkout_style.order_header}> Order </Text>
            <Divider width={1} style={checkout_style.order_divider}/>
            <View style={checkout_style.order_info}>
                <Text style={checkout_style.order_text}>Boxing Session with Dimitri</Text>
                <Text style={checkout_style.order_text}> {props.time}</Text>

            </View>
            <Divider width={1} style={checkout_style.order_divider}/>
        </View>
    </>
)
    
const Order = () => (
    <View style ={checkout_style.perks_container}>
        <View>
            <Text style={checkout_style.perks_header}> Add Perks </Text>
        </View>
        <Divider width={1} style={checkout_style.perks_divider}/>
        <View style={checkout_style.perks_info}>
            <Text style={checkout_style.perks_subheader}>No Trainer</Text>
            <TouchableOpacity>
                <Text style={checkout_style.perks_text}>Add a Trainer</Text>
            </TouchableOpacity>
        </View>
        <View style={checkout_style.perks_info}>
            <Text style={checkout_style.perks_subheader}>fit- Perks</Text>
            
            <TouchableOpacity>
                <Text style={checkout_style.perks_text}>Add a Perk</Text>
            </TouchableOpacity>
        </View>
        <Divider width={1} style={checkout_style.perks_divider}/>
    </View>
)

const Payment = (props) => (
    <View style ={checkout_style.payment_container}>
        <View style={checkout_style.payment_header_info}>
            <Text style={checkout_style.payment_header}> Payment </Text>
            <TouchableOpacity style={checkout_style.payment_change}
            onPress={() => props.navigation.navigate("ChangePayment")}>
                <Text style={checkout_style.payment_change_text}> Change Payment method </Text>
            </TouchableOpacity>
        </View>
        <View style={checkout_style.payment_info}>

            <CardField
                postalCodeEnabled={false}
                placeholders={{
                number: '1234 5678 9012 3456',
                }}
                cardStyle={{
                backgroundColor: '#d8d8d8',
                textColor: '#800020',
                }}

                style={{
                width: '100%',
                height: 50,
                marginTop:'2%',
                backgroundColor: 'transparent',
                }}
                onCardChange={(cardDetails) => {
                    props.setCardDetails(cardDetails)
                }}
                onFocus={(focusedField) => {
                console.log('focusField', focusedField);
                }}
            />
        </View>
    </View>
)

const Confirmation = (props) => (
    <View style={checkout_style.button_container}>
        <Button title="Pay" color="white" onPress={props.handlePayPress}/>
    </View>
)

const ChangePayment = () => (
    <View style={checkout_style.change_payment_container}>
        <Text style={checkout_style.payment_text}>Select Payment</Text>
    </View>
)