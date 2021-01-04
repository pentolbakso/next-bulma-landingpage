import React from "react";
import Link from "next/link";

const BlogTags = ({ tags }) => {
  return (
    <div class="tags mt-3">
      {tags.map((tag) => (
        <Link href={`/blog/tag/${tag.slug}`} passHref>
          <a class="tag">{tag.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default BlogTags;
