import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RenderArticle from '../features/articles/RenderArticle';
import { COMMENTS } from '../shared/COMMENTS'; 

const MarketInfoScreen = ({ route }) => {
    const { market } = route.params;

    const [comments, setComments] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12}}>{item.rating} Stars </Text>
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={comments.filter(
                (comment) => comment.marketId === market.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                marginHorizontal: 20,
                paddingVertival: 20
            }}
            ListHeaderComponent={
                <>
                    <RenderArticle 
                        market={market} 
                        isFavorite={favorite}
                        markFavorite={() => setFavorite(true)}
                        unmarkFavorite={() => setFavorite(false)}  
                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />
    )
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#4b9cd1',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        padding: 10, 
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#d1804b'
    }
})

export default MarketInfoScreen;