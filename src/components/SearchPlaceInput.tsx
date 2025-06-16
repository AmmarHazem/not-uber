import { FC } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { IconSymbol } from "../../app-example/components/ui/IconSymbol";

const SearchPlaceInput: FC = () => {
  console.log("process.env.GOOGLE_MAPS_API_KEY", process.env.GOOGLE_MAPS_API_KEY);

  return (
    <View
      style={{
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
        gap: 8,
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 32,
      }}
    >
      <IconSymbol name="magnifyingglass" color={"black"} />
      <GooglePlacesAutocomplete
        predefinedPlaces={[]}
        placeholder={"Search address"}
        query={{
          key: "AIzaSyCB5m-HfJAYydxdTCuju_0lzzO_WRRvQ3Q",
          language: "en",
        }}
      />
    </View>
  );
};

export default SearchPlaceInput;
