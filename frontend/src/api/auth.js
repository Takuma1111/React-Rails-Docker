//cilent.jsで作成したclientを使用してRailsで作成したAPIを設定していく
import client from "./client";
import Cookies from "js-cookie";

// サインアップ
export const signUp = (params) => {
  return client.post("/auth", params);
};

// サインイン
export const signIn = (params) => {
  const para = {
    email: params["email"],
    password: params["password"]
  };
  console.log("ここからログ");
  console.log(params);
  console.log(para);
  return client.post("/auth/sign_in",params);
};

// サインアウト
export const signOut = () => {
  return client.delete("/auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// ログインユーザーの取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};