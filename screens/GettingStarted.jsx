import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
const GettingStarted = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#49B477", "#0F4828"]}
      className="h-full w-full"
      start={{ x: 1, y: 0.0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style="inverted" />
      <View className="mx-16 justify-between h-full" style={{ height: "100%" }}>
        <View className=" justify-start items-center mt-20">
          <Image
            source={require("../assets/palawan-pay-logo.png")}
            className="w-16 h-[60px] rounded-lg"
          />
          <Text className="text-white text-[32px] font-bold mt-6">
            Palawan Pay
          </Text>
          <Text className="max-w-[170px] text-center text-[#86c29f] text-xs">
            Regulated by Banko Sentral ng Pilipinas
          </Text>
        </View>

        <View className="flex-1 justify-center">
          <Pressable
            className="bg-white rounded-lg"
            onPress={() => navigation.navigate("login")}
          >
            <Text className="text-emerald-700 my-4 mx-auto text-base">
              Login
            </Text>
          </Pressable>
          <Pressable className="mt-4">
            <Text className="text-white my-4 mx-auto text-base">
              Create an account
            </Text>
          </Pressable>
        </View>

        <View className="mb-6 items-center ">
          <Text className="text-[#498A64] text-xs">
            A member of Palawan Pawnshop Group
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default GettingStarted;
