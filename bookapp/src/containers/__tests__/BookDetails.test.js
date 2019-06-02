import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { App } from '../App';
import RecipeData from '../../__mocks__/data';

Enzyme.configure({ adapter: new Adapter() });

describe()