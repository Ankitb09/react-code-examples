import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import BookList from '../BookList';
import data from '../../__mocks__/booksData';

Enzyme.configure({ adapter: new Adapter() });

describe('<BookList />', () => {
  let normalisedObj = {};
  data.books.forEach(ele => {
    normalisedObj[ele.id] = ele;
  });
  const props = {
    sublist: ["5c5ae9fc608b273a52570422", "5c5ae9fc608b273a52570423", "5c5ae9fc608b273a52570424", "5c5ae9fc608b273a52570425"],
    list: normalisedObj
  };

  describe('render()', () => {
    it('should have a UL element', () => {
      const wrapper = shallow(<BookList {...props} />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('UlList')).toHaveLength(1);
    });

    it('should renders correct number of list items', () => {
      const wrapper = shallow(<BookList {...props} />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('UlList').children()).toHaveLength(props.sublist.length);
    });
  });
});
