import Button from "../components/button";

function ComingSoon() {
    return (
        <div className="flex flex-col justify-center py-8 px-6 mx-auto max-w-screen-2xl text-left md:text-center lg:py-16">
            <h1 className="text-brand-white mb-3 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">
                Coming Soon
            </h1>
            <div className="flex flex-col">
                <p className="text-[15px] text-brand-white!">
                    We are currently working on our website.
                </p>
                <p className="text-[15px] text-brand-white!">
                    Email to info@nesterin.com for any questions.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 pt-7">
                <Button
                    icon={"instagram"}
                    text={"Follow Us On Instagram"}
                    url={"https://www.instagram.com/thelassilab/"}
                    className={"w-[230px]"}
                />
                <Button
                    icon={"facebook"}
                    text={"Like Us On Facebook"}
                    url={
                        "https://www.facebook.com/profile.php?id=61581302631940"
                    }
                    className={"w-[210px]"}
                />
            </div>
        </div>
    );
}

export default ComingSoon;
