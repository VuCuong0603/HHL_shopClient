import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function FacebookSign() {
  const { data: Session } = useSession();

  if (Session) {
    return (
      <div>
        <button onClick={() => signOut()}>thoat</button>
      </div>
    );
  } else {
    return (
      <div className="form__btns">
        <button
          type="button"
          className="btn-social fb-btn"
          onClick={() => signIn("facebook")}
        >
          <i className="icon-facebook"></i>Facebook
        </button>
        <button
          type="button"
          className="btn-social google-btn"
          onClick={() => signIn("google")}
        >
          <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
        </button>
      </div>
    );
  }
}
