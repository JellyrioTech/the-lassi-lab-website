import { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import MenuItemCard from "../../components/menu-item-card";
import SectionContainer from "../../components/section-container";
import type { MenuData } from "../../types/Menu.type";
import { getMenu } from "../../services/menu.service";

const MenuPage = () => {
    const [menu, setMenu] = useState<MenuData | null>(null);

    useEffect(() => {
        getMenu().then(setMenu);
    }, []);

    if (!menu) {
        return (
            <PageLayout>
                <SectionContainer sectionClassName="min-h-dvh flex items-center justify-center">
                    <p className="font-text text-brand-black">Loading menu…</p>
                </SectionContainer>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <SectionContainer sectionClassName="min-h-dvh">
                <h1 className="font-heading text-[32px] md:text-[50px] text-brand-black text-right">
                    Our Menu
                </h1>
                <div className="flex flex-col gap-10 mt-8">
                    {menu.items.map((category) => (
                        <div
                            key={category.categoryName}
                            className="flex flex-col"
                        >
                            <div className="flex px-[15px] py-[5px] bg-brand-black">
                                <h2 className="font-heading text-[24px] md:text-[32px] text-brand-white text-left">
                                    {category.categoryName}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-[20px]">
                                {category.items.map((item) => (
                                    <MenuItemCard
                                        key={item.name}
                                        picture={
                                            item.image ??
                                            "https://www.svgrepo.com/show/451131/no-image.svg"
                                        }
                                        name={item.name}
                                        description={item.description || "—"}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </PageLayout>
    );
};

export default MenuPage;
