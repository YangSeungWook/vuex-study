<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
// helloworld.test.js
import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  const wrapper = shallowMount(HelloWorld);
  expect(wrapper.vm.message).toBe('Vue!');
});
</script>

