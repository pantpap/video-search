import {View, Text, Image} from "react-native";
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`w-6 h-6 ${focused ? 't-primary' : 't-gray-500'}`}
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false
      }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon icon={icons.home} color={color} name='Home' focused={focused}/>
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;
