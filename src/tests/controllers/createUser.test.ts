import { UserRepository } from '../../infra/database/repositories/User.repository';
import request from 'supertest';
import { user, userCPFError, userEmailError } from '../mock/user';
import setupApp from '../../main/config/app';
import bcrypt from 'bcrypt';

describe('Create user', () => {
    let server;
    let app;
    const userId = 1;

    beforeEach(async function () {
        app = setupApp();
        server = app.listen(4001, () => { });
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
        const response = await request(server).post('/api/user').send(userEmailError);
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid param: email');
    });
});