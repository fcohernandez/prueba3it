import React, { useEffect} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getIndicators, setIndicator } from '../../actions';
import IndicatorsList from './IndicatorsList';
import LoadingComponent from '../../components/LoadingComponent';

const Home = ({navigation}) => {
    const dispatch = useDispatch()

    const indicators = useSelector(state => state.root.indicators);
    const loading = useSelector(state => state.root.loading);

    useEffect(() => {
        dispatch(getIndicators());
    },[]);

    const navigateToDetail = (indicator,screen) => {
        dispatch(setIndicator(indicator))
        navigation.navigate(screen,{
            indicator: indicator
        });
    }

    return(
        <View>
            {loading && <LoadingComponent />}
            {!loading && <IndicatorsList indicators={indicators} navigateToDetail={navigateToDetail}/>}
        </View>
    )
}

export default Home;