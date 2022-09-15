import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { ARTICLES, Articles } from '../shared/ARTICLES';


const ArticlesScreen = ({ navigation }) => {
    const [articles, setArticles] = useState(ARTICLES);

    const renderArticleItem = ({ item: article }) => {
        return(
            <ListItem onPress={() => navigation.navigate('ArticleInfo', { article })}>
                {/* <Avatar source={article.image} rounded /> */}
                <ListItem.Content>
                    <ListItem.Title>{article.name}</ListItem.Title>
                    <ListItem.Subtitle>{article.author}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={articles}
            renderItem={renderArticleItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default ArticlesScreen; 