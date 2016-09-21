import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Components } from 'exponent';


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <Components.MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: 42.729686,
                longitude: -73.679361,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
