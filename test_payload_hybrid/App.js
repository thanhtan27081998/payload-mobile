/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {WebView} from 'react-native-webview';

const WIDTH = Dimensions.get('window').width;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: null, url: null};
  }

  onChangeText = (text) => {
    this.setState({text});
  };

  onPress = () => {
    this.setState({url: null});
    this.setState({url: this.state.text});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TextInput
          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={this.onChangeText}
          style={{width: WIDTH, padding: 10}}
          placeholder="Enter your URL here"
        />
        <Button onPress={this.onPress} title="Go" />
        {this.state.url ? (
          <WebView
            style={{flex: 1}}
            source={{uri: `https://${this.state.url}`}}
          />
        ) : (
          <ActivityIndicator size="small" style={{flex: 1}} />
        )}
      </SafeAreaView>
    );
  }
}

export default App;
