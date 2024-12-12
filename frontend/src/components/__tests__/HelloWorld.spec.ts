import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders message prop correctly", () => {
    const msg = "Hello Vue 3";
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.text()).toContain(msg);
  });
});
