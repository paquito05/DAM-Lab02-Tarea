import React, { Component} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default class App extends Component{

  constructor (props){
    super(props);
    this.state = {
      textValue: '',
      valor2: '',
    };
  }

  changeTextInput = text =>{
    this.setState({textValue: text});
  };

  segundoValor = password => {
    this.setState({valor2: password});
  };

  render(){
    return (
      <View style={styles.container}>
        
        <View style={styles.image}>
        <Image source={require('./img/textil-satoru-gojo-logo.png')}/> 
        </View>
        <View style={styles.text}>
          <Text>Iniciar Sesión</Text>
        </View>
        <View style={styles.box2}>
        <Text style={{paddingBottom: 5,}}>Usuario</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
          onChangeText = {text => this.changeTextInput(text)}
          value={this.state.textValue}/></View>
        <View style={styles.box2}>
        <Text style={{paddingBottom: 5,}}>Contraseña</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
          onChangeText = {password => this.segundoValor(password)}
          value={this.state.valor2}
        /></View>

        <TouchableOpacity style={styles.button}>
          <Text> Ingresar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 45,
  },

  text: {
    alignItems: 'center',
    padding: 10,

  },

  image: {
    alignItems: 'center',
    padding: 30,
  },

  button: {
    top: 8,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginStart:20,
    marginEnd:20,
  },

  box2:{
    padding: 3,
  },


});