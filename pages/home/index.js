import { useEffect, useState } from "react";
import Head from "next/head";
import Post from "../../components/post";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Next.js + Storyblok</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0
        ? posts.map((p) => (
            <Post
              alt={p.content.alt}
              date={p.content.date}
              key={p.content.title}
              image={p.content.image}
              title={p.content.title}
              url={p.content.url}
            />
          ))
        : null}
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://api.storyblok.com/v1/cdn/stories?starts_with=posts&token=${process.env.API_TOKEN}`
  );
  const { stories } = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: [...stories],
    },
  };
}

export default HomePage;
