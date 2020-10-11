import "../_mockLocation";

import React, { useCallback, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { withNavigationFocus, SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import {FontAwesome5} from "@expo/vector-icons"

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  console.log(err);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map />
      {err ? <Text>Please enable the location</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon:  <FontAwesome5 name="route" size={24} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
