import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {host: null, data: null};
  }

  onChangeText = (text) => {
    this.setState({host: text});
  };

  onPress = async (method) => {
    const url = `http://${this.state.host}:1234`;
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:
        method === 'GET'
          ? null
          : JSON.stringify({
              firstParam: 'firstParam',
              secondParam: 'secParam',
            }),
    });
    const data = await response.json();
    this.setState({data});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder="Enter your host"
          style={{
            width: 200,
            borderRadius: 8,
            borderColor: '#000000',
            padding: 4,
            borderWidth: 1,
          }}
        />
        <Button title="Call GET" onPress={() => this.onPress('GET')} />
        <Button title="Call POST" onPress={() => this.onPress('POST')} />
        <Text>
          {' '}
          {this.state.data
            ? JSON.stringify(this.state.data)
            : 'Your response will go here ...'}
        </Text>
      </View>
    );
  }
}
