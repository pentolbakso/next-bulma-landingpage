import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

const BlogList = ({ posts }) => {
  return (
    <>
      {posts.map((post, idx) => (
        <div class="block mt-3" key={idx}>
          <div class="is-size-7 has-text-grey">
            {dayjs(post.date).format("DD MMM YYYY")}
          </div>
          <div class="is-size-4">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
