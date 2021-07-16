import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { getManufacturerSync } from 'react-native-device-info';

export function enableAndroidFontFix() {
  if (Platform.OS !== 'android') {
    return;
  }

  let manufacturer = getManufacturerSync();

  let styles;

  switch (manufacturer) {
    case 'OnePlus':
      styles = StyleSheet.create({
        androidFontFixFontFamily: {
          fontFamily: 'Slate',
          // fontFamily: 'Roboto',
        },
      });
      break;

    case 'Oppo':
      styles = StyleSheet.create({
        androidFontFixFontFamily: {
          // fontFamily: 'Oppo Sans', // not sure of the name of the font
          fontFamily: 'Roboto',
        },
      });
      break;

    default:
      return;
  }

  let __render = Text.render;
  Text.render = function (...args) {
    let origin = __render.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.androidFontFixFontFamily, origin.props.style],
    });
  };
}