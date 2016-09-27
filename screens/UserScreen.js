import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHightlight,
} from 'react-native';

export default class UserScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Your Drops'
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nestedTextStyle: {
    flex: 1,
  },
  nestedViewStyle: {
    flex: 1,
  },
});
