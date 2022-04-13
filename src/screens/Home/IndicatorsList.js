import React from 'react';
import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-paper';
import IndicatorItem from './IndicatorItem';

const IndicatorsList = ({indicators,navigateToDetail}) => {

    return(
        <View>
            <FlatList
                data={indicators}
                renderItem={({item}) => <IndicatorItem item={item} navigateToDetail={navigateToDetail}/>}
                ItemSeparatorComponent={() => <Divider />}
                keyExtractor={item => item.codigo}
            />
        </View>
    )
}

export default IndicatorsList;