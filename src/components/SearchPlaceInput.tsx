import { FC } from "react";
import { Pressable, View } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useRouter } from "expo-router";
import { IconSymbol } from "../../app-example/components/ui/IconSymbol";

const SearchPlaceInput: FC = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.push("/find-ride");
      }}
    >
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
          height: 50,
        }}
      >
        <IconSymbol name="magnifyingglass" color={"black"} />
        {/* <GooglePlacesAutocomplete
        predefinedPlaces={[]}
        placeholder={"Search address"}
        query={{
          key: "AIzaSyCB5m-HfJAYydxdTCuju_0lzzO_WRRvQ3Q",
          language: "en",
        }}
      /> */}
      </View>
    </Pressable>
  );
};

export default SearchPlaceInput;
