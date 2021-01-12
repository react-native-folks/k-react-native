import authReducer, { authInitialState, authActionsTypes } from 'redux/auth';

import { store } from '../store';

describe('testing reducers', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('test AUTH_INIT reducer with AUTH_INIT action', async () => {
    const action = {
      type: `${authActionsTypes.AUTH_INIT}/fulfilled`,
      payload: {
        currentUser: { id: '123', email: 'test@mail.com' },
        hasAccessOnboarding: true
      }
    };
    const result = authReducer(authInitialState, action);
    expect(result).toEqual({
      ...authInitialState,
      hasAccessOnboarding: true,
      initialLoading: false,
      currentUser: { id: '123', email: 'test@mail.com' }
    });
  });

  // LOGIN FEATURE
  test('test LOGIN reducer with LOGIN action', async () => {
    const action = {
      type: `${authActionsTypes.LOGIN}/fulfilled`,
      payload: {
        currentUser: { id: '123', email: 'test@mail.com' }
      }
    };
    const result = authReducer(authInitialState, action);
    expect(result).toEqual({
      ...authInitialState,
      currentUser: { id: '123', email: 'test@mail.com' }
    });
  });

  test('test LOGOUT reducer with LOGOUT action', async () => {
    const action = {
      type: `${authActionsTypes.LOGOUT}/fulfilled`,
      payload: { currentUser: null }
    };
    await expect(
      authReducer({ ...authInitialState, currentUser: { email: '' } }, action)
    ).toEqual({
      ...authInitialState,
      currentUser: null
    });
  });

  // SOCIAL LOGIN WITH LOGIN FEATURE
  test('test SOCIAL LOGIN reducer with SOCIAL_LOGIN action', async () => {
    const action = {
      type: `${authActionsTypes.SOCIAL_LOGIN}/fulfilled`,
      payload: {
        currentUser: { id: '123', email: 'test@mail.com' }
      }
    };
    const result = authReducer(authInitialState, action);
    expect(result).toEqual({
      ...authInitialState,
      currentUser: { id: '123', email: 'test@mail.com' }
    });
  });
});
