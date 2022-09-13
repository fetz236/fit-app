import { StripeProvider } from '@stripe/stripe-react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import CheckoutPage from '../../components/checkout/CheckoutPage'

export default function Checkout({route, navigation}) {
    const [publishableKey, setPublishableKey] = useState("pk_test_51LazUVK37HLTMDw6FUcMPHrwXAv5KObl4P1MrJFemgpCHldM8PsfYQUFphV7DQN88ggctRZTFMuy5XGuyBx0Rar000KH2ustQql")

    return (
        <ScrollView>
            <StripeProvider
            publishableKey={publishableKey}
            //merchantIdentifier="merchant.identifier" // required for Apple Pay
            //urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            >
                <CheckoutPage navigation={navigation} route={route}></CheckoutPage>
            </StripeProvider>
        </ScrollView>
    )
}
