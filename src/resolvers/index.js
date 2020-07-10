import {merge} from 'lodash';
import items from './items'
import users from './users'
import category from './category'
import attribut from './attribut'
import manufacturer from './manufacturer'
import plateform from './plateform'


export default merge(
    [
        items,
        users,
        category,
        attribut,
        manufacturer,
        plateform
    ]
)
