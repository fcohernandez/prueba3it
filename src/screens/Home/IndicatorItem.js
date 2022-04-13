import React from 'react';
import { List,IconButton, Colors } from 'react-native-paper';

const IndicatorItem = ({item,navigateToDetail}) => {

    return(
        <List.Item
            title={item.nombre}
            description={`Unidad de medida: ${item.unidad_medida}`}
            right={() => 
                <IconButton
                    key={item.name}
                    icon="information"
                    color={Colors.blue300}
                    size={30}
                    onPress={() => navigateToDetail(item,'Detail')}
                />}
            onPress={() => navigateToDetail(item,'FullDetail')}
        />
    )
}

export default IndicatorItem;