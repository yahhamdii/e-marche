import {merge} from 'lodash';
import items from './items'
import users from './users'


export default merge(
    [
        items,
        users
    ]
)
