import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

function waitForInjections() {
  return new Promise(resolve => setImmediate(resolve));
}

function createWaitForInjections() {
  return () => next => async action => {
    const result = await next(action);
    await waitForInjections();
    return result;
  };
}

const waitForInjectionsMiddleware = createWaitForInjections();

const middlewares = [waitForInjectionsMiddleware, thunk];

export const mockStore = configureStore(middlewares);
const initialState = {};
export const store = mockStore(initialState);
