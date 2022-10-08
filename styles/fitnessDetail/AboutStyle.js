
import { StyleSheet } from 'react-native'

export const about_sheet = StyleSheet.create({
    about_full_container: {
        marginTop:10,
        padding:15,
        backgroundColor: "white"
    },
    about_category:{
        flexDirection:'row',
        marginTop:'3%',
        marginLeft:'3%',
        width:'47%',
    },
    opening_hours:{
        flexDirection:'column',
        marginTop:'3%',
        marginLeft:'2%',
        width:'47%',
    },
    wo_item:{
        padding:'0.5%',
        
    },
    wo_text:{
        color:'#8d8d8d',
    },
    about_img:{
        width:"92%",
        height:180,  
        marginTop:30,
    },
    about_title:{
        color:'#800020',
        fontSize:29,
        fontWeight:"600",
        marginTop: 10,
        marginHorizontal:15,
    },
    about_desc:{
        color:'#8d8d8d',
        fontSize:15.5,
        fontWeight:"400",
        marginTop:10,
        marginHorizontal: 15,
    }
});


