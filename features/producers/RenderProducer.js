import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderProducer = (props) => {
  const { producer } = props;

  if (producer) {
    return (
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={producer.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {producer.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{producer.description}</Text>
        <Icon
          name={props.isFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() =>
            props.isFavorite
              ? console.log('Already set as favorite')
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

export default RenderProducer;
