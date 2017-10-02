import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux';

export default class ItemDetail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.item);
    }
    render() {
        return(
            <Image style={styles.backgroundImage } source={{ uri: this.props.item.image }} >
           
                <View style={styles.header}>
                    <TouchableOpacity style={styles.arrow} onPress={() =>Actions.item()}>
                       <Icon style={{backgroundColor:'transparent'}} name="arrow-left" size={17} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textInput}>
                        <Text style={styles.font}>{this.props.item.condit}</Text>
                     </TouchableOpacity> 
                             
                    <TouchableOpacity style={styles.compass}>
                        <Icon style={{backgroundColor:'transparent'}} name="compass" color='white' size={22} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:4}} />
                <View style={{flex:2}}>
                    <TouchableOpacity style={styles.sms}><Icons style={{backgroundColor:'transparent', color:'white'}} name="textsms" size={22} /></TouchableOpacity>
                    <View style={styles.shadowText}>
                        <Text style={styles.title}>{this.props.item.title}</Text>
                        <Text style={styles.description}>{this.props.item.description}</Text>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center',  alignItems:'center'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'#f3581a'}}>PICK IT UP</Text>
                     </TouchableOpacity> 
                </View>   
              
           </Image> 
        )
    }
}

const styles = StyleSheet.create({
    backgroundColor: {
        backgroundColor: 'white',
        flex:1,
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        
    },
    shadowText: {
        alignSelf:'center',
        backgroundColor: 'rgba(0,0,0,0.6)', 
        width:'93%'
    },
    arrow: {
        marginLeft: 13,
        marginTop:25
    },
    header: {
        flexDirection:'row', 
        flex:1,
        justifyContent:'space-between',
        backgroundColor: 'rgba(0,0,0,0.1)', 
    },
    compass: {
        marginRight: 13,
        marginTop:25
    },
    container: {
        flex:1, 
        alignItems: 'center'
    },
    sms: {
        alignItems:'flex-end', 
        marginRight:10
    },
    title: {
        fontSize:24,
        paddingLeft:10, 
        backgroundColor:'transparent', 
        color:'white'
    },
    description: {
        fontSize:16,
        paddingLeft:12,
        backgroundColor:'transparent', 
        color:'white'
    },
    textInput: {
        height: '45%',
        backgroundColor: '#f3581a',
        width:'33%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:25
    },
    button: {
        height: '82%',
        backgroundColor: 'white',
        width:'94%',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:15,
        borderColor:'#f3581a',
        borderWidth:1
    },
    font: {
        color:'white'
    },
    textinput: {
        width: '96%',
        height: '88%',
        paddingLeft: 20,
        backgroundColor: 'white',
        borderRadius:3,
        
       
    },
    
})