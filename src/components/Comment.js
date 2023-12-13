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
    <div className="flex p-2 w-full  hover:bg-gray-300  rounded-lg">
      <div className="w-auto flex-shrink-0">
        <a href={authorChannelUrl}>
          {" "}
          <img
            alt="user Icon"
            className="  object-cover mt-2 rounded-2xl "
            src={authorProfileImageUrl}
          />
        </a>
      </div>
      <div className="mx-4">
        <div className="font-bold mx-auto text-md md:text-lg">
          {authorDisplayName}
        </div>
        <div className="px-2 text-sm">
          {new Date(publishedAt).toLocaleDateString()}
        </div>
        <p className="text-sm md:text-md flex">{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
