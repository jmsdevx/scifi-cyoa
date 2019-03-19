import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Layout from "../layout/Layout";
import Nav from "../layout/Nav";

Enzyme.configure({ adapter: new Adapter() });

describe("Layout", () => {
  let props;
  let mountedLayout;

  const layout = () => {
    if (!mountedLayout) {
      mountedLayout = shallow(<Layout {...props} />);
    }
    return mountedLayout;
  };

  beforeEach(() => {
    props = undefined;

    mountedLayout = undefined;
  });

  it("always renders a div", () => {
    const divs = layout().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("renders children", () => {
      const divs = layout().find("div");
      const wrappingDiv = divs.first();

      expect(wrappingDiv.children()).toEqual(layout().children());
    });
  });

  it("always renders a 'Nav'", () => {
    expect(layout().find(Nav).length).toBe(1);
  });
});
