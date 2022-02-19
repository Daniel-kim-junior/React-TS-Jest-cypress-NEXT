import React from "react";
import Counter from "../pages/Counter";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  let wrapper: ShallowWrapper;
  it("성공적으로 렌더링", () => {
    wrapper = shallow(<Counter/>);
    expect(wrapper.length).toBe(1);
  });

  it("타이틀 인풋이 렌더링 되어야합니다.", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('#title').length).toEqual(1);
  })

  it("타이틀이 변경 되어야 합니다.", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find("#title").simulate("change", {
      currentTarget: {
        value: "값"
      }
    });
  })
});
