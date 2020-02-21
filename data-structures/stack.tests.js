import { Stack } from './stack';
import * as assert from 'assert';

describe('Stack', function () {
    describe('peek', function () {
        it('should return null when the stack is empty', function () {
            const stack = new Stack();
            const expected = null;
            const actual = stack.peek();
            assert.equal(expected, actual);            
        })
    });

    describe('peek', function () {
        it('should return the top item when the stack is not empty', function () {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            const expected = 2;
            const actual = stack.peek();
            assert.equal(expected, actual);            
        })
    });

    describe('pop', function () {
        it('should return null when the stack is empty', function () {
            const stack = new Stack();
            const expected = null;
            const actual = stack.pop();
            assert.equal(expected, actual);            
        })
    });

    describe('pop', function () {
        it('should return the top item when the stack is not empty', function () {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            const expected = 2;
            const actual = stack.pop();
            assert.equal(expected, actual);            
        })
    });

    describe('isEmpty', function () {
        it('should return true when the stack is empty', function () {
            const stack = new Stack();
            const expected = true;
            const actual = stack.isEmpty();
            assert.equal(expected, actual);
        });
        it('should return false when the stack is not empty', function () {
            const stack = new Stack();
            stack.push(1);
            const expected = false;
            const actual = stack.isEmpty();
            assert.equal(expected, actual);
        });
    });
});