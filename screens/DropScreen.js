import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHightlight,
  TextInput,
} from 'react-native';

export default class DropScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Drop'
    },
  }

  constructor(props){
    super(props);
    this.state = {
      whattext: 'What do you want to do?',
      wheretext: 'Where do you want to go?'
    };
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(whattext) => {
              this.setState({whattext});
            }}
            value={this.state.whattext}
            />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(wheretext) => {
              this.setState({wheretext});
            }}
            value={this.state.wheretext}
            />
        </View>
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
