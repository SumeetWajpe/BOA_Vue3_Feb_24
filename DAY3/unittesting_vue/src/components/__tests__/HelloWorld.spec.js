import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    const h1 = wrapper.find("h1");
    // wrapper.findAll("button").at(0).trigger("click");
    expect(h1.text()).toContain("Hello Vitest");
  });
});
