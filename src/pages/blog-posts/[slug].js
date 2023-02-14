import React from 'react';
import fs from "fs";
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import styles from '@/styles/Home.module.css'

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    // console.log("files: ", files);
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace(".md", "")
      }
    }));
    console.log("paths: ", paths);
  
    return {
      paths,
      fallback: false
    };
  };
  
  export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("posts", slug + ".md"))
      .toString();
  
    const parsedMarkdown = matter(markdownWithMetadata);
  
    const htmlString = marked(parsedMarkdown.content);
  
    return {
      props: {
        htmlString,
        data: JSON.stringify(parsedMarkdown.data)
      }
    };
  };

const Id = ({htmlString, data}) => {
  data = JSON.parse(data);
  console.log(data);
  return (
      <div className='container mt-4 mb-4 blog-content'>
          <h1>{data.title}</h1>
          {/* <p className={styles.time}>By {findAuthor(data.author)}</p> */}
          <p className={styles.time}>{new Date(data.date).toLocaleDateString()}</p>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: htmlString}} />
      </div>
  );
}

export default Id;
