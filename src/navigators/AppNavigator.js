import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Leagues} from '../screens/Leagues';
import {Research} from '../screens/Research';
import {Leaderboard} from '../screens/Leaderboard';
import {UTIL_COLORS} from '../utils/Colors';
import {SvgUri} from 'react-native-svg';
import {
  HomeIcon,
  LeaderboardIcon,
  LeagueIcon,
  ProfileIcon,
  ResearchIcon,
} from '../assets';
import {FONT_FAMILY, FONT_SIZE} from '../utils/Fonts';

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: UTIL_COLORS.PRIMARY,
          tabBarInactiveTintColor: UTIL_COLORS.GREY,
          tabBarIcon: ({focused, color, size}) => {
            const fillColor = focused ? UTIL_COLORS.PRIMARY : UTIL_COLORS.GREY;
            switch (route.name) {
              case 'Home':
                return <HomeIcon fill={fillColor} height={25} width={25} />;

              case 'Leagues':
                return <LeagueIcon fill={fillColor} height={25} width={25} />;

              case 'Research':
                return <ResearchIcon fill={fillColor} height={25} width={25} />;

              case 'Leaderboard':
                return (
                  <LeaderboardIcon fill={fillColor} height={25} width={25} />
                );

              case 'Profile':
                return <ProfileIcon fill={fillColor} height={25} width={25} />;
            }
          },
          tabBarLabelStyle: {
            fontFamily: FONT_FAMILY.REGULAR,
            fontSize: FONT_SIZE.FONT10,
            color: UTIL_COLORS.SECONDARY_TEXT_COLOR,
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Leagues" component={Leagues} />
        <Tab.Screen name="Research" component={Research} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
