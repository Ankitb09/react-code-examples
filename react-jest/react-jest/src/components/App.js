import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from 'components/comment_Box';
import CommentList from 'components/comment_list';

export default () => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>

    )
}