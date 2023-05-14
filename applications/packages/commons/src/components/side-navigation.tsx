import { Navigation } from "@/domains/navigation";

interface Props {
  navigations: Navigation[];
  currentSlug: string;
}

const SideNavigation: React.FC<Props> = ({ navigations }) => {
  return (
    <aside>
      <nav>
        <ol>
          {navigations.map(({ slug, name }) => (
            <li key={slug}>{name}</li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export default SideNavigation;
