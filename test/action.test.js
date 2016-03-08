import {expect} from 'chai';
import * as actions from '../app/actions/TodoActions';
import TodoConstants from '../app/constants/TodoConstants';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('basic actions', () => {
    it('should create an action to get todos', () => {
        const expectedAction = {
            type: TodoConstants.GET_TODOS_REQUEST
        };
        expect(actions.getTodosRequest()).to.deep.equal(expectedAction);
    })
});

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', (done) => {

        const expectedActions = [
            {type: TodoConstants.GET_TODOS_REQUEST},
            {type: TodoConstants.GET_TODOS_SUCCESS, todos: [
                {
                    id: 1, text: 'todo1', isDone: false
                },
                {
                    id: 2, text: 'todo2', isDone: true
                }
            ]}
        ];

        const store = mockStore({todos: []}, expectedActions, done);
        store.dispatch(actions.fetchTodos());
    })
});
