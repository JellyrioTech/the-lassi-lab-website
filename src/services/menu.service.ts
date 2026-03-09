import type { MenuData } from "../types/Menu.type";

/**
 * Loads menu data. For now reads from static menu.json; replace with API call when ready.
 */
export async function getMenu(): Promise<MenuData> {
    const data = await import("../data/menu.json");
    return data.default as MenuData;
}
