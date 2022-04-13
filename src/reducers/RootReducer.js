import * as ActionType from '../actions/Types'

const INITIAL_STATE = {
    loading:false,
    error:false,
    indicators: [],
    indicator: 'Detalle',
    indicatorInfo: [],
    indicatorCode: '',
    indicatorValues: [],
    indicatorDates: []
}

const root = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionType.GET_INDICATORS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case ActionType.GET_INDICATORS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                indicators: (Object.values(action.payload)).slice(3,15)
            }
        case ActionType.GET_INDICATORS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }
        case ActionType.GET_ONE_INDICATORS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case ActionType.GET_ONE_INDICATORS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                indicatorInfo: action.payload.serie,
                indicatorCode: action.payload.codigo,
                indicatorDates: action.payload.dates,
                indicatorValues: action.payload.values
            }
        case ActionType.GET_ONE_INDICATORS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }
        case ActionType.SET_INDICATOR:
            return {
                ...state,
                indicator: action.payload
            }
        default: 
            return state;
    }
}

export default root;