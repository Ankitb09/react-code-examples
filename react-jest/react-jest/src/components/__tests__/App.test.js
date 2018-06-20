import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App.js';
import CommentBox from 'components/comment_Box';
import CommentList from 'components/comment_list';

it('shows a comment box', () => {

    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment list', ()=>{
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentList).length).toEqual(1);
})