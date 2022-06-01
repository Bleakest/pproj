import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import Context from "./Context";

export default function News({ post }) {
  const {removeNews} = useContext(Context);
  const styles = {
    div: {
      marginBottom: "15px",
      minWidth: "900px",
      border: "1px solid rgb(144, 143, 143)",
      borderRadius: "5px",
    },
    header: {
      textAlign: "center",
    },
    h3: {
      padding: "1rem",
    },
    footer: {
      padding: "10px",
    },
  };
  return (
    <div className="bg-dark mt-2" style={styles.div}>
      <Button variant="danger" onClick={() => removeNews(post.id)}>Delete</Button>
      <header style={styles.header}>
        <h1 style={styles.h1}>{post.header}</h1>
      </header>
      <h3 style={styles.h3}>{post.title}</h3>
      <footer style={styles.footer}>
        <div>{post.footer}</div>
      </footer>
    </div>
  );
}
