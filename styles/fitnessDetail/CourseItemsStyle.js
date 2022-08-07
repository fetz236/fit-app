
import { StyleSheet } from 'react-native'

export const course_sheet = StyleSheet.create({
    course_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginLeft:20,
    },
    course_title:{
        fontSize:19,
        fontWeight:'600',    
    },
    course_image:{
        width:100, 
        height:100, 
        borderRadius:8, 
        marginRight:20, 
        marginBottom:5
    },
});


