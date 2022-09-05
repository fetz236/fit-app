
import { StyleSheet } from 'react-native'

export const fp_style = StyleSheet.create({
    header_container: {
        alignItems:'center',
        marginTop:"5%",
        flexDirection:'column',
        justifyContent:'space-between',
    },
    title:{
        color: '#800020',
        fontSize:50,
        fontWeight:'600',
    },
    sub_heading:{
        color: '#800020',
        fontSize:20,
        fontWeight:'600',
        marginLeft:'1%',
        marginBottom:'2%',
    },
    divider:{
        marginTop:'2%',
        marginBottom:'2%',
        color:'#a2a2a2',
    },
    fp_container:{
        marginTop:'10%',
        marginLeft:'3%',
    },
    input_container:{
        height:50,
        marginRight:'3%',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#800020',
    },
    ti_container:{
        height:'95%',
        width:'95%',
        marginLeft:'3%',
        marginRight:'3%',
        fontSize:16,    
    },
    fp_header:{
        fontSize:20,
        fontWeight:'600', 
        color: '#800020'
    },
    fp_info:{
        marginTop:'3%',
        marginLeft:'-3%',
        marginBottom:'1%',
        alignItems:'center',
        justifyContent:'center',
    },
    fp_text:{
        fontSize:16,
        fontWeight:'600',    
        color: '#8d8d8d'
    },
    fp_divider:{
        marginTop:'2%',
        marginBottom:'2%',
        color:'#a2a2a2',
        marginLeft:'-3%',
    },
    forgot_container:{
        marginTop:'10%',
        alignSelf:'center',
        justifyContent:'center',
    },
    close_button: {
        marginLeft:'auto',
        right:0,
    },
});

