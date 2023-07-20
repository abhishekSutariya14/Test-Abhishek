import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

export const FONT_FAMILY = {
  REGULAR: 'Montserrat-Regular',
  BOLD: 'Montserrat-Bold',
  ITALIC: 'Montserrat-Italic',
  LIGHT: 'Montserrat-Light',
  MEDIUM: 'Montserrat-Medium',
  SEMI_BOLD: 'Montserrat-SemiBold',
};

export const normalize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const FONT_SIZE = {
  FONT10: normalize(10),
  FONT11: normalize(11),
  FONT12: normalize(12),
  FONT13: normalize(13),
  FONT14: normalize(14),
  FONT16: normalize(16),
  FONT18: normalize(18),
};
