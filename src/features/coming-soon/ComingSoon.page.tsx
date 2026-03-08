import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout";
import Button from "../../components/button";

const ComingSoonPage = () => {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16">
                <div className="max-w-lg text-center space-y-6">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary">
                        Coming Soon
                    </h1>
                    <p className="font-text text-brand-black text-lg md:text-xl">
                        We’re working on this page. Meanwhile, explore our home
                        page to see what we’re all about.
                    </p>
                    <Button
                        type="primary"
                        text="Explore our home page"
                        onTap={() => navigate("/")}
                        className="mt-4"
                    />
                </div>
            </main>
        </PageLayout>
    );
};

export default ComingSoonPage;
