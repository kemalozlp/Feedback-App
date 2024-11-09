"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/auth/login",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    }
  );
  const data = await response.text();
  if (!response.ok) {
    console.log(data);

    return {
      error: "Giriş Yapılamadı",
    };
  }

  const responseCookie = response.headers.get("set-cookie");
  const cookiesArray = responseCookie.split(",");
  const a = cookiesArray.flatMap((x) => x.split(";"));
  const cookiesObject = {};
  a.forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    cookiesObject[key] = value;
  });
  console.log(cookiesObject);

  console.log(cookiesObject[".AspNetCore.Identity.Application"]);

  cookies().set(
    ".AspNetCore.Identity.Application",
    cookiesObject[".AspNetCore.Identity.Application"]
  );

  redirect("/");
}

export async function saveFeedback(formData) {
  console.log(formData);
  const title = formData.get("title");
  const detail = formData.get("detail");

  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/post/create",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
        accept: "/",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        title,
        detail,
        categoryId: 1,
        status: 0,
      }),
    }
  );

  console.log(response);
}

export async function saveComment(formData) {
  const comment = formData.get("comment");
  const id = formData.get("postid");

  const response = await fetch(
    "https://feedbackboardapi.muhammetcoskun.com.tr/api/comment/create",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "/",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        userId: "d0b351b5-b6e6-428d-b866-db39720b9e44",
        postId: id,
        commentName: comment,
      }),
    }
  );

  console.log(response);
}

export async function editPost(formData) {
  const title = formData.get("title");
  const detail = formData.get("detail");
  const id = formData.get("editid");

  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/post/update${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        accept: "/",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        title: title,
        detail: detail,
        categoryId: 1,
        status: 0,
      }),
    }
  );

  console.log(response);
}

export async function deletePost(formData) {
  const id = formData.get("editid");

  const response = await fetch(
    `https://feedbackboardapi.muhammetcoskun.com.tr/api/post/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        accept: "*/*",
        Cookie: cookies().toString(),
      },
    }
  );

  console.log(response);
}
