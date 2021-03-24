import * as React from 'react';
import {Text, View} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import db from '../config.js';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            Contact : '',
            FirstName : '',
            LastName : '',
            Address : '',
            EmailId : '',
            DocId : ''
        }
    }

    getUserDetails =()=>{
        var email = firebase.auth().currentUser.email
        db.collection("users").where('EmailId','==',email).get()
        .then(snapshot =>{
            snapshot.forEach(doc =>{
                var data = doc.data()
                this.setState({
                    EmailId : data.EmailId,
                    FirstName : data.FirstName,
                    LastName : data.LastName,
                    Address : data.Address,
                    Contact : data.Contact,
                    DocId : doc.id
                })
            })
        })
    }

    updateUserDetails =()=>{
       db.collection('users').doc(this.state.DocId)
       .update({
           "FirstName" : this.state.FirstName,
           "LastName" : this.state.LastName,
           "Address" : this.state.Address,
           "Contact" : this.state.Contact
       })
       alert("your file has been updated");
    }
    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        return(
            <View>
                <Header backgroundColor = 'yellow' 
                leftComponent = {<Icon name = 'bars' type = 'font-awesome' onPress = {()=>{this.props.navigation.toggleDrawer()}}/>} 
                centerComponent = {{text:'Setting Screen', style : {fontSize : 20, fontWeight : 'bold' }}}/>

                <View>
                    <TextInput style = {styles.textInput}
                    placeholder = 'contact details'
                    keyBoardType = 'numeric'
                    onChangeText ={(text)=>{
                        this.setState({
                            Contact:text
                        })
                    }}
                    value = {this.state.Contact}/>

                    <TextInput style = {styles.textInput}
                    placeholder = 'First Name'
                    keyBoardType = 'text'
                    onChangeText = {(text)=>{
                        this.setState({
                            FirstName:text
                        })
                    }}
                    value = {this.state.FirstName}/>

                    <TextInput style = {styles.textInput}
                    placeholder = 'Last Name'
                    keyboardType = 'text'
                    onChangeText = {(text)=>{
                        this.setState({
                            LastName : text
                        })
                    }}
                    value  = {this.state.LastName}/>

                    <TextInput style = {styles.textInput}
                    placeholder = 'Address'
                    multiline = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            Address : text
                        })
                    }}
                    value = {this.state.Address}/>

                    <View>
                        <Button title = 'Save' color = 'green' onPress = {()=>{this.updateUserDetails()}}/>
                    </View>

                </View>
            </View>
        )
    }
}