import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RenderProducer from '../features/producers/RenderProducer';
import { COMMENTS } from '../shared/COMMENTS'; 

const ProducerInfoScreen = ({ route }) => {
    const { producer } = route.params;

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
                (comment) => comment.producerId === producer.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                marginHorizontal: 20,
                paddingVertival: 20
            }}
            ListHeaderComponent={
                <>
                    <RenderProducer 
                        producer={producer} 
                        isFavorite={favorite}
                        markFavorite={() => setFavorite(true)}
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

export default ProducerInfoScreen;