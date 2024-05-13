import { mount } from '@vue/test-utils';
import MyComponent from '../src/components/MyComponent.vue';

describe('MyComponent', () => {
  test('should be display correct content', () => {
    const options = {
      props: {
        initialCount: 0,
      },
    };
    const wrapper = mount(MyComponent, options);
    expect(wrapper.find('.title').text()).toBe('MyComponent');
    expect(wrapper.find('.count').text()).toBe('0');
    expect(wrapper.find('.btnAdd').text()).toBe('add count');
  });

  test('btnAdd click can add count', async () => {
    const options = {
      props: {
        initialCount: 0,
      },
    };
    const wrapper = mount(MyComponent, options);
    expect(wrapper.find('.count').text()).toBe('0');

    await wrapper.find('.btnAdd').trigger('click');
    expect(wrapper.find('.count').text()).toBe('1');
  });
});
