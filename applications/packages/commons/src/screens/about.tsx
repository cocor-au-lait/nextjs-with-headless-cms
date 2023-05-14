import Markdown from "markdown-to-jsx";

import { About } from "@/domains/about";

type Props = About;

const AboutScreen: React.FC<Props> = ({ content }) => {
  return (
    <main>
      <Markdown>{content}</Markdown>
    </main>
  );
};

export default AboutScreen;
