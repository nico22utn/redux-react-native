import {combineReducers} from 'redux';
import taskReducers from './TaskReducers';

const allReducers = combineReducers({
    taskReducers,
    //Se pueden agregar mas reducers acá
})
export default allReducers;