import { FC } from "react";
import { Text } from "react-native";
import RideComponent from "../../../src/components/RideComponent";

const ConfirmRideScreen: FC = () => {
  return (
    <RideComponent title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <Text>ConfirmRideScreen</Text>
      {/* <FlatList
        data={drivers}
        keyExtractor={(item) => item.driver_id.toString()}
        renderItem={({ item }) => {
          return <DriverCard driver={item} />;
        }}
      /> */}
    </RideComponent>
  );
};

export default ConfirmRideScreen;
