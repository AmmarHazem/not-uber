import * as Location from "expo-location";
import { FC, useEffect } from "react";
import MapView from "react-native-maps";

const MyMap: FC = () => {
  useEffect(() => {
    (async () => {
      const locationResponse = await Location.requestForegroundPermissionsAsync();
      console.log("Location permission response:", locationResponse);
    })();
  }, []);

  return <MapView style={{ width: "100%", height: 300, borderRadius: 16 }} showsUserLocation={true} />;
};

export default MyMap;
