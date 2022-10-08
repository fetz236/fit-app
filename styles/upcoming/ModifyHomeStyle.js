
import { StyleSheet } from 'react-native'

export const modify_home_style = StyleSheet.create({
    header_container: {
        alignItems:'center',
        marginTop:"5%",
        flexDirection:'column',
        justifyContent:'space-between',
    },
    title:{
        color: '#800020',
        fontSize:20,
        fontWeight:'600',

    },
    sub_heading:{
        color: '#8d8d8d',
        fontSize:16,
        fontWeight:'400',
    },
    divider:{
        marginTop:'5%',
        marginBottom:'5%',
        color:'#a2a2a2',
    },
    modify_container:{
        marginTop:'10%',
        marginLeft:'3%',
        marginRight:'3%',
        alignItems:'center',
        justifyContent:'center',
    },
    modify_header:{
        fontSize:20,
        fontWeight:'600', 
        color: '#800020'
    },
    modify_info:{
        marginTop:'5%',
        marginBottom:'1%',
        alignItems:'center',
        justifyContent:'center',
    },
    modify_text:{
        fontSize:16,
        fontWeight:'600',    
        color: '#8d8d8d'
    },
    modify_divider:{
        marginTop:'2%',
        marginBottom:'2%',
        color:'#a2a2a2',
        marginLeft:'-3%',
    },
    accept_terms:{
        borderWidth:2,
        borderRadius:50,
        borderColor:'#800020',
        marginTop:'15%',
        marginLeft:'3%',
        marginRight:'3%',
    },
    confirm_modification:{
        borderWidth:2,
        borderRadius:50,
        borderColor:'#800020',
        marginLeft:'3%',
        marginRight:'3%',
    },
    confirm_container:{
        marginTop:'10%',
        marginLeft:'3%',
        marginRight:'3%',
        alignItems:'center',
        justifyContent:'center',
    },
    all_buttons:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:'10%',
        marginBottom:'10%',
        marginLeft:'3%',
        marginRight:'3%',
    },
    button_container:{
        marginTop:'10%',
        marginBottom:'10%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#800020",
        borderRadius:50,
        borderWidth:5,
        borderColor:'#800020',
    },
    button_text:{
        color:'white',
        fontSize:20,
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'3%',
        marginBottom:'3%',
    },
    date_time_style:{
        width: 100,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
        backgroundColor: '#800020',
    },
    time_style:{
        width: 100,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
        backgroundColor: '#800020',
    }
});

