import nock from 'nock';

const url = 'http://localhost:3333';

nock(url)
    .get('/todos')
    .reply(200, [
        {
            id: 1, text: 'todo1', isDone: false
        },
        {
            id: 2, text: 'todo2', isDone: true
        }
    ]);