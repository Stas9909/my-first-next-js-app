// import React, { useEffect, useState } from "react";
import Head from "next/head";

const FeedbackPage = ({ comments }) => {
  // const [comments, setComments] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  //     const data = await res.json();
  //     setComments(data);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <Head>
        <title>burgers | MainPage</title>
        <meta name="title" content="burgers, burgers, burgers" />
        <meta charSet="utf-8" />
      </Head>

      <div>
        <h1>Our reviews:</h1>
        <div className="reviews">
          {comments.length && comments.map((comment) => (
            <div key={comment.id} className="review">
              {`${comment.id}. `}
              {`${comment.body.slice(0, 150)}...`}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data.slice(0, 15)
    }
  }
}

export default FeedbackPage;