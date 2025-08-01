import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import TypingText from "@/components/effects/typing_text";
import Footer from "@/components/ui/Footer";

export default function Main() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const hasVisited = localStorage.getItem("visited");

        let timer: ReturnType<typeof setTimeout>;

        if (hasVisited) {
            setLoading(false);
        } else {
            timer = setTimeout(() => {
                setLoading(false);
                localStorage.setItem("visited", "true");
            }, 2500);
        }

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-green-400 flex items-center justify-center font-mono text-xl animate-pulse">
                Initializing scripts...
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen font-sans flex flex-col">
            <main className="flex-grow">
                <div className="text-center py-12 px-6">
                    <h1 className="text-3xl font-bold leading-snug">
                        Software Development and <br /> Ethical Hacking
                    </h1>
                    <p className="text-gray-400 mt-2">
                        I help find vulnerabilities, improve security and develop stable systems.
                    </p>

                    <div className="flex justify-center mt-8">
                        <img
                            src="/cv-site/assets/andrii.png"
                            alt="Andrii Roi"
                            className="rounded-full border-4 border-red-500 w-65 h-65 object-cover"
                        />
                    </div>
                </div>

                <div className="bg-cyan-200 text-black px-6 py-4 text-2xl font-stretch-extra-expanded">
                    <p>
                        <strong>Andrii Roi</strong>
                        <br />
                        <TypingText text=">> Developer and ethical hacker with more than 4 years of experience. My specialization is developing and securing web applications." />
                    </p>
                </div>

                <section className="text-center py-10">
                    <h2 className="text-lime-400 text-3xl font-semibold mb-8">Technologies:</h2>
                    <div className="flex justify-center flex-wrap gap-10 px-4">
                        <img src="/cv-site/assets/java.svg" alt="Java" className="h-12" />
                        <img src="/cv-site/assets/javascript.svg" alt="JavaScript" className="h-12" />
                        <img src="/cv-site/assets/mysql.svg" alt="MySQL" className="h-12" />
                        <img src="/cv-site/assets/spring.svg" alt="Spring" className="h-12" />
                        <img src="/cv-site/assets/typescript.svg" alt="TypeScript" className="h-12" />
                        <img src="/cv-site/assets/python.svg" alt="Python" className="h-12" />
                        <img src="/cv-site/assets/react.svg" alt="React" />
                    </div>
                </section>

                <section className="text-center py-10">
                    <h2 className="text-lime-400 text-3xl font-semibold mb-8">Services:</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
                        <Card className="bg-lime-400 text-black max-w-sm">
                            <CardContent className="p-6">
                                <div className="flex justify-center flex-wrap gap-10 px-4">
                                    <img src="/assets/shield.svg" alt="" />
                                </div>
                                <p className="text-2xl font-medium">
                                    • Providing DevSecOps methodologies and securing CI/CD and defending web applications
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-lime-400 text-black max-w-sm">
                            <CardContent className="p-6">
                                <div className="flex justify-center flex-wrap gap-10 px-4">
                                    <img src="/assets/sword.svg" alt="" />
                                </div>
                                <p className="text-2xl font-medium">
                                    • Conducting penetration tests via white/gray/black box techniques
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-lime-400 text-black max-w-sm">
                            <CardContent className="p-6">
                                <div className="flex justify-center flex-wrap gap-10 px-4">
                                    <img src="/assets/terminal.svg" alt="" />
                                </div>
                                <p className="text-2xl font-medium">• Full Stack Development of web applications</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
