import  React, { useState } from 'react';
import { StyleSheet, Button,Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {

  const [movies, setmovies] = useState([
    {name:'The Nightingale', img:'https://m.media-amazon.com/images/M/MV5BNjVmZmY1NmQtMWNhZS00ZDUwLTk5ZTQtZGE4NWIyM2YwMDRiXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_UX182_CR0,0,182,268_AL_.jpg', id:'1'},
    {name:'Gemini Man', img:'https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg', id:'2'},
    {name:'Game of Thrones', img:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SY1000_CR0,0,734,1000_AL_.jpg', id:'3'},
    {name:'Dark', img:'https://m.media-amazon.com/images/M/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_CR0,0,675,1000_AL_.jpg', id:'4'},
    {name:'La Casa de Papel', img:'https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,674,1000_AL_.jpg', id:'5'},
    
      ]);
     

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <FlatList
    data={movies}
    renderItem={({ item }) =>(
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
              <Image style={{ width: 150, height: 230 , margin: 5 }} source={{ uri: item.img }} />
              <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>

    )}

/> 

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{ navigation.getParam('name')}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  title: {
    flex: 1,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
   color:'#000'
  },


});




export default App;
