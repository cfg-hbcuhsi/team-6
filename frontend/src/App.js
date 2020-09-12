import React, { useState, useEffect } from "react";
import { Typography, Tab } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";
import CardDetails from "./New/CardDetails";
import LawCard from "./New/LawCard";
import NewsCards from "./components/NewsCards/NewsCards";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import useStyles from "./styles";

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key:
        "64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        console.log("====ar", articles);
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "instructions") {
          setIsOpen(true);
        } else if (command === "highlight") {
          setActiveArticle(prevActiveArticle => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Route exact path="/">
          <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </Route>
        <Route exact path="/Law">
          <LawCard articles={newsArticles} activeArticle={activeArticle} />
        </Route>
        <Route exact path="/CardDetails">
          <CardDetails articles={newsArticles} activeArticle={activeArticle} />
        </Route>
      </Router>
    </div>
  );
};

export default App;
