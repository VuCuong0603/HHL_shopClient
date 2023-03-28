import React from "react";
import Link from "next/link";

const News = ({ id, title, detail, image }: any) => {
  return (
    <div>
      <div style={{ padding: "2rem" }}>
        <h2>{title}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "0.5rem",
          }}
        >
          <img
            src={`${image}`}
            style={{ width: "100px", objectFit: "contain" }}
          />
          <Link href={`/news/${id}`}>
            <p
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {detail}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
