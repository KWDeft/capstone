import React, { useState } from 'react';
import { Comment, Avatar, Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import client from '../../lib/api/client';

const { TextArea } = Input;

function SingleComment(props) {
  const [OpenReply, setOpenReply] = useState(false);
  const [CommentValue, setCommentValue] = useState('');
  const [userId, setUserId] = useState('');

  const user = useSelector((state) => state.user);

  const userIdHandler = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    const variables = {
      content: content,
      userId: userId,
      postId: props.postId,
      responseTo: props.comment._id,
    };
    client
        .post('/api/course/comment', variables)
        .then((response) => {
            if (response.data.success) {
                console.log(response.data.result);
                setCommentValue(''); //저장후 빈칸으로 만들기 위해
                props.refreshFunction(response.data.result);
            } else {
                alert('커멘트를 저장하지 못했습니다.');
            }
            });
  };
  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply);
  };
  const onHandleChange = (event) => {
    setCommentValue(event.currentTarget.value);
  };
  const actions = [
    <span onClick={onClickReplyOpen} key="comment-basic-reply-to">
      Reply to
    </span>,
  ];
  return (
    <div>
      <Comment
        actions={actions}
        author={props.comment.writer.name}
        avatar={<Avatar src={props.comment.writer.image} alt />}
        content={<p>{props.comment.content}</p>}
      />
      {OpenReply && ( //openReply값이 true일때만 대댓글창을 보이게만듬
        <form style={{ display: 'flex' }} onSubmit={onsubmit}>
          <input
            name="userId"
            value={userId}
            onChange={userIdHandler} 
          />
          <textarea
            style={{ width: '100%', borderRadius: '5px' }}
            onChange={onHandleChange}
            value={CommentValue}
            placeholder="코멘트를 작성해 주세요"
          />
          <br />
          <button style={{ width: '20%', height: '52px' }} onClick={onsubmit}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default SingleComment;