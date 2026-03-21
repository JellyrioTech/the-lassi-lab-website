import { PageLayout } from "../../components/PageLayout";
import SectionContainer from "../../components/section-container";

const CateringPage = () => {
    return (
        <PageLayout>
            <SectionContainer sectionClassName="min-h-dvh">
                <h1 className="font-heading text-[32px] md:text-[50px] text-brand-black text-right">
                    Catering Menu
                </h1>
            </SectionContainer>
        </PageLayout>
    );
};

export default CateringPage;
