import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderArticle = (props) => {
    const { article } = props;

    if (article) {
        return (
            <Card containerStyle={styles.cardContainer}>
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <Text
                            style={{
                                color: "black",
                                textAlign: "center",
                                fontSize: 20,
                            }}
                        >
                            {article.name}
                        </Text>
                    </View>
                <Text style={{ margin: 20 }}>{article.text}</Text>
                <Text style={{ margin: 20 }}>{article.author}</Text>
                <Icon
                    name={props.isFavorite ? "heart" : "heart-o"}
                    type="font-awesome"
                    color="#f50"
                    raised
                    reverse
                    onPress={() =>
                        props.isFavorite
                            ? console.log("Already set as favorite")
                            : props.markFavorite()
                    }
                />
            </Card>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20,
    },
});

export default RenderArticle;