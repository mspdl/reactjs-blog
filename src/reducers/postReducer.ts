import { Post } from "@/types/Post";

type AddAction = {
  type: "add";
  payload: {
    title: string;
    body: string;
  };
};

type PostAction = AddAction;

export const postReducer = (posts: Post[], action: PostAction) => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: Date.now,
          title: action.payload.title,
          body: action.payload.body,
        },
      ];

    default:
      return posts;
  }
};
