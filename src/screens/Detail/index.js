import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native';
import { Divider, List, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getOneIndicator } from '../../actions';
import LoadingComponent from '../../components/LoadingComponent';

const Detail = ({route}) => {

    const dispatch = useDispatch()
    const { indicator } = route.params;
    const indicatorInfo = useSelector(state => state.root.indicatorInfo);
    const loading = useSelector(state => state.root.loading);

    useEffect(() => {
        dispatch(getOneIndicator(indicator.codigo));
    },[]);
    console.log('loading', loading);
    return(
        <View>
            {loading && <LoadingComponent />}
            {!loading && 
                <FlatList
                    data={indicatorInfo}
                    renderItem={({item}) => 
                    <List.Item
                        title={item.valor}
                        description={`Fecha: ${(item.fecha).slice(0,10)}`}
                        left={() => 
                            <List.Icon
                                icon={indicator.unidad_medida === "Porcentaje" ? "percent":"currency-usd"}
                                color={Colors.green500}
                                size={30}
                            />}
                    />}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={item => item.fecha}
                />
            }
        </View>
    )
}

export default Detail;