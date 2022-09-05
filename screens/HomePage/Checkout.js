import { StripeProvider } from '@stripe/stripe-react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import CheckoutPage from '../../components/checkout/CheckoutPage'

export default function Checkout({route, navigation}) {
    return (
        <ScrollView>
            <CheckoutPage navigation={navigation} route={route}></CheckoutPage>
        </ScrollView>
    )
}
