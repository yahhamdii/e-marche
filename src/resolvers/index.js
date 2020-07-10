import {merge} from 'lodash';
import items from './items'
import users from './users'
import category from './category'


export default merge(
    [
        items,
        users,
        category
    ]
)
