import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useIsFocused } from "@react-navigation/native";

export default (callback: any) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    const startWatching = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 500,
            distanceInterval: 1,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    startWatching();
  }, [callback]);

  return [err];
};
