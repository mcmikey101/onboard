import { StyleSheet, Text, View } from "react-native";

export default function Games() {
  return (
    <View
      style={styles.container}
    >
      <Text style={{fontSize: 120}}>games!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
