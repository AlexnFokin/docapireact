import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUserEmail } from "./getLoginUserEmail"


describe('getLoginError', () => {
    test('should return email', () => {
        const state: Partial<StateSchema> = {
            loginFrom: {
                error: 'error',
                email: "test@test.com",
                password: "",
                isLoading: false
            }
        }
        expect(getLoginUserEmail(state as StateSchema)).toEqual('test@test.com')
    })
})
