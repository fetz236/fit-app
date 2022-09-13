
import { StyleSheet } from 'react-native'

export const change_payment_css = StyleSheet.create({
    header_container: {
        alignItems:'center',
        marginTop:"5%",
        flexDirection:'column',
        justifyContent:'space-between',
    },
    title:{
        color: '#800020',
        fontSize:24,
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
    existing_container:{
        marginTop:'2%',
        marginLeft:'3%',
    },
    existing_header:{
        fontSize:24,
        fontWeight:'600', 
        color: '#800020'
    },
    existing_info:{
        marginTop:'3%',
        marginLeft:'-3%',
        marginBottom:'1%',
        alignItems:'center',
        justifyContent:'center',
    },
    existing_text:{
        fontSize:16,
        fontWeight:'600',    
        color: '#8d8d8d'
    },
    add_container:{
        marginTop:'10%',
        marginLeft:'3%',
    },
    add_header:{
        fontSize:24,
        fontWeight:'600', 
        color: '#800020'
    },
    add_info:{
        marginTop:'3%',
        marginLeft:'-3%',
        marginBottom:'3%',
        alignItems:'center',
        justifyContent:'center',
    },
    add_button:{
        borderWidth:2,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:50,
        borderColor:'#800020'
    },
    add_text:{
        fontSize:50,
        fontWeight:'600',    
        color: '#8d8d8d'
    },
    card_box:{
        marginTop:'6%',
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    card_column_box:{
        marginTop:'6%',
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    card_container:{
        flexDirection:'row',
        alignItems:'center',
    },
    expiry_container:{
        alignItems:'center',
        justifyContent:'center',
    },
    expiry_text:{
        color:'red',
    },
    existing_main:{
        marginLeft: '3%',
    },

    ti_container:{
        height:'95%',
        width:'95%',
        marginLeft:'3%',
        marginRight:'3%',
        fontSize:16,    
    },
    input_container:{
        marginTop:'5%',
        height:50,
        marginRight:'3%',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#800020',
    },
    small_input_container:{
        marginTop:'5%',
        width:'47%',
        height:50,
        marginRight:'3%',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#800020',
    },
    small_ti_container:{
        height:'95%',
        width:'95%',
        marginLeft:'3%',
        marginRight:'3%',
        fontSize:16,    
    },
    new_card_form:{
        flex:1, 
        flexDirection:'column',
        marginTop:'3%',
    },
    small_containers:{
        flex:1,
        flexDirection:'row',
    },
    save_info:{
        marginTop:'6%',
        marginLeft:'-3%',
        marginBottom:'3%',
        alignItems:'center',
        justifyContent:'center',
    },
    save_button:{
        borderWidth:3,
        borderRadius:50,
        borderColor:'#800020',
        backgroundColor:'#800020',
    },
    save_text:{
        fontSize:20,
        marginTop:'3%',
        marginBottom:'3%',
        marginRight:'3%',
        marginLeft:'3%',
        fontWeight:'600',    
        color: 'white'
    },

});

