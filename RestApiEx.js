import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export default function RestApiEx() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Asynchronous function to handle the internet request
  const fetchUserData = async () => {
    setIsLoading(true); // Turn on loading text
    try {
      // 1. FETCHING FROM A REST API
      const response = await fetch('https://jsonplaceholder.typicode.com/users/4');
      
      // 2. PARSING THE JSON
      const data = await response.json();
      
      // 3. UPDATING STATE
      setUserData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Turn off loading text
    }
  };

  // Trigger data fetch automatically on component mount using empty dependency array []
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={styles.box}>
      <Text style={styles.titleText}>Activity 5: External REST API</Text>
      {isLoading ? (
        <Text>Downloading data from the internet...</Text>
      ) : userData ? (
        <View>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone: {userData.phone}</Text>
        </View>
      ) : (
        <Text>No data fetched yet.</Text>
      )}
      <Button title="Refetch User Data" onPress={fetchUserData} />
    </View>
  );
}