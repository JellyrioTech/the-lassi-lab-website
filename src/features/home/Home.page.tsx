import Button from "../../components/button";
import HeaderHeroImage from "../../assets/Header_Hero_Image.png";

const HomePage = () => {
    return (
        <div className="bg-brand-white">
            <section className="w-full bg-brand-secondary py-[60px]">
                <div className="container mx-auto">
                    <div className="flex flex-col mx-3 sm:mx-0">
                        {/* Header Menu */}
                        <div className="flex flex-col justify-between items-center md:flex-row">
                            <div className="flex flex-col">
                                <h1 className="font-display text-brand-black text-2xl lg:text-4xl">
                                    Creamy Lassi & Sizzling Eats
                                </h1>
                                <p className="font-text text-brand-black text-[16px] mt-[10px]">
                                    From Mango fusion to spicy hot bites, we
                                    bring the best of global street food
                                    straight to your neighborhood.
                                </p>
                                <Button
                                    className="w-fit mt-[25px]"
                                    icon={"instagram"}
                                    text={"See Upcoming Events"}
                                    type={"primary"}
                                    onTap={() => {}}
                                />
                            </div>
                            <img
                                src={HeaderHeroImage}
                                className="w-[80%] mt-[30px] sm:w-[400px] md:w-[250px] lg:w-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
