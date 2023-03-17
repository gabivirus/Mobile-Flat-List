import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';

export default function App() {
  let [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Melhores consoles de videogames:</Text>
        <FlatList
          data={arrayConsole}
          renderItem={({ item }) =>
            <View style={styles.consoleBox}>
              <Text style={styles.title}>
                Console: {item.console} - {item.ano}
              </Text>
              <Text>
                {item.jogos}<Image style={styles.img} source={item.image}/>
              </Text>
              
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  titulo: {
    fontSize: 40,
    color: '#6940cf',
    fontFamily: 'JetBrainsMono_400Regular',
    fontWeight: 'bolder',
    marginBottom: 50
  },
  consoleBox: {
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#6940cf70'
  },
  title: {
    fontWeight : 650,
    fontSize: 15
  },
  img: {
    position: 'relative',
    maxWidth: '80vw',
    maxHeight: 200,
    resizeMode: 'center',
    marginTop: 20,
    borderRadius: 6
  },
});

const arrayConsole = [
  {
    console: 'NES',
    ano: '1983',
    jogos: 'Super Mario Bros, Duck Hunt',
    image: require('./assets/nes.jpg')
  },
  {
    console: 'SNES',
    ano: '1990',
    jogos: 'Super Mario World, Street Fighter 2',
    image: require('./assets/snes.jpg')
  },
  {
    console: 'N64',
    ano: '1996',
    jogos: 'Super Mario 64, The Legend of Zelda: Ocarina of Time',
    image: require('./assets/n64.jpg')
  },
  {
    console: 'GameCube',
    ano: '2001',
    jogos: "Super Mario Sunshine, Luigi's Mansion",
    image: require('./assets/gamecube.jpg')
  },
  { 
    console: 'Wii',
    ano: '2006',
    jogos: 'Super Mario Galaxy, Wii Sports',
    image: require('./assets/wii.png')
    },
  {
    console: 'Wii U',
    ano: '2012',
    jogos: 'Super Mario 3D World, The Legend of Zelda: Breath of The Wild',
    image: require('./assets/wiiu.png')
  },
  {
    console: 'Switch',
    ano: '2017',
    jogos: 'Super Mario Odyssey, Super Smash Bros Ultimate',
    image: require('./assets/switch.jpg')
  },
];
