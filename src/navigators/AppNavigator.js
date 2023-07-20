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
import {FONT_FAMILY, FONT_SIZE, normalize} from '../utils/Fonts';
import {TAB_NAME} from '../utils/Constants';
import {Dashboard} from '../screens/Dashborad';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: UTIL_COLORS.PRIMARY,
        tabBarInactiveTintColor: UTIL_COLORS.GREY,
        tabBarIcon: ({focused, color, size}) => {
          const fillColor = focused ? UTIL_COLORS.PRIMARY : UTIL_COLORS.GREY;
          switch (route.name) {
            case TAB_NAME.HOME:
              return (
                <HomeIcon
                  fill={fillColor}
                  height={normalize(25)}
                  width={normalize(25)}
                />
              );

            case TAB_NAME.LEAGUES:
              return (
                <LeagueIcon
                  fill={fillColor}
                  height={normalize(25)}
                  width={normalize(25)}
                />
              );

            case TAB_NAME.RESEARCH:
              return (
                <ResearchIcon
                  fill={fillColor}
                  height={normalize(25)}
                  width={normalize(25)}
                />
              );

            case TAB_NAME.LEADERBOARD:
              return (
                <LeaderboardIcon
                  fill={fillColor}
                  height={normalize(25)}
                  width={normalize(25)}
                />
              );

            case TAB_NAME.PROFILE:
              return (
                <ProfileIcon
                  fill={fillColor}
                  height={normalize(25)}
                  width={normalize(25)}
                />
              );
          }
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.REGULAR,
          fontSize: FONT_SIZE.FONT10,
          color: UTIL_COLORS.SECONDARY_TEXT_COLOR,
        },
      })}>
      <Tab.Screen name={TAB_NAME.HOME} component={Home} />
      <Tab.Screen name={TAB_NAME.LEAGUES} component={Leagues} />
      <Tab.Screen name={TAB_NAME.RESEARCH} component={Research} />
      <Tab.Screen name={TAB_NAME.LEADERBOARD} component={Leaderboard} />
      <Tab.Screen name={TAB_NAME.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
