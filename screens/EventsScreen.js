import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { EVENTS } from '../shared/EVENTS';


const EventsScreen = ({ navigation }) => {
    const [events, setEvents] = useState(EVENTS);

    const renderEventItem = ({ item: event }) => {
        return(
            <ListItem onPress={() => navigation.navigate('Events', { event })}>
                <Avatar source={event.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{event.name}</ListItem.Title>
                    <ListItem.Subtitle>{event.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default EventsScreen;