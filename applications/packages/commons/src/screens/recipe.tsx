import Markdown from "markdown-to-jsx";

import { Recipe } from "@/domains/recipe";

type Props = Recipe;

const RecipeScreen: React.FC<Props> = ({
  name,
  times,
  ingredients,
  preparation,
}) => {
  return (
    <main>
      <h2>{name}</h2>
      <p>Time: {times} mins</p>
      <h3>INGREDIENTS</h3>
      <Markdown>{ingredients}</Markdown>
      <h3>PREPARATION</h3>
      <Markdown>{preparation}</Markdown>
    </main>
  );
};

export default RecipeScreen;
