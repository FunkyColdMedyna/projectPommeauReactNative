import RenderProducer from '../features/producers/RenderProducer';

const ProducerInfoScreen = ({ route }) => {
    const { producer } = route.params;
    return <RenderProducer producer= {producer} />;
};

export default ProducerInfoScreen;