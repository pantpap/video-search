import {View, Text, ScrollView, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from "../../constants";
import FormField from "../../components/FormField";
import {useState} from "react";
import CustomButton from "../../components/CustomButton";
import {Link} from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const onSubmit = () => {
    console.log('submitting form...', form);
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[75vh] px-4 my-6">
          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">Log in to Nephos</Text>
          
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(value) => setForm({...form, email: value})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(value) => setForm({...form, password: value})}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <CustomButton
            title={"Sign In"}
            handlePress={onSubmit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />
          
          <View className={'justify-center pt-5 flex-row gap-2'}>
            <Text className={'text-lg text-gray-100 font-pregular'}>
              Don't have an account?
            </Text>
            <Link
              href={'/sign-up'}
              className={'text-lg text-secondary font-psemibold'}
            >Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;
