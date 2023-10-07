import React from "react";

const commentdata = [
  {
    name: "Pragun",
    text: "lorem ipsum doler randomasdasdasdad",
    replies: [
      {
        name: "Pragun",
        text: "lorem ipsum doler randomasdasdasdad",
        replies: [
          {
            name: "Pragun",
            text: "lorem ipsum doler randomasdasdasdad",
            replies: [
              {
                name: "Pragun",
                text: "lorem ipsum doler randomasdasdasdad",
                replies: [
                  {
                    name: "Pragun",
                    text: "lorem ipsum doler randomasdasdasdad",
                    replies: [
                      {
                        name: "Pragun",
                        text: "lorem ipsum doler randomasdasdasdad",
                        replies: [
                          {
                            name: "Pragun",
                            text: "lorem ipsum doler randomasdasdasdad",
                            replies: [
                              {
                                name: "Pragun",
                                text: "lorem ipsum doler randomasdasdasdad",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Pragun",
                text: "lorem ipsum doler randomasdasdasdad",
                replies: [
                  {
                    name: "Pragun",
                    text: "lorem ipsum doler randomasdasdasdad",
                    replies: [],
                  },
                ],
              },
              {
                name: "Pragun",
                text: "lorem ipsum doler randomasdasdasdad",
                replies: [
                  {
                    name: "Pragun",
                    text: "lorem ipsum doler randomasdasdasdad",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pragun",
    text: "lorem ipsum doler randomasdasdasdad",
    replies: [
      {
        name: "Pragun",
        text: "lorem ipsum doler randomasdasdasdad",
        replies: [],
      },
    ],
  },
  {
    name: "Pragun",
    text: "lorem ipsum doler randomasdasdasdad",
    replies: [
      {
        name: "Pragun",
        text: "lorem ipsum doler randomasdasdasdad",
        replies: [],
      },
    ],
  },
  {
    name: "Pragun",
    text: "lorem ipsum doler randomasdasdasdad",
    replies: [
      {
        name: "Pragun",
        text: "lorem ipsum doler randomasdasdasdad",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-4 p-2 bg-gray-200 rounded-lg">
      <img
        alt="user Icon"
        className="h-8 pt-2 mx-2"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div>
        <h1 className="font-bold">{name}</h1>
        <h1 className="">{text}</h1>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((eachComment, index) => (
    <div>
      <Comment key={index} data={eachComment} />
      <div className="pl-5 border-l-2 border-black">
        <CommentList comments={eachComment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <>
      <div className="mx-28 font-bold text-xl">Comments</div>
      <div className="mx-28 ">
        <CommentList comments={commentdata} />
      </div>
    </>
  );
};

export default CommentsContainer;
