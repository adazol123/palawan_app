import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#49B477", "#0F4828"]}
      className="h-full w-full"
      start={{ x: 1, y: 0.0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="mx-16 justify-between h-full">
        {/** Header */}
        <View className=" justify-start items-center ">
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
        {/** Form Section */}
        <View>
          <TextInput
            placeholder="Email"
            className="py-3 px-4 rounded-md border border-emerald-200/40 mb-4 text-white"
            placeholderTextColor="#74B28D"
            clearTextOnFocus
          />
          <TextInput
            placeholder="Password"
            className="py-3 px-4 rounded-md border border-emerald-200/40 mb-1 text-white"
            placeholderTextColor="#74B28D"
            secureTextEntry
            passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
            clearTextOnFocus
          />
          <Pressable className="mb-8">
            <Text className="text-[#629e7b] text-xs">Forgot Password?</Text>
          </Pressable>

          <Pressable
            className="bg-white rounded-lg mb-2"
            onPress={() => navigation.navigate("getting_started")}
          >
            <Text className="text-emerald-700 my-4 mx-auto text-base">
              Continue
            </Text>
          </Pressable>
          <Pressable>
            <Text className="text-[#629e7b] text-xs">Terms and Conditions</Text>
          </Pressable>
        </View>
        {/** Footer */}
        <View className="mb-4 gap-2">
          <Pressable className="flex-row gap-1 justify-center py-3">
            <Text className="text-[#9FCAB1] text-sm">
              Don't have an account yet?
            </Text>
            <Text className="text-[#9FCAB1] font-bold underline underline-offset-2 text-sm">
              Sign up
            </Text>
          </Pressable>
          <Text className="text-center text-[#366d4d] text-xs">
            A member of Palawan Pawnshop Group
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
