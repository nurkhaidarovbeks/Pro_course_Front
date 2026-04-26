import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

interface FormState {
  name: string;
  email: string;
  password: string;
}

interface ErrorState {
  email: string;
  password: string;
}

export default function RegistrationScreen() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    email: "",
    password: "",
  });

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setForm((currentForm) => {
      return {
        ...currentForm,
        email: text,
      };
    });

    if (!emailRegex.test(text) && text.length > 0) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          email: "Invalid Student Email format",
        };
      });
    } else {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          email: "",
        };
      });
    }
  };

  const validatePassword = (text: string) => {
    setForm((currentForm) => {
      return {
        ...currentForm,
        password: text,
      };
    });

    if (text.length > 0 && text.length < 8) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          password: "Password must be at least 8 characters",
        };
      });
    } else {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          password: "",
        };
      });
    }
  };

  const isFormInvalid =
    !form.name.trim() ||
    !form.email.trim() ||
    !form.password.trim() ||
    errors.email !== "" ||
    errors.password !== "";

  const handleRegister = () => {
    Keyboard.dismiss();

    if (!isFormInvalid) {
      console.log("Registration Payload:", form);

      Alert.alert("Success", "Account created successfully!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerArea}>
            <Text style={styles.title}>Welcome Abroad</Text>
            <Text style={styles.subtitle}>Enter your details to register</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. Askar Almatov"
              placeholderTextColor="#999"
              value={form.name}
              onChangeText={(text) => {
                setForm((currentForm) => {
                  return {
                    ...currentForm,
                    name: text,
                  };
                });
              }}
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>ALMAU Email</Text>

            <TextInput
              style={[styles.input, errors.email ? styles.inputError : null]}
              placeholder="id2024@almau.edu.kz"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={form.email}
              onChangeText={validateEmail}
              returnKeyType="next"
            />

            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Secure Password</Text>

            <TextInput
              style={[styles.input, errors.password ? styles.inputError : null]}
              placeholder="Min 8 characters"
              placeholderTextColor="#999"
              secureTextEntry={true}
              returnKeyType="done"
              value={form.password}
              onChangeText={validatePassword}
            />

            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[styles.btn, isFormInvalid ? styles.btnDisabled : null]}
            onPress={handleRegister}
            disabled={isFormInvalid}
          >
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 30,
    justifyContent: "center",
  },
  headerArea: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
  },
  input: {
    height: 55,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  inputError: {
    borderColor: "#dc3545",
    backgroundColor: "#fff8f8",
  },
  errorText: {
    color: "#dc3545",
    fontSize: 12,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#0066cc",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#0066cc",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  btnDisabled: {
    backgroundColor: "#a0c4e4",
    shadowOpacity: 0,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});