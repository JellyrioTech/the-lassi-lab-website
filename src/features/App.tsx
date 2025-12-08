import ComingSoon from "./ComingSoon";
import logo from "../assets/logo.svg";
import EventsList from "./EventsList";

function App() {
    return (
        <div id="content" className=" bg-brand-primary">
            <section
                id="container"
                className="w-full max-w-[660px] py-4 pt-14 mx-auto"
            >
                <div className="flex flex-col items-center md:h-[280px] md:justify-evenly md:flex-row md:mt-[70px]">
                    <div className="flex justify-center mb-9 md:mb-0 md:px-4 md:w-2/5">
                        <img
                            src={logo}
                            className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] drop-shadow-img"
                        />
                    </div>
                    <div className="w-full px-6 md:h-full md:flex md:items-start md:pt-6 md:gap-5 md:w-3/5">
                        <div className="hidden md:block w-px h-full md:border-l md:border-brand-white"></div>
                        <div className="mt-5 w-full">
                            <EventsList />
                        </div>
                    </div>
                </div>

                <ComingSoon />
            </section>
            <footer className="m-auto p-4">
                <p className="text-center text-[9px] font-bold text-brand-black">
                    Copyright © 2025 Nesterin LLC, dba The Lassi Lab.
                </p>
            </footer>
        </div>
    );
}

export default App;
