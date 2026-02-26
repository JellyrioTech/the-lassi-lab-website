import { PageLayout } from "../../components/PageLayout";
import MenuItemCard from "../../components/menu-item-card";
import SectionContainer from "../../components/section-container";
import MangoLassi from "../../assets/MangoLassi.png";

const MenuPage = () => {
    return (
        <PageLayout>
            <SectionContainer sectionClassName={"min-h-dvh"}>
                <h1 className="font-display text-[32px] md:text-[50px] text-brand-black text-right">
                    Our Menu
                </h1>
                <div className="flex flex-col">
                    <div className="flex px-[15px] py-[5px] bg-brand-black">
                        <h2 className="font-display text-[24px] md:text-[32px] text-brand-white text-left">
                            Lassi
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-[20px]">
                        <MenuItemCard
                            picture={MangoLassi}
                            name="Mango Cloud Lassi"
                            description="Double Mango Lassi Made with a secret blend of two mango
                    varieties, fresh milk, and rich yogurt. It’s thick, creamy,
                    and sold out at almost every pop-up. Taste the hype."
                        />
                        <MenuItemCard
                            picture={MangoLassi}
                            name="Mango Cloud Lassi"
                            description="Double Mango Lassi Made with a secret blend of two mango
                    varieties, fresh milk, and rich yogurt. It’s thick, creamy,
                    and sold out at almost every pop-up. Taste the hype."
                        />
                    </div>
                </div>
            </SectionContainer>
        </PageLayout>
    );
};

export default MenuPage;
