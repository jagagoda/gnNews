import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Article } from "components/Articles/types";
import { TestContainer } from "utils";

import ArticleCard from "./ArticleCard";

describe("ArticleCard", () => {
  const article: Article = {
    author: "Jagoda",
    content: "Bla bla bla",
    description: "Bla",
    publishedAt: "2023-11-11T12:00:00.000Z",
    source: null,
    title: "Article",
    url: "https://url.pl",
    urlToImage: "https://images.placeholders.dev/?width=1055&height=100",
  };

  const setup = (article: Article) => {
    return render(
      <TestContainer>
        <ArticleCard {...article} />
      </TestContainer>
    );
  };

  test("should article card render title", async () => {
    setup(article);

    const { findByTestId } = screen;

    const element = await findByTestId("title");

    expect(element).not.toBeNull();
    expect(element.innerHTML).toBe(article.title);
  });

  test("should article card render description", async () => {
    setup(article);

    const { findByTestId } = screen;

    const element = await findByTestId("description");

    expect(element).not.toBeNull();
    expect(element.innerHTML).toBe(article.description);
  });
});
