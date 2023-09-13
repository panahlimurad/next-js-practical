
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";





const BlogPost = ({params}) => {
  
  const id = params.id

  let imageUrl = ""


  if(id === "illustrations"){
    imageUrl = "/illustrations.png"
  }else if( id === "websites"){
    imageUrl = "/websites.png"
  }else if( id === "application"){
    imageUrl = "/app.png"
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topTextContainer}>
          <h1>Test</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src={imageUrl}
            fill={true}
            alt="blog"
          />
        </div>
      </div>
      <div className={styles.textBottom}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
