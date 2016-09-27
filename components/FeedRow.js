import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export class FeedRow extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.feedcontainer}>
          <Text style={styles.feedcontainer}>{this.props.feed.uId}</Text>
          <Text style={styles.feedcontainer}>{this.props.feed.act}</Text>
          <Text style={styles.feedcontainer}>{this.props.name}</Text>
        </View>
        <View style={styles.feedcontainer}>
          <Text style={styles.feedcontainer}>At {this.props.loc}</Text>
          <Text style={styles.feedcontainer}>{this.props.time}</Text>
        <Text style={styles.feedcontainer}>{this.props.people} Guests</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowcontainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  feedcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  dropcontainer: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});