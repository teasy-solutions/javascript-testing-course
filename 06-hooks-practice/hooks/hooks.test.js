import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

let testEmail;
let user;

beforeAll(() => {
    testEmail = 'test@test.com';
    console.log("************ beforeAll")
})

beforeEach(() => {
    user = new User(testEmail)
    console.log("beforeEach")
})

afterEach(() => {
    console.log("afterEach")
})

afterAll(() => {
    console.log("************ afterAll")
})

it('should update the email', () => {
    const newTestEmail = 'test2@test.com';

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
    expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
    expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
});
