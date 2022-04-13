import * as ActionType from './Types';
import * as Config from '../config/';
import axios from 'axios';

//acción que se ejecuta cuando la obtención de la información de los indicadores es exitosa
export const getIndicatorsSuccess = (data) => dispatch => {
    dispatch({
        type: ActionType.GET_INDICATORS_SUCCESS,
        payload: data
    })
}

//acción que se ejecuta cuando la obtención de la información de los indicadores es fallida
export const getIndicatorsFailure = (error) => dispatch => {
    dispatch({
        type: ActionType.GET_INDICATORS_FAILURE,
        payload: error
    })
}

//acción que se ejecuta cuando se inicia la petición para obtener la información
export const getIndicatorsRequest = () => dispatch => {
    dispatch({
        type: ActionType.GET_INDICATORS_REQUEST
    })
}

//acción para obtener las info de los indicadores
export const getIndicators = () => async(dispatch) => {
    dispatch(getIndicatorsRequest())
    try{
        const response = await axios.get(`${Config.API_URL}`)
        if(response.data){
            dispatch(getIndicatorsSuccess(response.data))
        }else{
            dispatch(getIndicatorsFailure(response))
        }

    }catch(err){
        dispatch(getIndicatorsFailure(err))
    }
}

//acción que se ejecuta cuando la obtención de la información de los indicadores es exitosa
export const getOneIndicatorSuccess = (data) => dispatch => {
    dispatch({
        type: ActionType.GET_ONE_INDICATORS_SUCCESS,
        payload: data
    })
}

//acción que se ejecuta cuando la obtención de la información de los indicadores es fallida
export const getOneIndicatorFailure = (error) => dispatch => {
    dispatch({
        type: ActionType.GET_ONE_INDICATORS_FAILURE,
        payload: error
    })
}

//acción que se ejecuta cuando se inicia la petición para obtener la información
export const getOneIndicatorRequest = () => dispatch => {
    dispatch({
        type: ActionType.GET_ONE_INDICATORS_REQUEST
    })
}

//acción para obtener las info de los indicadores
export const getOneIndicator = (indicator) => async(dispatch) => {
    dispatch(getOneIndicatorRequest())
    try{
        const response = await axios.get(`${Config.API_URL}/${indicator}`)
        if(response.data){
            let values = []
            let dates = []
            response.data.serie.map((indicator,index) => {
                if(index < 10){
                    values.push(indicator.valor)
                    dates.push((indicator.fecha).slice(0,10))
                }
            })
            
            response.data.values = values.reverse();
            response.data.dates = dates.reverse();

            dispatch(getOneIndicatorSuccess(response.data))
        }else{
            dispatch(getOneIndicatorFailure(response))
        }

    }catch(err){
        dispatch(getOneIndicatorFailure(err))
    }
}

//acción que se ejecuta cuando se inicia la petición para obtener la información
export const setIndicator = (indicator) => dispatch => {
    dispatch({
        type: ActionType.SET_INDICATOR,
        payload: indicator
    })
}