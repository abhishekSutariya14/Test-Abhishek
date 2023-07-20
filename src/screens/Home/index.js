import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  DownArrowIcon,
  LogoIcon,
  LogoutIcon,
  MessageIcon,
  PickIcon,
  PrimaryIcon,
  StarIcon,
  UpArrowIcon,
  UserImage,
} from '../../assets';
import {FONT_FAMILY, normalize} from '../../utils/Fonts';
import {UTIL_COLORS} from '../../utils/Colors';
import {listData} from '../../utils/ConstData';
import {styles} from './styles';
import { TopTabBarComponent } from '../../components/TopTabBarComponent';

export const Home = () => {

  const renderList = ({item, index}) => {
    return (
      <View key={index.toString()} style={styles.containerItem}>
        <View style={styles.containerItemStyle}>
          <View style={styles.containerItem}>
            <LogoIcon height={normalize(60)} width={normalize(60)} />
          </View>
          <View style={styles.itemRightStyle}>
            <Text style={styles.textBoldStyle}>
              {item.title}
              <Text style={styles.textMediumStyle}>{` ${item.subTitle}`}</Text>
            </Text>
            <Text style={styles.mediumFont}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.darkBGColor}>
        <View style={styles.padding15}>
          <View style={styles.mainContainer}>
            <PrimaryIcon height={normalize(30)} width={normalize(30)} />
            <Text style={styles.fontRegular}>{'Profile'}</Text>
            <MessageIcon height={normalize(30)} width={normalize(30)} />
          </View>

          <View style={styles.centerAlign}>
            <View>
              <UserImage height={normalize(75)} width={normalize(75)} />
              <TouchableOpacity style={styles.upperView}>
                <PickIcon height={normalize(24)} width={normalize(24)} />
              </TouchableOpacity>
            </View>
            <Text style={styles.regularText}>{'Jina Simons'}</Text>
            <Text style={styles.regularText}>{'6000 Pts'}</Text>
            <Text style={styles.regularText}>
              {
                'I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!'
              }
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <LogoutIcon height={normalize(20)} width={normalize(20)} />
            <Text style={[styles.regularTextCenter, styles.topSpace]}>{'Logout'}</Text>
          </View>

          <View style={styles.borderView}>
            <View style={styles.centerIconStyle}>
              <StarIcon height={normalize(26)} width={normalize(30)} />
            </View>
            <View style={styles.centerContainerStyle}>
              <View style={styles.rowStyle}>
                <View style={styles.flexHalf}>
                  <Text style={styles.mediumTextStyle}>{'Under or Over'}</Text>
                  <View style={styles.rowStylePadding}>
                    <UpArrowIcon height={normalize(32)} width={normalize(32)} />
                    <Text style={styles.boldTextStyle}>{'81%'}</Text>
                  </View>
                </View>

                <View style={styles.flexHalf}>
                  <Text style={styles.mediumTextStyle}>{'Top 5'}</Text>
                  <View style={styles.rowStylePadding}>
                    <DownArrowIcon height={normalize(32)} width={normalize(32)} />
                    <Text style={styles.boldTextStyle}>{'-51%'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />

        <TopTabBarComponent />
      </View>
    );
  };

  return (
    <FlatList
      data={listData}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={renderList}
      contentContainerStyle={styles.listContainerStyle}
      style={styles.bgColor}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
