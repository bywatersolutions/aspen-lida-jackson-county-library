import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LibrarySystemContext, ThemeContext } from '../context/initialContext';
import { ChevronLeftIcon, CloseIcon, Pressable, Icon, HStack, VStack } from 'native-base';
import { View, Image, StyleSheet, Text } from '@gluestack-ui/themed';
import { Platform } from 'react-native';

const HeaderLogoBar = (props) => {
     const { theme } = React.useContext(ThemeContext);
     const { library } = React.useContext(LibrarySystemContext);
     if (library.headerLogoApp){
          const localBrandingLogoUri = library.headerLogoApp;
          //console.log(library.displayName);
          return (
               <HStack >
                     <Image
                        source={{uri: localBrandingLogoUri}} size={50} alt={library.displayName} placeholder=""  style={{ maxWidth:'100%', width: '100%', height:50, backgroundColor:theme['colors']['primary']['base'] }}
                      />
               </HStack>
          );
     }else{
          return null;
     }
};

let topPadding = 7;
if (Platform.OS === 'android') {
     topPadding = 3;
}

export default function TitleWithLogo(props) {
     const { theme } = React.useContext(ThemeContext);
     const navigation = useNavigation();
     const hideBack = props.hideBack ?? false;
     return (
          <VStack>
               <HeaderLogoBar />
               <HStack safeAreaLeft={7} safeAreaRight={7} safeAreaTop={topPadding} safeAreaBottom={2} alignItems="left" style={{ backgroundColor:theme['colors']['primary']['base'] }} >
                    {navigation.canGoBack() && !hideBack && (
                       <Pressable onPress={() => navigation.goBack()} mr={3} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }} >
                            <ChevronLeftIcon size={5} color={theme['colors']['primary']['baseContrast']} />
                       </Pressable>
                     )}
                    <Text style={{color:theme['colors']['primary']['baseContrast'], fontSize:18, lineHeight:22, fontWeight:'bold'}} numberOfLines={1} ellipsizeMode="tail">{props.title}</Text>
               </HStack>
          </VStack>
     );
}
