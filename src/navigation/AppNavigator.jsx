import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import ProductScreen from '../screens/ProductScreen';
import SparkGeneratorScreen from '../screens/SparkGeneratorScreen';
import InnerDirectionCheckScreen from '../screens/InnerDirectionCheckScreen';
import DeepStoriesScreen from '../screens/DeepStoriesScreen';
import QuoteRandomizerScreen from '../screens/QuoteRandomizerScreen';
import QuoteCardsScreen from '../screens/QuoteCardsScreen';
import SavedScreen from '../screens/SavedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

const tabs = [
  { name: 'SparkGenerator', component: SparkGeneratorScreen, icon: '⚡' },
  { name: 'DirectionCheck', component: InnerDirectionCheckScreen, icon: '🧭' },
  { name: 'DeepStories', component: DeepStoriesScreen, icon: '📖' },
  { name: 'QuoteRandom', component: QuoteRandomizerScreen, icon: '◈' },
  { name: 'QuoteCards', component: QuoteCardsScreen, icon: '▣' },
  { name: 'Saved', component: SavedScreen, icon: '☆' },
];

export default function AppNavigator() {
  const [route, setRoute] = useState(false);
    console.log('route===>', route);
    const [isLoading, setIsLoading] = useState(false);
  
    ///////// Route
    const Route = ({ isFatch }) => {
      //if (!completeLink) {
      //  // Показуємо тільки лоудери, поки acceptTransparency і completeLink не true
      //  //return null;
      //  return <SplashScreen />;
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
        <Tab.Navigator
          initialRouteName="SparkGenerator"
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              bottom: isSmall ? 12 : 24,
              left: isSmall ? 16 : 20,
              right: isSmall ? 16 : 20,
              height: isSmall ? 54 : 62,
              backgroundColor: '#110800',
              borderRadius: isSmall ? 16 : 20,
              borderWidth: 1,
              borderColor: 'rgba(196,113,58,0.4)',
              borderTopWidth: 1,
              paddingBottom: 0,
              paddingTop: 0,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              elevation: 20,
            },
            tabBarActiveTintColor: '#c4713a',
            tabBarInactiveTintColor: '#6a5545',
            tabBarShowLabel: false,
            tabBarItemStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          {tabs.map((t) => (
            <Tab.Screen
              key={t.name}
              name={t.name}
              component={t.component}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
                    <Text style={styles.iconText}>{t.icon}</Text>
                  </View>
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      );
    };
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(true);
      }, 5000);
    }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {!isLoading ? (
        <SplashScreen />
      ) : (
        <Route isFatch={route} />
      )}
      

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    width: isSmall ? 32 : 38,
    height: isSmall ? 32 : 38,
    borderRadius: isSmall ? 16 : 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
  iconWrapActive: {
    borderWidth: 2,
    borderColor: '#c4713a',
  },
  iconText: {
    fontSize: isSmall ? 16 : 20,
    color: '#f0e0d0',
  },
});