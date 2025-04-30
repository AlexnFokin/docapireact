import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUserPassword } from "./getLoginUserPassword"



describe('getLoginError', () => {
    test('should return password', () => {
        const state: Partial<StateSchema> = {
            loginFrom: {
                error: '',
                email: "",
                password: "125pass",
                isLoading: false
            }
        }
        expect(getLoginUserPassword(state as StateSchema)).toEqual('125pass')
    })
})
