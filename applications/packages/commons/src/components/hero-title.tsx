import { Navigation } from "@/domains/navigation";

interface Props {
  navigation: Navigation;
}

const HeroTitle: React.FC<Props> = ({ navigation }) => {
  const { name } = navigation;

  return <h1>{name}</h1>;
};

export default HeroTitle;
