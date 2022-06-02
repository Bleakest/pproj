import React, { useState } from "react";
import News from "./News";
import Context from "./Context";
import { Alert } from "react-bootstrap";

export function VkNews() {
  const [news, setNews] = React.useState([{
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
  }])
  const styles = {
    div: {
      margin: "0 auto",
    },
  };

  function removeNews(id) {
    setNews(news.filter((post) => post.id !== id));
  }

  if (news.length == 0) {
    return (
      <Alert variant="success">
        <Alert.Heading>You got no news!</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus
          nunc, vehicula eu justo sit amet, lobortis rhoncus leo. Sed dictum
          vestibulum ante a volutpat. Pellentesque eget mauris sit amet nisl
          faucibus placerat non eu felis. Maecenas ex sem, aliquet nec hendrerit
          quis, porttitor sed libero. Vivamus auctor sit amet nunc eu euismod.
          Vivamus pharetra tristique leo aliquet tincidunt. Integer id justo
          venenatis, consequat dolor ac, convallis metus. Aliquam in bibendum
          augue, a ultrices tortor. Nulla neque ante, cursus ac accumsan eget,
          maximus in nunc. Curabitur non molestie quam, in aliquet leo. In
          commodo ex vel ligula aliquet, a aliquet sem tincidunt.
        </p>
      </Alert>
    );
  } else {
    return (
      <Context.Provider value={{ removeNews }}>
        <div style={styles.div}>
          {news.map((post) => {
            return <News post={post} key={post.id} />;
          })}
        </div>
      </Context.Provider>
    );
  }
}
