const Comment = ({ data }) => {
  // console.log(data);
  const {
    authorDisplayName,
    authorChannelUrl,
    authorProfileImageUrl,
    textOriginal,
    publishedAt,
  } = data;

  return (
    <div className="flex   p-2 w-full border-b-1 hover:bg-gray-300  rounded-lg">
      <a href={authorChannelUrl}>
        {" "}
        <img
          alt="user Icon"
          className="h-10 w-10 mt-2 rounded-2xl "
          src={authorProfileImageUrl}
        />
      </a>
      <div className="mx-4">
        <span className="font-bold text-lg">{authorDisplayName}</span>
        <span className="px-2 text-sm">
          {new Date(publishedAt).toLocaleDateString()}
        </span>
        <h1 className="">{textOriginal}</h1>
      </div>
    </div>
  );
};

export default Comment;
