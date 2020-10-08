import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
  return (
    <>
      <Text styles={{ fontSize: 48 }}>TrackDetailScreen</Text>
      <Button
        title="Go to Track List"
        onPress={() => navigation.navigate("TrackList")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
