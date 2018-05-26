import Vue from 'vue';
import Container1 from '../../../src/components/Home/Container1';

describe('Container1.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Container1);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
    .toEqual('Put Some Order In Your Library');
  });
});
