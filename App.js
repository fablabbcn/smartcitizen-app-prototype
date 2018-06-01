import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, ScrollView } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasData: false,
      id: 3,
      description: '',
      city:0,
      sensorDescription: '',
      sensorType: '',
      sensorValue: '',
    };
  }
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height:180}}
        />
        <Text>  </Text>
        <Button
          onPress={() => this.getSensorData()}
          title="Get data"
          color="#262626"
        />
        <Text>Have data: {this.state.hasData ? 'Yes' : 'No'} </Text>
        <Text>Kit ID:    {this.state.id} </Text>
        <Text>City:      {this.state.city} </Text>
        <Text>Description:{this.state.description} </Text>
        <Text>Name:      {this.state.name} </Text>
        <Text>Sensor:    {this.state.sensorType} </Text>
        <Text>SensorDescription: {this.state.sensorDescription} </Text>
        <Text>SensorValue:{this.state.sensorValue} </Text>
      </ScrollView>
    );
  }

  getSensorData(){
    console.log('fetching data...')
    return fetch('https://api.smartcitizen.me/v0/devices/2440')
      .then((response) =>  response.json())
      .then((responseJson) => {
        console.log(responseJson['data']['sensors'][0]['raw_value']);
        this.setState({
          hasData: true,
          id: responseJson['id'],
          city: responseJson['id'],
          description: responseJson['description'],
          name: responseJson['name'],
          sensorType: responseJson['data']['sensors'][0]['name'],
          sensorDescription: responseJson['data']['sensors'][0]['description'],
          sensorValue: responseJson['data']['sensors'][0]['raw_value'],
        });
      })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
