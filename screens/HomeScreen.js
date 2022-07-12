import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { PRODUCERS } from '../shared/PRODUCERS';
import { EVENTS } from '../shared/EVENTS';
import { MARKET } from '../shared/MARKET';
import { ARTICLES } from '../shared/ARTICLES';

const FeaturedItem = ({ item }) => {
    if (item){
        return(
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View style={{ justifyContent: 'center', flex: 1}}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text stle={{ margin: 20 }}>{item.description}</Text>
            </Card>
        )
    }
    return <View />
}

const HomeScreen = () => {
    const [producers, setProducers] = useState(PRODUCERS);
    const [events, setEvents] = useState(EVENTS);
    const [markets, setMarkets] = useState(MARKET);
    const [articles, setArticles] = useState(ARTICLES);

    const featProducer = producers.find((item) => item.featured);
    const featEvent = events.find((item) => item.featured);
    const featMarket = markets.find((item) => item.featured);
    const featArticle = articles.find((item) => item.featured);

    return(
        // scrollview = lazy loading - only shows featured items from each category. Flatlist should be used for longer lists //
        <ScrollView>
            <FeaturedItem item={featProducer} />
            <FeaturedItem item={featEvent} />
            <FeaturedItem item={featMarket} />
            <FeaturedItem item={featArticle} />
        </ScrollView>
    )
}

export default HomeScreen;