import AddComponent from '../components/AddComponent';
import { addNewTask} from '../actions/Index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const mapPropsToState = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName))
        }
    };
}
export default connect(null,mapPropsToState)(AddComponent);