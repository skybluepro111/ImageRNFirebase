import React, { Component } from 'react';
import { ScrollView, Button, Text, View, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import firebaseApp from '../firebaseConfig.js'
import Masonry from 'react-native-masonry' 
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'

const { height, width } = Dimensions.get('window');

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.taskRef= firebaseApp.database().ref('/posts/addPost');
        this.state = {
            snapShotlist:[],
            data:[]
        }
            
    }

    getData = (taskRef) => {
        taskRef.on('value', (snapShot) =>{
            if(snapShot){
                let dataDB = Object.values(snapShot.val());
                dataDB.map((image, index)=> {
                   this.state.data.push({uri: image.image})
                })
                this.setState({snapShotlist: dataDB})
            }
        })
       
    }
   
    componentDidMount() {
        this.getData(this.taskRef)
       
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.logo}>FreeBees</Text>
                    <TouchableOpacity><Icon style={{marginTop:25}} name="bell" size={18} color="white"/></TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.text}>Near me</Text>
                        <TouchableOpacity>
                            <Icon name="compass" size={20} color='white'/>
                        </TouchableOpacity>
                    </View>
                </View>    
                <FlatList
                    data={this.state.snapShotlist}
                    renderItem={({ item }) => <TouchableOpacity onPress={() =>Actions.itemDetail({ item })}>
                        <Image style={{ margin: 4, width: width * 0.3, height: width * 0.3 }} source={{ uri: item.image }} /></TouchableOpacity>}
                    keyExtractor={(item, index) => index}
                    numColumns={3}
                    horizontal={false}
                    columnWrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
                />
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    header: {
        height: '10%', 
        backgroundColor: '#f3581a', 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    logo: {
        paddingLeft:8,
        paddingTop:25, 
        fontSize:16,
        fontWeight:'bold',
        color:'white', 
        fontStyle:'italic'
    },
    container: {
        flexDirection:'row', 
        paddingTop:25, 
        marginRight:10
    },

    text: {
        color:'white', 
        paddingRight: 8, 
        fontWeight:'bold'
    },
   
    
})