import { login } from '../store/actions';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.fetch = jest.fn((_, options) => {
    const { login, password } = JSON.parse(options.body);

    if (login === 'admin' && password === '1234') {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({ message: 'Login successful' }),
        });
    } else {
        return Promise.resolve({
            status: 401,
            json: () => Promise.resolve({ message: 'Invalid credentials' }),
        });
    }
});

describe('login action', () => {
    let store;

    beforeEach(() => {
        store = mockStore({ auth: { isAuthenticated: false, error: null } });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('dispatches LOGIN_SUCCESS when login is successful', async () => {
        const expectedActions = [
            { type: 'LOGIN_REQUEST' },
            { type: 'LOGIN_SUCCESS', payload: { message: 'Login successful' } },
        ];

        await store.dispatch(login({ login: 'admin', password: '1234' }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches LOGIN_FAILURE when credentials are invalid', async () => {
        const expectedActions = [
            { type: 'LOGIN_REQUEST' },
            { type: 'LOGIN_FAILURE', error: 'Invalid credentials' },
        ];

        await store.dispatch(login({ login: 'admin', password: '12345' }));

        expect(store.getActions()).toEqual(expectedActions);
    });
});
