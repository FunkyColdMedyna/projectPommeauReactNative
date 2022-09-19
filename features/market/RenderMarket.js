import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderMarket = (props) => {
    const { market } = props;

    if (market) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={market.image}>
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 20,
                            }}
                        >
                            {market.name}
                            {market.price}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{market.description}</Text>
                <Icon
                    name={props.isFavorite ? "heart" : "heart-o"}
                    type="font-awesome"
                    color="#f50"
                    raised
                    reverse
                    onPress={() =>
                        props.isFavorite
                            ? props.unmarkFavorite()
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

export default RenderMarket;
