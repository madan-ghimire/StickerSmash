import { Ionicons } from "@expo/vector-icons";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="happy-outline" size={80} color="#FFD700" />
      <Text style={styles.title}>StickerSmash 🎨</Text>

      <Text style={styles.description}>
        StickerSmash lets you add fun stickers and emojis to your photos with
        ease. Built using Expo React Native — simple, fast, and universal!
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Version: 1.0.0</Text>
        <Text style={styles.infoText}>Developed by: Madan Ghimire</Text>
      </View>

      <Pressable
        onPress={() => Linking.openURL("mailto:mail2madanghimire@email.com")}
        style={styles.contactButton}
      >
        <Ionicons name="mail-outline" size={20} color="#fff" />
        <Text style={styles.contactText}>Contact Support</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginTop: 12,
  },
  description: {
    color: "#ccc",
    textAlign: "center",
    marginVertical: 16,
    fontSize: 16,
    lineHeight: 22,
  },
  infoContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  infoText: {
    color: "#bbb",
    fontSize: 14,
    marginVertical: 2,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff5c5c",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 24,
  },
  contactText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
});
