import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { SafeAreaView } from "react-navigation";

import EditScreenInfo from "../components/EditScreenInfo";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import { Text, View } from "../components/Themed";

const StatsScreen = () => {
  const { startRecording, stopRecording } = useContext(LocationContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map />
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default StatsScreen;
