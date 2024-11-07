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

  redirect("/");
}
