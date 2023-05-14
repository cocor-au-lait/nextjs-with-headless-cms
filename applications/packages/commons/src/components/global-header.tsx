import { Navigation } from "@/domains/navigation";

interface Props {
  navigations: Navigation[];
}

const GlobalHeader: React.FC<Props> = ({ navigations }) => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ol>
          {navigations.map(({ slug, name, children }) => (
            <li key={slug}>{name}</li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default GlobalHeader;
