import axios from "axios"
import { loginByUserEmail } from "./loginByUserEmail";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { To, NavigateOptions } from "react-router-dom";

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUserEmail', () => {
    const userValue = {
        email: 'email@email.com', 
        id: 25
    };
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async ()=> {
        mockedAxios.post.mockResolvedValue(Promise.resolve({data: userValue}))
        const action = loginByUserEmail({email: 'email@test.com', password: 'sdrew21'})
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: function (to: To, options?: NavigateOptions): void {
                throw new Error("Function not implemented.");
            }
        });
        expect(result.meta.requestStatus).toBe('fulfilled');
    })


    test('error login', async ()=> {
        mockedAxios.post.mockResolvedValue(Promise.resolve({status: 403}))
        const action = loginByUserEmail({email: 'email@test.com', password: 'sdrew21'})
        const result = await action(dispatch, getState, {
            api: mockedAxios,
            navigate: function (to: To, options?: NavigateOptions): void {
                throw new Error("Function not implemented.");
            }
        });
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected');
    })
})