import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderProducer = ({ producer }) => {
    if (producer) {
        return (
            <Card containerStyle={{ padding: 0}}>
                <Card.Image source={producer.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text   
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {producer.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{producer.description}</Text>
            </Card>
        );
    }
    return <View />
}

export default RenderProducer;