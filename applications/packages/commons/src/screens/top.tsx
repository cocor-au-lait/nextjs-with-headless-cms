import { Top } from "@/domains/top";

type Props = Top;

const TopScreen: React.FC<Props> = ({ hero, slogan }) => {
  return (
    <main>
      <div>{slogan}</div>
      <figure>
        <img src={hero.url} alt={hero.name} />
      </figure>
    </main>
  );
};

export default TopScreen;
