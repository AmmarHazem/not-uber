import { FC } from "react";
import { Text, View } from "react-native";
import RideComponent from "../../../src/components/RideComponent";

const FindRide: FC = () => {
  return (
    <RideComponent title="Ride">
      <View className="my-3">
        <Text>FindRide</Text>
      </View>
    </RideComponent>
  );
};

export default FindRide;
