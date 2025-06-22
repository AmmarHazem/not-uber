import * as Location from "expo-location";
import { FC, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { icons } from "../constants";
import { drivers } from "../lib/drivers";
import { generateMarkersFromData } from "../lib/map";

const MyMap: FC<MyMapProps> = ({ style }) => {
  const [loading, setLoading] = useState(true);
  const [initialRegion, setInitialRegion] = useState<Region>();

  useEffect(() => {
    (async () => {
      const permissionResponse = await Location.requestForegroundPermissionsAsync();
      // console.log("Location permission response:", permissionResponse);
      if (permissionResponse.status !== "granted") {
        console.log("Permission to access location was denied");
        setLoading(false);
        return;
      }
      const location = await Location.getCurrentPositionAsync({ accuracy: Location.LocationAccuracy.High });
      // console.log("Current location:", location);
      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setLoading(false);
      // const addresses = await Location.reverseGeocodeAsync({
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // });
    })();
  }, []);

  const mapDriverMarkers = useMemo(() => {
    return generateMarkersFromData({
      data: drivers,
      userLatitude: initialRegion?.latitude ?? 0,
      userLongitude: initialRegion?.longitude ?? 0,
    });
  }, [initialRegion?.latitude, initialRegion?.longitude]);

  if (loading) {
    return <ActivityIndicator />;
  }

  console.log("process.env.GOOGLE_MAPS_API_KEY", process.env.GOOGLE_MAPS_API_KEY);

  return (
    <MapView
      zoomControlEnabled={true}
      zoomEnabled={true}
      initialRegion={initialRegion}
      style={[{ width: "100%", height: 300, borderRadius: 16 }, style]}
      showsUserLocation={true}
    >
      {mapDriverMarkers.map((driver) => {
        return (
          <Marker
            key={driver.id}
            coordinate={{ latitude: driver.latitude, longitude: driver.longitude }}
            title={driver.title}
            image={icons.selectedMarker}
          />
        );
      })}
      <MapViewDirections
        apikey={process.env.GOOGLE_MAPS_API_KEY ?? ""}
        strokeColor="#0286ff"
        strokeWidth={3}
        origin={{
          latitude: mapDriverMarkers[0].latitude,
          longitude: mapDriverMarkers[0].longitude,
        }}
        destination={{
          latitude: mapDriverMarkers[1].latitude,
          longitude: mapDriverMarkers[1].longitude,
        }}
      />
    </MapView>
  );
};

interface MyMapProps {
  style?: StyleProp<ViewStyle>;
}

export default MyMap;
