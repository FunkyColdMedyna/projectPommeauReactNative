import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import DirectoryScreen from './DirectoryScreen';
import ProducerInfoScreen from './ProducerInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: 'orange'}
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
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
    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: Platform.os === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#9ad7f6'}}
            >
                <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home'}}
                />
                <Drawer.Screen 
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Producer Directory'}}
                />
            </Drawer.Navigator>
        </View>
    )
};

export default Main;