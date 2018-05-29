import Vue from 'vue'
import Vuex from 'vuex'
import {  mount, shallow, createLocalVue, RouterLinkStub } from 'vue-test-utils'
import { __createMocks as createStoreMocks } from '../../../src/store/__mocks__/store';
import NavBar from '../../../src/components/NavBar.vue'

// Tell Jest to use the mock
// implementation of the store.
jest.mock('../../../src/store/store');

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NavBar.vue', () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStoreMocks();
    wrapper = shallow(NavBar, {
      store: storeMocks.store,
      getters: storeMocks.getters,
      localVue,
    });
  })

  it('should render correct contents', () => {
    // const Constructor = Vue.extend(NavBar)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.padNavLeft').textContent)
    //   .toEqual('OffBook')
    const p = wrapper.find('.padNavLeft')
    expect(p.element.textContent)
      .toEqual('OffBook')
  })

//   it('should redirect to homepage', () => {
//     const rou = mount(NavBar, {
//   stubs: {
//     RouterLink: RouterLinkStub
//   }
// })
// expect(rou.find(RouterLinkStub).props().to).toBe('/')
//   })

// it('should redirect to homepage', () => {
//   const rou = mount(NavBar, {
// stubs: {
//   RouterLink: 'home'
// }
// })
// expect(rou.find(RouterLink).props().to).toBe('/')
// })

// it('should redirect visitors to home when clicking on logo', () => {
//   Object.defineProperty(window.location, 'href', {
//   writable: true,
//   value: '/listofbooks'
// });
//     // window.location.assign = jest.fn() // Create a spy
//     const p = wrapper.find('.listofbooks')
//     p.trigger('click')
//     expect(window.location.assign).toHaveBeenCalledWith('/listofbooks"');
//   })
})


// import { shallow, createLocalVue } from '@vue/test-utils'
//
// import Actions from '../../../src/components/Actions'
//
//
//
// describe('Actions.vue', () => {
//   let actions
//   let store
//
//   beforeEach(() => {
//     getters = {
//       actionClick: jest.fn(),
//       actionInput: jest.fn()
//     }
//     store = new Vuex.Store({
//       state: {},
//       actions
//     })
//   })
//
//   it('calls store action "actionInput" when input value is "input" and an "input" event is fired', () => {
//     const wrapper = shallow(Actions, { store, localVue })
//     const input = wrapper.find('input')
//     input.element.value = 'input'
//     input.trigger('input')
//     expect(actions.actionInput).toHaveBeenCalled()
//   })
//
//   it('does not call store action "actionInput" when input value is not "input" and an "input" event is fired', () => {
//     const wrapper = shallow(Actions, { store, localVue })
//     const input = wrapper.find('input')
//     input.element.value = 'not input'
//     input.trigger('input')
//     expect(actions.actionInput).not.toHaveBeenCalled()
//   })
//
//   it('calls store action "actionClick" when button is clicked', () => {
//     const wrapper = shallow(Actions, { store, localVue })
//     wrapper.find('button').trigger('click')
//     expect(actions.actionClick).toHaveBeenCalled()
//   })
// })
