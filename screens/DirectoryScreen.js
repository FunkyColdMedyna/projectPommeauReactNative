import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { PRODUCERS } from '../shared/PRODUCERS'

const DirectoryScreen = ({ navigation }) => {
    const [producers, setProducers] = useState(PRODUCERS);

    const renderDirectoryItem = ({ item: producer }) => {
        return(
            <ListItem onPress={() => navigation.navigate('ProducerInfo', { producer })}>
                <Avatar source={producer.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{producer.name}</ListItem.Title>
                    <ListItem.Subtitle>{producer.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={producers}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}

        />
    )
}

export default DirectoryScreen;