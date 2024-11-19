import React, {useState} from 'react';
import { View, Text, Alert } from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import LoginHeader from './LoginHeader';
import FormSubmitButton from './FormSubmitButton';
import { fetchEvents } from '../methods/fetchEvents';

export default function SearchPage()  {
  const [searchQuery, setSearchQuery] = useState({keyword: ''});

  const {keyword} = searchQuery; 

  

  const submitForm = async () => {
    fetchEvents(searchQuery).then(async (response) => {
      console.log(response);
      try {
        Alert.alert('Success', response.events[0].title + '\n€' + response.events[1].price);
      } catch (err) {
        console.log(err);
        Alert.alert('Error', 'Failed to fetch events.');
      }
      
    }).catch((err) => {
      console.error('Error:', err);
      Alert.alert('Error', 'Failed to fetch events.');
    });
  }

  const handleOnChangeText = (value, fieldName) => {
    setSearchQuery({...searchQuery, [fieldName]: value});
    
  };

  return (
    <><LoginHeader></LoginHeader><FormContainer>
      <FormInput value={keyword} onChangeText={(value) => handleOnChangeText(value, 'keyword')} title='Search for Events Below' placeholder='Music/Sports/etc...'></FormInput>
      <FormSubmitButton onPress={submitForm} title='Search'></FormSubmitButton>
    </FormContainer></>
  );
}
