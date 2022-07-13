// import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
// import { PRODUCERS } from '../shared/PRODUCERS';
// import { EVENTS } from '../shared/EVENTS';
// import { MARKET } from '../shared/MARKET';
// import { ARTICLES } from '../shared/ARTICLES';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const FeaturedItem = ({ item }) => {
    if (item){
        return(
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseUrl + 'images/' + item.image }}>
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
    const articles = useSelector((state) => state.articles);
    const events = useSelector((state) => state.events);
    const markets = useSelector((state) => state.market);
    const producers = useSelector((state) => state.producers);
    

    const featProducer = producers.producersArray.find((item) => item.featured);
    const featEvent = events.eventsArray.find((item) => item.featured);
    const featMarket = markets.marketArray.find((item) => item.featured);
    const featArticle = articles.articlesArray.find((item) => item.featured);

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