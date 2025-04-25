import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserEmail";
import { RegisterSchema } from "features/RegisterByUserEmail";



export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginFrom?: LoginSchema
  registerForm?: RegisterSchema
}