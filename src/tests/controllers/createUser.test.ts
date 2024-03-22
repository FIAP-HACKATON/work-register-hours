import request from 'supertest';
import { userEmailError } from '../mock/user';
import setupApp from '../../main/config/app';

describe('Create user', () => {
  let server;
  let app;

  beforeEach(async function () {
    app = setupApp();
    server = app.listen(4001, () => {});
  });
  afterEach(async function () {
    jest.clearAllMocks();
    server.close();
  });

  test('should return 400 when creating user with error', async () => {
    const response = await request(server).post('/api/user');
    expect(response.status).toBe(400);
  });

  test('should return 400 when creating user with error in email', async () => {
    const response = await request(server)
      .post('/api/user')
      .send(userEmailError);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid param: email');
  });
});
