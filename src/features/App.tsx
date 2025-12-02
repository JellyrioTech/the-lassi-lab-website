import ComingSoon from "./ComingSoon";
import logo from "../assets/logo.svg";
import EventsList from "./EventsList";

function App() {
    return (
        <div
            id="content"
            className="flex flex-col justify-center w-lvw h-lvh bg-(image:--gradient-primary)"
        >
            <section
                id="container"
                className="w-full max-w-[600px] p-4 m-auto gap-[35px] md:gap-[50px]"
            >
                <div className="flex flex-col items-center gap-[38px] md:justify-between md:flex-row md:mt-[70px]">
                    <img
                        src={logo}
                        className="w-[200px] h-[200px] md:w[280px] md:h[280px]"
                    />
                    <EventsList />
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
