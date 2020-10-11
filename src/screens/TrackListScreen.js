import React, { useContext } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Chevron color="white" />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "Track List",
  };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
