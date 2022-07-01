// import { useState } from 'react';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
// import { PRODUCERS } from '../shared/PRODUCERS';
import DirectoryScreen from './DirectoryScreen';
import ProducerInfoScreen from './ProducerInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'orange'
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen 
                name= 'Directory'
                component={DirectoryScreen}
                options={{ title: 'Producer Directory' }}
            />
            <Stack.Screen 
                name= 'ProducerInfo'
                component={ProducerInfoScreen}
                options={({ route }) => ({
                    title: route.params.producer.name
                })}
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    // const [producers, setProducers] = useState(PRODUCERS);
    // const [selectedProducerId, setSelectedProducerId] = useState();

    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: Platform.os === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <DirectoryNavigator />
        </View>
    )
};

export default Main;