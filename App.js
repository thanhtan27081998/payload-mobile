import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {host: null, data: null};
  }

  onChangeText = (text) => {
    this.setState({host: text});
  };

  onPress = async (method) => {
    const url = 'https://api-test.kobiton.com/v1/users/me';
    this.setState({data: null});
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTExNDUsImlhdCI6MTYwNzQ4NDM2MSwiZXhwIjoxNjEwMDc2MzYxfQ.ohEpMTJCYp1J0qL5vRL835L2nFFy695CJELo0q0Im9Q',
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
    // Alert.alert('Your data', JSON.stringify(data));
    this.setState({data});
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <ScrollView style={{flex: 1}}>
          <Text>
            {' '}
            {this.state.data
              ? JSON.stringify(this.state.data)
              : 'Your response will go here ...'}
          </Text>
        </ScrollView>
        <Button title="Call GET" onPress={() => this.onPress('GET')} />
      </SafeAreaView>
    );
  }
}
