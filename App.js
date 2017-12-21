import React from 'react';
import { ScrollView } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    <ScrollView style={{flex:1}}>
      <Header headerText={'Albums!'}/>
      <AlbumList/>
    </ScrollView>
  );
};

export default App;
