import React from "react";
import Comment from "./Comment";

const comments = [
    { name: "이인제", comment: "안녕하세요, 인제입니다." },
    { name: "홍길동", comment: "안녕하세요! 리액트 공부 중입니다." },
    { name: "황은석", comment: "리액트 노잼.." },
    { name: "박영희" },
    {comment: "ㅋㅋ"}
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return(<Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
