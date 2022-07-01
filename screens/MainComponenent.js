import { useState } from 'react';
import { View } from 'react-native';
import { PRODUCERS } from '../shared/PRODUCERS';
import DirectoryScreen from './DirectoryScreen';
import ProducerInfoScreen from './ProducerInfoScreen';

const Main = () => {
    const [producers, setProducers] = useState(PRODUCERS);
    const [selectedProducerId, setSelectedProducerId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen 
                producers={producers}
                onPress={(producerId) => setSelectedProducerId(producerId)}
                />
            <ProducerInfoScreen 
                producer={
                    producers.filter(
                        (producer) => producer.id === selectedProducerId)[0]
                    }
            />
        </View>
    )
};

export default Main;