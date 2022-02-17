import React from "react";
import Counter from "../pages/Counter";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  it("성공적으로 렌더링", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.length).toBe(1);
  });
});
