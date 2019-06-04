import React from "react";
import { shallow } from "enzyme";
import BookList from "../BookList";

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("BookList  component", () => {
  it("should render without errors", () => {
    const component = shallow(<BookList />);
    const wrapper = component.find(<CardListItem />);
    expect(wrapper.length).toBe(1);
  });
});
