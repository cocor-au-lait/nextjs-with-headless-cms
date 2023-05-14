import { Navigation } from "@/domains/navigation";
interface Props {
    navigations: Navigation[];
    currentSlug: string;
}
declare const SideNavigation: React.FC<Props>;
export default SideNavigation;
