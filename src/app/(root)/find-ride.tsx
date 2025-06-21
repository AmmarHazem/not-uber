import { useStripe } from "@stripe/stripe-react-native";
import { FC, useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import RideComponent from "../../../src/components/RideComponent";

const FindRide: FC = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`/stripe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  useEffect(() => {
    const initializePaymentSheet = async () => {
      const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();
      const { error } = await initPaymentSheet({
        merchantDisplayName: "Akira, Inc.",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
      });
      if (!error) {
        setLoading(true);
      }
    };
    initializePaymentSheet();
  }, [initPaymentSheet]);

  const openPaymentSheet = async () => {
    setLoading(true);
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  return (
    <RideComponent title="Ride">
      <View className="my-3">
        <Text>FindRide</Text>
        <Button title="Pay Now" onPress={openPaymentSheet} />
      </View>
    </RideComponent>
  );
};

export default FindRide;
