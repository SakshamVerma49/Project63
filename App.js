import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localDb';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      chunks: []
    };
  } 
  render() {
    return (
      <View style={styles.container}>
          <Header
            backgroundColor={'purple'}
            centerComponent={{
              text: 'Pocket Dictionary',
              style: { color: '#fff', fontSize: 20 },
            }}
          />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text style={styles.buttonText}>search</Text>
        </TouchableOpacity>
        <View>
        {this.state.chunks.map(item=>{
          return(
            <Text style={styles.displayText}>{item}</Text>
          );
        })}
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 70,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  styleImage: {
    width: 100,
    height: 100,
    marginLeft: 120,
  }
});