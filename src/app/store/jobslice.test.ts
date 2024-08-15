// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import { fetchJobs } from './jobSlice';
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// // Define the initial state and middleware
// const middlewares = [thunk];
// const mockStore = configureMockStore<{}, ThunkDispatch<{}, {}, AnyAction>>(middlewares);

// describe('fetchJobs thunk', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it('creates jobs/fetchJobs/fulfilled when fetching jobs has been done', async () => {
//     const mockJobs = [
//       { id: '1', title: 'Developer', company: 'Company A', location: 'Location A', description: 'Job A' },
//       { id: '2', title: 'Designer', company: 'Company B', location: 'Location B', description: 'Job B' },
//     ];

//     fetchMock.getOnce('https://akil-backend.onrender.com/opportunities/search', {
//       body: mockJobs,
//       headers: { 'content-type': 'application/json' },
//     });

//     const expectedActions = [
//       { type: 'jobs/fetchJobs/pending' },
//       { type: 'jobs/fetchJobs/fulfilled', payload: mockJobs },
//     ];

//     const store = mockStore({ jobs: { jobs: [], status: 'idle', error: null } });

//     await store.dispatch(fetchJobs() as any);

//     expect(store.getActions()).toEqual(expectedActions);
//   });

//   it('creates jobs/fetchJobs/rejected when fetching jobs fails', async () => {
//     fetchMock.getOnce('https://akil-backend.onrender.com/opportunities/search', {
//       throws: new Error('Failed to fetch'),
//     });

//     const expectedActions = [
//       { type: 'jobs/fetchJobs/pending' },
//       { type: 'jobs/fetchJobs/rejected', error: { message: 'Failed to fetch' } },
//     ];

//     const store = mockStore({ jobs: { jobs: [], status: 'idle', error: null } });

//     await store.dispatch(fetchJobs() as any);

//     const actions = store.getActions();
//     expect(actions[0]).toEqual(expectedActions[0]);
//     expect(actions[1].type).toEqual(expectedActions[1].type);
//     expect(actions[1].error?.message).toEqual(expectedActions[1].error.message);
//   });
// });