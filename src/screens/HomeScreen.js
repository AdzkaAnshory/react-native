import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import {
  AppStyles,
} from "../AppStyles";
import { Configuration } from "../Configuration";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome {this.props.user.email}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: Configuration.home.listing_item.offset
  },
  title: {
    fontWeight: "bold",
    color: AppStyles.color.title,
    fontSize: 25
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5
  }
});

export default HomeScreen;
