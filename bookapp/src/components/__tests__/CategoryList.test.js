import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import CategoryList from '../CategoryList';
import categoryData from '../../__mocks__/categoryData';

Enzyme.configure({ adapter: new Adapter() });

describe('<CategoryList />', () => {
  const props = {
    categories: categoryData.categories,
    filterFn: jest.fn(),
    activeCategory: categoryData.categories[0].id
  };

  describe('render()', () => {
    it('should have a UL element', () => {
      const wrapper = shallow(<CategoryList {...props} />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('CategoryUL')).toHaveLength(1);
    });

    it('should renders correct number of list items', () => {
      const wrapper = shallow(<CategoryList {...props} />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('CategoryUL').children()).toHaveLength(props.categories.length);
    });

    it('List should have 1 active element', () => {
      const wrapper = shallow(<CategoryList {...props} />);
      expect(wrapper.find('CategoryLI').filterWhere((item) => {
        return item.prop('active') === true;
      })).toHaveLength(1);
    });
  });
});
