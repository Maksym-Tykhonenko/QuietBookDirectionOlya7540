import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import MainTabNavigator from './MainTabNavigator';
import { useOnboarding } from '../hooks/useOnboarding';
import { RootStackParamList } from './types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
 {/** const { loading, done, completeOnboarding } = useOnboarding();
  const [splashDone, setSplashDone] = useState(false);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.buttonOrange} />
      </View>
    );
  }
  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }
  if (!done) {
    return <OnboardingScreen onComplete={completeOnboarding} />;
  } */}
  const [route, setRoute] = useState(false);
  console.log('route===>', route);
  const [isLoading, setIsLoading] = useState(false);

  ///////// Route
  const Route = ({ isFatch }) => {
    //if (!completeLink) {
    //  // Показуємо тільки лоудери, поки acceptTransparency і completeLink не true
    //  //return null;
    //  return <Storiesandlghstravlload />;
    //}

    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{
              //responseToPushPermition,
              //product: finalLink,
              //timeStampUserId: timeStampUserId,
              //customUserAgent: customUserAgent,
              //uid: uid,
            }}
            name="ProductScreen"
            component={ProductScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
          <Stack.Screen
            name="Storiesandlghstravlonb"
            component={Storiesandlghstravlonb}
          />
          <Stack.Screen
            name="Storiesandlghstravtabs"
            component={Storiesandlghstravtabs}
          />
        </Stack.Navigator>
    );
  };

  //useEffect(() => {
  //  setTimeout(() => {
  //    setIsLoading(true);
  //  }, 5000);
  //}, []);

  return (
    <NavigationContainer>

      
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
    
      

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: Colors.bgDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});