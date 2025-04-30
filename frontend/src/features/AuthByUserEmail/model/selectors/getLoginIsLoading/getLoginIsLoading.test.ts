import { StateSchema } from "app/providers/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"


describe('getLoginIsLoading', () => {
    test('should return false', () => {
        const state: Partial<StateSchema> = {
            loginFrom: {
                error: '',
                email: "",
                password: "",
                isLoading: false
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })

    test('should return false without state', () => {
        const state: Partial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })

    test('should return true', () => {
        const state: Partial<StateSchema> = {
            loginFrom: {
                error: '',
                email: "",
                password: "",
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
})
