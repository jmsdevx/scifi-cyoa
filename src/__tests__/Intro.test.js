import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Layout from "../layout/Layout";
import Intro from "../components/wizard/Intro/Intro";
import { MemoryRouter } from "react-router";
import { Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Intro", () => {
  let mountedIntro;

  const intro = () => {
    if (!mountedIntro) {
      mountedIntro = shallow(<Intro />);
    }
    return mountedIntro;
  };

  it("always renders with layout", () => {
    expect(intro().find(Layout).length).toBe(1);
  });

  it("renders with a title", () => {
    const title = intro().find("h1");
    expect(title.length).toBeGreaterThan(0);
  });

  it("renders the introduction", () => {
    const introduction = intro().find("p");
    expect(introduction.length).toBeGreaterThan(0);
  });

  it("renders a link to the next page", () => {
    const link = intro().find("Link");
    expect(link.length).toBeGreaterThan(0);
  });

  it("renders a button to start the wizard", () => {
    const button = intro().find("button");
    expect(button.length).toBeGreaterThan(0);
  });
});
