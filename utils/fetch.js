// FEEDBACK
export const getFeedback = async () => {
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/feedback"
  );

  return response;
};

export const deleteFeedback = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/feedback/${id}`,
    {
      method: "DELETE",
      headers: {
        accept: "*/*"
      }
    }
  );

  return response;
};

export const postFeedback = async (formData) => {
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/feedback",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "*/*"
      },
      body: {
        "title": "string",
        "detail": "string",
        "userId": "string",
        "created": "2024-10-31T17:51:35.005Z"
      }
    }
  );

  return response;
};

export const putFeedback = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/feedback/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        accept: "*/*"
      },
      body: {
        "title": "string",
        "detail": "string",
        "userId": "string",
        "created": "2024-10-31T17:51:35.005Z"
      }
    }
  );

  return response;
};

// COMMENTS
export const getComments = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/post/${id}`,
    {
      method: "GET",
      headers: {
        accept: "*/*"
      }
    }
  );

  return response;
};

export const deleteComments = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        accept: "*/*"
      }
    }
  );

  return response;
};

export const postComments = async (formData) => {
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/create",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "*/*"
      },
      body: {
        "userId": "string",
        "postId": 0,
        "commentName": "string"
      }
    }
  );

  return response;
};

export const putComments = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/update/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        accept: "*/*"
      },
      body: {
        "userId": "string",
        "postId": 0,
        "commentName": "string"
      }
    }
  );

  return response;
};

// VOTE
export const getVote = async () => {
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/vote/all",
    {
      method: "GET",
      headers: {
        accept: "*/*"
      }
    }
  );

  return response;
};

export const deleteVote = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/vote/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        accept: "*/*"
      }
    }
  );

  return response;
};

export const postVote = async () => {
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/vote/create",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "*/*"
      },
      body: {
        "userId": "string",
        "postId": 0
      }
    }
  );

  return response;
};
