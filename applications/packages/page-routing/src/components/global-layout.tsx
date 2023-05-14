import {
  GlobalHeader,
  HeroTitle,
  Navigation,
  SideNavigation,
} from "@app/commons";

interface Props {
  currentSlugs: string[];
  navigations: Navigation[];
}

const GlobalLayout: React.FC<React.PropsWithChildren<Props>> = ({
  currentSlugs,
  navigations,
  children,
}) => {
  const currentNavigation = {} as Navigation; // TODO

  return (
    <div>
      <GlobalHeader navigations={navigations} />
      {currentSlugs.length > 0 && <HeroTitle navigation={currentNavigation} />}
      <div>
        {currentSlugs.length > 1 && currentNavigation.children && (
          <SideNavigation
            currentSlug="TODO"
            navigations={currentNavigation.children}
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default GlobalLayout;
