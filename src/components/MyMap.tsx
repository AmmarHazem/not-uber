import * as Location from "expo-location";
import { FC, useEffect } from "react";
import MapView from "react-native-maps";

const MyMap: FC = () => {
  useEffect(() => {
    (async () => {
      const permissionResponse = await Location.requestForegroundPermissionsAsync();
      console.log("Location permission response:", permissionResponse);
      if (permissionResponse.status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      console.log("Current location:", location);
    })();
  }, []);

  return <MapView style={{ width: "100%", height: 300, borderRadius: 16 }} showsUserLocation={true} />;
};

export default MyMap;
