import { UserSchema, User } from './model/types/user.schema'

import {userActions, userReducer} from './model/slice/user.slice'

export {
    UserSchema,
    userReducer,
    userActions,
    User
}