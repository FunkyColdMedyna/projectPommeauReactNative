import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: producer }) => {
        return(
            <ListItem>
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
            data={props.producers}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;