import React from 'react';
import { Alert, Button, Text, View } from 'react-native';

const notification = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum' }}>
            <Text>Notification</Text>

            <Text>For Alert</Text>
            <Button title="Alert" onPress={() => Alert.alert("This is Alert Section")} />
            <Text>For Alert with Message</Text>
            <Button style={{ color: 'red' }} title="Alert With Message" onPress={() => Alert.alert('This is Alert Section', 'DOB Incorrect')} />

        </View>
    );
};

export default notification;