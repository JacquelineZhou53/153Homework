import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Button, TextInput, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InfectionPossibility from './components/InfectionPossibility';

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home Page'}}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
          />
          <Stack.Screen
            name="Data"
            component={DataScreen}
          />
          <Stack.Screen
            name="Infection Possibility"
            component={PossibilityScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to About"
        color="red"
        onPress={() =>
          navigation.navigate('About')
        }
      />
      <Button
        title="Go to Data"
        onPress={() =>
          navigation.navigate('Data')
        }
      />
      <Button
        title="Go to Infection Possibility"
        color="orange"
        onPress={() =>
          navigation.navigate('Infection Possibility')
        }
      />
    </View>
  );
};

const AboutScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text style={styles.infoText}>This is the app for monitoring where people
        carrying infectious disease has been to.</Text>
      <Text style={styles.infoText}>This app is just for simulating the spread
       of a disease that doesn't exist, please don't panic.</Text>
      <br/>
      <Text style={styles.copyrightText}>copyright @Jacqueline.Zhou</Text>
      <Text style={styles.copyrightText}>Email: jianingzhou@brandeis.edu</Text>
      <Text style={styles.secretText}>The author absolutely don't care about
       user's privacy issues.</Text>
      <Text style={styles.secretText}>By seeing this text, users automatically
       agree to this policy and agree to abandon their human rights when using
       this app.</Text>
    </View>
  );
};

const DataScreen = ({ navigation, route }) => {
  return (
    <View style={styles.colContainer}>
      <Text style={styles.infoText}>Please enter your information as
        Name/Age/Gender/Infected:</Text>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textinputStyle}
          placeholder='Name/Age/Gender/Infected'/>
        <Button title="Confirm Info"/>
      </View>
      <Image
        source={{uri: "https://cdn.ndemiccreations.com/image/130.jpeg"}}
        style={{width: 400, height: 400}}
      />
    </View>
  );
};

const PossibilityScreen = ({ navigation, route }) => {
  return (
    <View>
      <InfectionPossibility easiness={0.6} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colContainer: {
    flexDirection: 'col',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection:'row',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
  },
  copyrightText: {
    fontSize: 5,
  },
  secretText: {
    fontSize: 5,
    color: '#dcdcdc',
  },
  textinputStyle: {
    height: 40,
    width: 400,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
