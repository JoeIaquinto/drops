import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import { MonoText } from '../components/StyledText';
import { FeedRow } from '../components/FeedRow';
import { FacebookLogin } from '../components/FacebookLogin';

import data from '../dropdata.json'
export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Drizzle'
    },
  }
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows(data))
    };
  }
  // TODO: Add button header
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderHeader={this._renderHeader}
        />
      </View>
    );
  }
  _renderHeader(){
    return (
      <View style={styles.rowcontainer}>
        <FacebookLogin style={styles.feedcontainer} />
      </View>
    );
  }

  _renderRow(rowData){
    return (
      <View style={styles.rowcontainer}>
        <FeedRow style={styles.feedcontainer} {...rowData} />
      </View>
    );
  }
  _genRows(data){
    var dataBlob = []
    for (var i=0; i<data.users["facebookidididid"].drops.length; ++i) {
      var dropKey = data.users["facebookidididid"].drops[i];
      for (var j=0; j<data.drops[dropKey].feed.length; ++j) {
        var row = {};
        row.key = (dropKey);
        row.name = (data.drops[dropKey].name);
        row.loc = (data.drops[dropKey].location[0].name);
        row.time = (data.drops[dropKey].time.startTimes[0]);
        row.people = Object.keys(data.drops[dropKey].people).length;
        row.feed = data.drops[dropKey].feed[j];
        dataBlob.push(row);
      }
    }
    return dataBlob;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 34.5,
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
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
  },
});
