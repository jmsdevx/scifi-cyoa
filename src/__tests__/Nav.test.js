import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Nav from "../layout/Nav";

Enzyme.configure({ adapter: new Adapter() });

describe("Nav", () => {
  let mountedNav;

  const nav = () => {
    if (!mountedNav) {
      mountedNav = shallow(<Nav />);
    }
    return mountedNav;
  };

  it("always renders a nav bar", () => {
    const navbar = nav().find("nav");
    expect(navbar.length).toBeGreaterThan(0);
  });

  describe("the rendered nav bar", () => {
    it("contains links to be rendered", () => {
      const navbar = nav().find("nav");
      const wrappingNav = navbar.first();

      expect(wrappingNav.children()).toEqual(nav().children());
    });
  });
});
