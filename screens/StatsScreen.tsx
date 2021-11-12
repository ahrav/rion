import React, { useContext } from "react";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import { Input, Button } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { SafeAreaView } from "react-navigation";

import EditScreenInfo from "../components/EditScreenInfo";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import { Text, View } from "../components/Themed";

const StatsScreen = () => {
  const {
    state: { topSpeed, avgSpeed, distance },
  } = useContext(LocationContext)
  // const { startRecording, stopRecording } = useContext(LocationContext);
  const escData = [
    { name: "escTempMax", value: "87", shortName: "°F" },
    { name: "escAmpMax", value: "221", shortName: "A" },
    { name: "motorTempMax", value: "98", shortName: "°F" },
    { name: "motorAmpMax", value: "339", shortName: "A" },
  ];
  const rideData = [
    { name: "topSpeed", value: topSpeed, shortName: "MPH" },
    { name: "avgSpeed", value: avgSpeed, shortName: "MPH" },
    { name: "distance", value: distance.toFixed(1), shortName: "Miles" },
    { name: "Wh/Mi", value: "49" },
    { name: "duration", value: "22:10" },
  ];
  const numColumns = 2;

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
      <Map />
      {/* <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} /> */}
      <View
        style={{ flex: 2, flexDirection: "row", backgroundColor: "yellow" }}
      >
        <View
          style={{
            backgroundColor: "blue",
            alignItems: "center",
            width: "50%",
          }}
        >
          <View
                    style={{
                      height: Dimensions.get("window").width / 3,
                      alignItems: "center",
                      margin: 2,
                      justifyContent: "center",
                      width: Dimensions.get("window").width / 2,
                    }}
                  >
                    <Text>{rideData[0].name}</Text>
                    <Text>{rideData[0].value}</Text>
                    <Text>{rideData[0].shortName}</Text>
                  </View>
            <FlatList
              data={rideData.slice(1)}
              style={{ flex: 1 }}
              keyExtractor={(item) => item.name}
              numColumns={numColumns}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      height: Dimensions.get("window").width / 6.25,
                      alignItems: "center",
                      margin: 2,
                      justifyContent: "center",
                      width: Dimensions.get("window").width / 4,
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text>{item.value}</Text>
                    <Text>{item.shortName && item.shortName}</Text>
                  </View>
                );
              }}
            />
        </View>
        <View
          style={{
            backgroundColor: "green",
            alignItems: "center",
            width: "50%",
          }}
        >
          <FlatList
            data={escData}
            style={{ flex: 1 }}
            keyExtractor={(item) => item.name}
            numColumns={numColumns}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    height: Dimensions.get("window").width / 3,
                    alignItems: "center",
                    margin: 2,
                    justifyContent: "center",
                    width: Dimensions.get("window").width / 4,
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.value}</Text>
                  <Text>{item.shortName}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default StatsScreen;
