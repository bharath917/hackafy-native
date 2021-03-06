import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, ListView, Dimensions } from 'react-native';
import { HackafyNavbar, Gear, GalleryItem } from '~/components';
const { height } = Dimensions.get('window');

const Home = (props) => {
  return (
    <View>
      <HackafyNavbar title="Home"/>
      <ListView
        dataSource={props.dataSource}
        renderRow={props.renderRow}
        style={styles.listView}
        onEndReached={() => props.fetchPosts()}
      />
    </View>
  );
}

Home.propTypes = {
  dataSource: PropTypes.object.isRequired,
  renderRow: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const styles = {
  listView: {
    flex: 1,
    height: height - (44+48),
  }
}

export default Home;
