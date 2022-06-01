import React, { useState } from "react";
import News from "./News";
import Context from "./Context";

export function VkNews() {
  const [news, setNews] = React.useState([
    {
      id: 1,
      title: "Hello guys, how everybody doing tonight?",
      header: "Jon Doe",
      footer: "was online 5min ago",
    },
    {
      id: 2,
      title: "Come to my concert!",
      header: "Lena Tonra",
      footer: "was online 40min ago",
    },
    {
      id: 3,
      title: "Here comes the sun",
      header: "Paul McCartney",
      footer: "online",
    },
  ]);
  const styles = {
    div: {
      margin: "0 auto",
    },
  };

  function removeNews(id) {
    setNews(news.filter(post => post.id !== id))
  }
  return (
    <Context.Provider value={{removeNews}}>
      <div style={styles.div}>
        {news.map((post) => {
          return <News post={post} key={post.id} />;
        })}
      </div>
    </Context.Provider>
  );
}
