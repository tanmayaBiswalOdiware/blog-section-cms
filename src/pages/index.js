import Head from 'next/head'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import fs from "fs";
import path from 'path';
import matter from 'gray-matter';

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const getMarkdownWithMetadata = files.map(filename => matter(fs.readFileSync(path.join("posts", filename).toString())));
  // console.log(getMarkdownWithMetadata);
  return {
    props: {
      posts: JSON.stringify(getMarkdownWithMetadata)
    }
  };
};


export default function Home({posts}) {
  posts = JSON.parse(posts);

  if(!posts || posts.length === 0) {
    return <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <main className={`text-center mt-5 mb-5`}>
        <h3>No Articles Found!</h3>
      </main>
    </>
  }

  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <main className={`container blog-page`}>
        {posts && posts.map(({data}) => {
          return <Link href={"/blog-posts/"+data.slug} key={data.slug}>
            <div className={`${styles["blog-post"]} shadow-sm`}>
              <h4>{data.title}</h4>
              <p className={styles.time}>{new Date(data.date).toLocaleDateString()}</p>
              <p className={styles.description}>Some description</p>
            </div>
          </Link>
        })}
      </main>
    </>
  )
}
