import { Platform, View, StyleSheet, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import DirectoryScreen from './DirectoryScreen';
import ProducerInfoScreen from './ProducerInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import EventsScreen from './EventsScreen';
import EventInfoScreen from './EventInfoScreen';
import { Icon } from 'react-native-elements';
import Apple9 from '../assets/images/apple9.png';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchArticles } from '../features/articles/articlesSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import { fetchEvents } from '../features/events/eventsSlice';
import { fetchProducers } from '../features/producers/producersSlice';
import { fetchMarket } from '../features/market/marketSlice';


const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#d1804b'},
    padding: 6
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={({ navigation}) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

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
                options={({ navigation }) => ({
                    title: 'Producer Directory',
                    headerLeft: () => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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

const EventsNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Events'
                component={EventsScreen}
                options={({ navigation }) => ({
                    title: 'Events',
                    headerLeft: () => (
                        <Icon
                            name='gift'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen 
                name= 'EventInfo'
                component={EventInfoScreen}
                options={({ route }) => ({
                    title: route.params.event.name
                })}
            />
        </Stack.Navigator>
    );
};

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='About'
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props} >
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={Apple9} style={styles.drawerImage} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Project Pommeau</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
)

const Main = () => {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchComments());
    dispatch(fetchEvents());
    dispatch(fetchMarket());
    dispatch(fetchProducers());
}, [dispatch]);

    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#9ad7f6'}}
            >
                <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Producer Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='Events'
                    component={EventsNavigator}
                    options={{
                        title: 'Events',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='gift'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='About'
                    component={AboutNavigator}
                    options={{
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#4b9cd1',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24,
    }
});

export default Main;