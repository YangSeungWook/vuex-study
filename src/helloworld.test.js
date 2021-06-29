// helloworld.test.js
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  const cmp = new Vue(HelloWorld).$mount();
  expect(cmp.message).toBe('Vue!');
});