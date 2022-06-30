import { useState } from 'react';
import { PRODUCERS } from '../shared/PRODUCERS';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [producers, setProducers] = useState(PRODUCERS);

    return <DirectoryScreen producers={producers} />

}

export default Main;