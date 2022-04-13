import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Title,Subheading, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getOneIndicator } from '../../actions';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'
import LoadingComponent from '../../components/LoadingComponent';

const FullDetail = ({route}) => {

    const dispatch = useDispatch()
    const { indicator } = route.params;
    const indicatorValues = useSelector(state => state.root.indicatorValues);
    const indicatorDates = useSelector(state => state.root.indicatorDates);
    const loading = useSelector(state => state.root.loading);

    useEffect(() => {
        dispatch(getOneIndicator(indicator.codigo));
    },[]);

    return(
        <React.Fragment>
            <View style={styles.containerTop}>
                <Title style={styles.title}>{indicator.unidad_medida === "Porcentaje" ? "%": "$"}{indicator.valor}</Title>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.subContainerTopLeft}>
                        <Subheading style={{color: Colors.white}}>Nombre </Subheading>
                        <Subheading style={{color: Colors.white}}>Fecha </Subheading>
                        <Subheading style={{color: Colors.white}}>Unidad de Medida </Subheading>
                    </View>
                    <View style={styles.subContainerTopRight}>
                        <Subheading style={{color: Colors.white}}>{indicator.nombre}</Subheading>
                        <Subheading style={{color: Colors.white}}>{(indicator.fecha).slice(0,10)}</Subheading>
                        <Subheading style={{color: Colors.white}}>{indicator.unidad_medida}</Subheading>
                    </View>
                </View>
            </View>
            <View style={{flex: 1}}>
                {loading && <LoadingComponent />}
                {!loading && 
                    <React.Fragment>
                        <View style={styles.chartContainer}>
                            <YAxis
                                data={indicatorValues}
                                contentInset={{ top: 20, bottom: 20 }}
                                svg={{
                                    fill: Colors.black,
                                    fontSize: 10,
                                }}
                                numberOfTicks={10}
                                formatLabel={(value) => `${indicator.unidad_medida === "Porcentaje" ? "%": "$"}${value}`}
                            />
                            <LineChart
                                style={{ flex: 1, marginLeft: 20 }}
                                data={indicatorValues}
                                svg={{ stroke: 'rgb(134, 65, 244)' }}
                                contentInset={{ top: 20, bottom: 20 }}
                            >
                                <Grid />
                            </LineChart>
                        </View>
                        <View style={styles.xAxis}>
                            {indicatorDates.map((date,index) => {
                                if(index % 3 === 0){
                                    return <Text key={index} style={styles.xAxisText}>{date}</Text>
                                }
                            })}
                        </View>
                    </React.Fragment>
                }
            </View>
        </React.Fragment>
    )
}

export default FullDetail;

const styles = StyleSheet.create({
    containerTop:{
        flex: 1, 
        alignItems:'center', 
        marginTop: 10, 
        backgroundColor: Colors.blue800, 
        borderRadius: 18
    },
    title: {
        color: Colors.white, 
        marginTop: 20
    },
    xAxis: {
        flexDirection: 'row',
        alignSelf: 'center', 
        marginLeft: 20
    },
    xAxisText: {
        fontSize: 12, 
        marginLeft: 20, 
        paddingBottom: 40, 
        color: Colors.black
    },
    chartContainer: {
        flex: 1, 
        flexDirection: 'row', 
        padding: 20
    },
    subContainerTopLeft: {
        flex: 0.3,
        marginTop: 20
    },
    subContainerTopRight: {
        alignItems: 'flex-end', 
        flex: 0.6,
        marginTop: 20
    }
})