import React, { useState, useEffect } from "react";
import {
  watchPositionAsync,
  requestPermissionsAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState("");

  useEffect(() => {
    let suscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();

        if (!granted) {
          throw new Error("Location permission not granted");
        }
        suscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (er) {
        setErr(er);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (suscriber) {
        suscriber.remove();
      }
      suscriber = null;
    }

    return () => {
      if (suscriber) {
        suscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
