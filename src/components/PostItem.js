import React from 'react';

function PostHeader({ user, date }){
  return (
    <div className = "post-header">
      <img className = "avatar" src={user.avatar}/>
        <div className = "userInfo">
          <span>{user.name}</span>
          <span>{date}</span>
        </div>
    </div>)
};

function PostComment({ comments }){
  return (
    <div className= "post-comments">
      <div className = "post-listing"/>
        {comments.map(comment => (
          <div key = {comment.id} className = "comment">
            <img className = "avatar" src = {comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
    </div>
  );
}

function PostItem({ user, date, content, comments }){
  return(
    <div className = "post">
      <PostHeader user = {user} date = {date} />
      <p className = "post-content">{content}</p>
      <img className = "post-img" src =  {content.postImg}/>
      <PostComment comments = {comments} />
    </div>
  );
}
export default PostItem