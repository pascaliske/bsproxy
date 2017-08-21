import test from 'ava';
import { ProxyServer } from '../dist/index';

test('import is of type function', t => {
    const value = typeof ProxyServer;
    const expected = 'function';

    t.is(value, expected);
});

test('import has constructor function', t => {
    const value = typeof ProxyServer.constructor;
    const expected = 'function';

    t.is(value, expected);
});

test('import can be instanciated with constructor', t => {
    const instance = new ProxyServer();

    const value1 = typeof instance;
    const expected1 = 'object';

    t.is(value1, expected1);

    const value2 = typeof instance.constructor;
    const expected2 = 'function';

    t.is(value2, expected2);
});
