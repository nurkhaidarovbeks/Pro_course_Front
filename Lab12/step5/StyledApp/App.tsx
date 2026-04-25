import React from "react";
import { Alert, Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GridLayout, Card } from "./src/components/GridLayout";
import {
  ResponsiveContainer,
  ResponsiveHeader,
} from "./src/components/ResponsiveHeader";
import {
  AdaptiveLayout,
  FeatureCard,
  ResponsiveImage,
  StatsRow,
} from "./src/components/AdaptiveLayout";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.app}>
        <ResponsiveHeader
          title="Responsive Layouts"
          leftAction={{
            icon: "☰",
            onPress: () => Alert.alert("Menu", "Navigation menu pressed"),
          }}
          rightAction={{
            icon: "⚙️",
            onPress: () => Alert.alert("Settings", "Settings pressed"),
          }}
        />

        <ResponsiveContainer>
          <AdaptiveLayout
            content={
              <>
                <Text style={styles.title}>Project 2 Step 5</Text>

                <Text style={styles.subtitle}>
                  Styling and responsive layouts with Flexbox, Safe Areas, and
                  useWindowDimensions.
                </Text>

                <StatsRow
                  stats={[
                    {
                      label: "Screens",
                      value: "3",
                    },
                    {
                      label: "Layouts",
                      value: "Flex",
                    },
                    {
                      label: "Safe Area",
                      value: "Yes",
                    },
                  ]}
                />

                <ResponsiveImage />

                <FeatureCard
                  icon="📱"
                  title="Phone Layout"
                  description="On phones, content is displayed in a single-column layout with proper spacing."
                  variant="primary"
                />

                <FeatureCard
                  icon="💻"
                  title="Tablet Layout"
                  description="On tablets, content automatically adapts to a two-column responsive layout."
                  variant="secondary"
                />

                <FeatureCard
                  icon="🧭"
                  title="Safe Area Header"
                  description="The header handles notches, status bars, and platform-specific spacing."
                  variant="accent"
                />

                <Text style={styles.sectionTitle}>Responsive Grid</Text>

                <GridLayout columns={2} spacing={12}>
                  <Card title="Flexbox" subtitle="Layout system">
                    <Text style={styles.cardText}>
                      Uses flexDirection, justifyContent, alignItems and wrap.
                    </Text>
                  </Card>

                  <Card title="SafeArea" subtitle="Device support">
                    <Text style={styles.cardText}>
                      Handles notches and home indicators.
                    </Text>
                  </Card>

                  <Card title="Responsive" subtitle="Adaptive design">
                    <Text style={styles.cardText}>
                      Uses screen width and height to adapt the layout.
                    </Text>
                  </Card>

                  <Card title="Platform" subtitle="iOS / Android">
                    <Text style={styles.cardText}>
                      Uses platform-specific styles where needed.
                    </Text>
                  </Card>
                </GridLayout>
              </>
            }
            footer={
              <Text style={styles.footerText}>
                Built with React Native, Expo, StyleSheet and Flexbox.
              </Text>
            }
          />
        </ResponsiveContainer>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 13,
    color: "#666",
    lineHeight: 19,
  },
  footerText: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
});