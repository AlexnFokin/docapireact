import { StateSchema } from "app/providers/StoreProvider"
import { getLoginState } from "./getLoginState"


describe('getLoginError', () => {
    test('should return state', () => {
        const state: Partial<StateSchema> = {
            loginFrom: {
                error: 'error',
                email: "test@email.com",
                password: "12345passE",
                isLoading: true
            }
        }
        expect(getLoginState(state as StateSchema)).toEqual({
            error: 'error',
            email: "test@email.com",
            password: "12345passE",
            isLoading: true
        })
    })

    test('should return undefined without state', () => {
        const state: Partial<StateSchema> = {}
        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})
