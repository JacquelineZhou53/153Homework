import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// const mph2fps = (mph) => mph*5280/3600

function infect_poss(mask, contact, severity){
  if (mask == 1) {
    return 0;
  } else {
    let res = 1;
    while (contact > 0) {
      res = res * (1/Math.sqrt(2 * Math.PI) * Math.exp(-0.5 * severity * severity / 100))
      contact--;
    }
    return 1-res;
  }
};

const InfectionPossibility = (props) => {
  const [mask, setMask] = useState(0);
  const [contact, setContact] = useState(0);
  const [severity, setSeverity] = useState(0);
  const [poss, setPoss] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
         Calculating the possibility of this person to get the disease
      </Text>
      <br/>
      <View style={styles.rowContainer}>
        <TextInput
              style={styles.textinput}
              onChangeText={text => {setMask(parseFloat(text))}}
              placeholder="1 or 0"
          />
        <Text style={styles.textlable}>
              Wearing Mask in public places? (Enter 1 if yes, 0 if no)
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <TextInput
              style={styles.textinput}
              onChangeText={text => {setContact(parseFloat(text))}}
              placeholder="e.g. 54"
          />
        <Text style={styles.textlable}>
              Made contact with how many people? (Enter a positive whole number)
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <TextInput
              style={styles.textinput}
              onChangeText={text => {setSeverity(parseFloat(text))}}
              placeholder="1-10"
          />
        <Text style={styles.textlable}>
              Grade the severity of the disease: from 1 to 10
        </Text>
      </View>
      <Button
            color='green' title='CALCULATE POSSIBILITY'
            onPress = {() =>
                 setPoss(parseFloat(parseFloat(props.easiness) * infect_poss(mask, contact, severity)))}
        />
      <Text> Your chance to get the disease is {poss} </Text>
    </View>
  );
};

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'center',
    },
    textinput:{
      margin: 20,
      fontSize: 20,
    },
    textlable:{
      fontSize: 20,
    },
    header: {
      fontSize: 30,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'left',
    },
  });

export default InfectionPossibility;
