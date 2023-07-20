import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {styles} from './styles';
import {
  DownArrowWhiteIcon,
  InformationIcon,
  MountainIcon,
  SliderIcon,
  UpArrowWhiteIcon,
  UserIcon,
  WatchIcon,
} from '../../assets';
import {normalize} from '../../utils/Fonts';
import {UTIL_COLORS} from '../../utils/Colors';
import {prizeData} from '../../utils/ConstData';
import BottomSheet from '@gorhom/bottom-sheet';

export const Dashboard = ({navigation}) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <View style={styles.darkBGColor}>
      <Text style={[styles.fontRegular, {marginLeft: 20}]}>
        {'Today’s Games'}
      </Text>

      <ImageBackground
        source={require('../../assets/images/CoinBackground.png')}
        style={styles.mainContainer}>
        <View style={{padding: 15}}>
          <View style={styles.centerAlign}>
            <View style={styles.upperView}>
              <Text style={[styles.violateText, {paddingRight: 10}]}>
                {'UNDER OR OVER'}
              </Text>
              <InformationIcon height={normalize(13)} width={normalize(13)} />
            </View>
            <View style={styles.upperView}>
              <Text style={styles.violateText}>{'Starting in '}</Text>
              <WatchIcon height={normalize(14)} width={normalize(14)} />
              <Text style={styles.violateText}>{' 03:23:12'}</Text>
            </View>
          </View>
          <View style={styles.centerIconStyle}>
            <Text style={styles.violateText}>
              {'Bitcoin price will be under '}
            </Text>
            <Text style={[styles.violateText, {color: UTIL_COLORS.BG_COLOR}]}>
              {'$24,524 at 7 a ET on 22nd Jan’21'}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.centerContainerStyle}>
        <View style={{padding: 15}}>
          <View style={styles.rowStyle}>
            {prizeData.map((item, index) => {
              return (
                <View key={index} style={styles.rowStylePadding}>
                  <Text style={styles.tabContainer}>{item.title}</Text>
                  <Text style={styles.semiBold}>{item.value}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.contStyle}>{'What’s your prediction?'}</Text>

          <View style={styles.rowMainStyle}>
            <TouchableOpacity style={styles.rowStyleContainer}>
              <DownArrowWhiteIcon
                height={normalize(11)}
                width={normalize(11)}
              />
              <Text style={[styles.violateText, styles.line]}>{'Under'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowStyleContainer}>
              <UpArrowWhiteIcon height={normalize(11)} width={normalize(11)} />
              <Text style={[styles.violateText, styles.line]}>{'Over'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lineHorizontal}>
          <View style={styles.rowSpace}>
            <View style={styles.centerRow}>
              <UserIcon height={normalize(13)} width={normalize(13)} />
              <Text style={styles.centerStyle}>{'355 Players'}</Text>
            </View>
            <View style={styles.centerRow}>
              <MountainIcon height={normalize(14)} width={normalize(14)} />
              <Text style={styles.tinyStyle}>{'View Chart'}</Text>
            </View>
          </View>

          <View style={styles.paddingCenter}>
            <SliderIcon height={normalize(10)} width={normalize(270)} />
          </View>

          <View style={styles.rowSpaceStyle}>
            <Text style={styles.fontMediumStyle}>{'232 predicted under'}</Text>
            <Text style={styles.fontMediumStyle}>{'123 predicted over'}</Text>
          </View>
        </View>
      </View>

      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={styles.centerAlignStyle}>
          <Text style={[styles.fontRegular, {marginLeft: 20}]}>
            {'Your Prediction is Under'}
          </Text>
          <Text style={[styles.fontRegular, {marginLeft: 20}]}>
            {'Entry tickets'}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
          style={styles.circleView}>
          <Text style={[styles.violateText, styles.lineTiny]}>
            {'Submit my prediction'}
          </Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};
