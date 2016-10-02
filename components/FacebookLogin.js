import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Exponent from 'exponent';

export class FacebookLogin extends React.Component {
  async logIn() {
    const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
      '1590369664592285', {
        permissions: ['public_profile', 'email', 'user_friends'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
          Alert.alert(
            'Logged in!',
            `Hi ${(await response.json()).name}!`,
          );
        }
      }
  render() {
    return (
      <TouchableOpacity onPress={this.logIn}>
        <View style={styles.rowcontainer}>
          <Text>Log In</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowcontainer: {
    flex: 1,
  },
});
