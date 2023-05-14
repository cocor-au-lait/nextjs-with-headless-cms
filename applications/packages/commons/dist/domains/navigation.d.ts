export declare enum Level {
    ROOT = "ROOT",
    LEVEL_1 = "LEVEL_1",
    LEVEL_2 = "LEVEL_2"
}
export interface Navigation {
    slug: string;
    level: Level;
    name: string;
    children: Navigation[];
}
