import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JetBrainsMono_400Regular,
} from '@expo-google-fonts/jetbrains-mono';

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
            <View style={styles.container}>
              <Text style={styles.consoles}>
                {item.console} - {item.ano} - {item.jogos}
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
  },
  consoles: {

  }
});

const arrayConsole = [
  { console: 'NES', ano: '1983', jogos: 'Super Mario Bros, Duck Hunt' },
  {
    console: 'SNES',
    ano: '1990',
    jogos: 'Super Mario World, Street Fighter 2',
  },
  {
    console: 'N64',
    ano: '1996',
    jogos: 'Super Mario 64, The Legend of Zelda: Ocarina of Time',
  },
  {
    console: 'GameCube',
    ano: '2001',
    jogos: "Super Mario Sunshine, Luigi's Mansion",
  },
  { console: 'Wii', ano: '2006', jogos: 'Super Mario Galaxy, Wii Sports' },
  {
    console: 'Wii U',
    ano: '2012',
    jogos: 'Super Mario 3D World, The Legend of Zelda: Breath of The Wild',
  },
  {
    console: 'Switch',
    ano: '2017',
    jogos: 'Super Mario Odyssey, Super Smash Bros Ultimate',
  },
];
