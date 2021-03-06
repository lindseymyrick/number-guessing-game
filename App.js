import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header/Header';
import StartGameScreen from './screens/StartGameScreen/StartGameScreen';
import GameScreen from './screens/GameScreen/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
