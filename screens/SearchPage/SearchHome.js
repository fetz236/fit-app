import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import CategorySearch from '../../components/search_section/search/CategorySearch'
import UserSearchBar from '../../components/search_section/search/UserSearchBar'
export default function SearchHome({navigation}) {
    return (
        <ScrollView style={{backgroundColor:'white'}} nestedScrollEnabled={true}>
            <UserSearchBar navigation={navigation}></UserSearchBar>
        </ScrollView>
    )
}
