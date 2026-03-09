export interface MenuItemDto {
    name: string;
    description: string;
    image: string | null;
}

export interface MenuCategoryDto {
    categoryName: string;
    items: MenuItemDto[];
}

export interface MenuData {
    environment?: string;
    menuId?: string;
    fetchedAt?: string;
    itemCount?: number;
    items: MenuCategoryDto[];
}
