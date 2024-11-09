// FEEDBACK
export const getFeedback = async () => {
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/post/all",
    {cache: "no-store"}
  );

  const data = response.json();
  return data;
};

export const getFeedbackById = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/post/${id}`,
    {cache: "no-store"},
    {
      method: "GET",
      headers: {
        accept: "*/*"
      }
    }
  );

  const data = response.json();
  return data;
};

export const getCategories = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/feedback/categories`,
    {cache: "no-store"},
    {
      method: "GET",
      headers: {
        accept: "*/*"
      }
    }
  );

  const data = response.json();
  return data;
};

export const getCommentsById = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/post/${id}`,
    {cache: "no-store"},
    {
      method: "GET",
      headers: {
        accept: "*/*"
      }
    }
  );

  const data = response.json();
  return data;
};




export const deleteFeedback = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/feedback/${id}`,
    {cache: "no-store"},
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
    {cache: "no-store"},
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
    {cache: "no-store"},
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
    {cache: "no-store"},
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
    {cache: "no-store"},
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
  const comment = formData.get("comment");
  const id = formData.get("postid");
  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/create",
    {cache: "no-store"},
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "*/*"
      },
      body: {
        "userId": "string",
        id,
        comment
      }
    }
  );

  return response;
};

export const putComments = async (id) => {
  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/update/${id}`,
    {cache: "no-store"},
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
    {cache: "no-store"},
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
    {cache: "no-store"},
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
    {cache: "no-store"},
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
