import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { MARKET } from '../shared/MARKET';


const MarketsScreen = ({ navigation }) => {
    const [markets, setMarkets] = useState(MARKET);

    const renderMarketItem = ({ item: market }) => {
        return(
            <ListItem onPress={() => navigation.navigate('MarketInfo', { market })}>
                <Avatar source={market.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{market.name}</ListItem.Title>
                    <ListItem.Subtitle>{market.price}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={markets}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default MarketsScreen;