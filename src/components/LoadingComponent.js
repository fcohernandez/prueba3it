import React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

const LoadingComponent = () => {
    return <ProgressBar progress={0.5} color={Colors.blue300} />;
}

export default LoadingComponent;