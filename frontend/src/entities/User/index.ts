import { UserSchema, User } from './model/types/user.schema'
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import {userActions, userReducer} from './model/slice/user.slice'

export {
    UserSchema,
    userReducer,
    userActions,
    User,
    getUserAuthData
}