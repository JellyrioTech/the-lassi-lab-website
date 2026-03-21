import { PageLayout } from "../../components/PageLayout";
import SectionContainer from "../../components/section-container";
import Button from "../../components/button";
import cateringMenuPdf from "../../assets/Catering Menu.pdf";

const CateringPage = () => {
    const openPdf = () => {
        window.open(cateringMenuPdf, "_blank", "noopener,noreferrer");
    };

    return (
        <PageLayout>
            <SectionContainer sectionClassName="min-h-dvh">
                <div className="flex flex-col gap-8">
                    <div className="text-left md:text-right">
                        <h1 className="font-heading text-[32px] md:text-[50px] text-brand-black">
                            Global Fusion Catering
                        </h1>
                        <p className="font-subheading text-brand-black text-base md:text-lg mt-4 max-w-3xl md:ml-auto leading-relaxed">
                            From office late-nights to home celebrations, we
                            bring the heat. Experience our signature chicken
                            curry bowls, crispy paratha rolls, and refreshing,
                            protein-packed lassi. Chef-prepared,
                            safety-certified, and delivered fresh.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start md:justify-end items-stretch sm:items-center">
                        <Button
                            type="primary"
                            text="Open catering menu (PDF)"
                            onTap={openPdf}
                            className="w-full sm:w-fit self-start md:self-auto"
                        />
                        <a
                            href={cateringMenuPdf}
                            download="The-Lassi-Lab-Catering-Menu.pdf"
                            className="font-text font-bold text-left md:text-right text-brand-primary-dark underline decoration-2 underline-offset-4 py-2 px-0 sm:px-4 hover:text-brand-primary self-start md:self-auto"
                        >
                            Download PDF
                        </a>
                    </div>

                    <p className="font-text text-sm text-brand-black/70 text-left md:text-right">
                        Full packages, pricing, and options are in the menu
                        below. On some phones you may need to use Download to
                        view the PDF.
                    </p>

                    <div className="w-full rounded-2xl overflow-hidden border-2 border-brand-black bg-brand-white shadow-sm min-h-[70vh] md:min-h-[85vh]">
                        <iframe
                            title="The Lassi Lab catering menu"
                            src={`${cateringMenuPdf}#toolbar=1`}
                            className="w-full h-[70vh] md:h-[85vh] min-h-[500px]"
                        />
                    </div>
                </div>
            </SectionContainer>
        </PageLayout>
    );
};

export default CateringPage;
