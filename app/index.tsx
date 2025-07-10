import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />
      <ThemedText title={true} style={styles.title}>
        Sheflie App
      </ThemedText>
      <Spacer height={10} />
      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>
      <Spacer />
      <Link style={styles.link} href="/login">
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link style={styles.link} href="/register">
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link style={styles.link} href="/profile">
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: 125,
    height: 125,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
