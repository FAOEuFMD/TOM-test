import { render } from "@testing-library/vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders a message", () => {
    const { getByText } = render(HelloWorld, {
      props: { msg: "Hello Vue 3" },
    });
    getByText("Hello Vue 3");
  });
});
