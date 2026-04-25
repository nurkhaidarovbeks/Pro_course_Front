import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ProfileCard } from "./src/components/ProfileCard";
import { ContactSection } from "./src/components/ContactSection";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile App</Text>
          <Text style={styles.headerSubtitle}>
            React Native Core Components Demo
          </Text>
        </View>

        <ProfileCard
          name="Beksultan Nurkhaidarov"
          role="Frontend Developer"
          avatar="https://placehold.co/100x100/png?text=BN"
          bio="I am learning React Native with Expo. This screen uses View, Text, Image, TextInput, TouchableOpacity, StyleSheet, and Flexbox."
        />

        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    paddingVertical: 20,
  },
  header: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
});