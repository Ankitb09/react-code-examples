import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/comment_box';
import { wrap } from 'module';


let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(() => {
    wrapped.unmount();
})

it('has a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


describe('text area tests', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })

    it('has a text area and users can type in', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    });

    it('submits the entered text in text area', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})