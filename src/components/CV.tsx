import {Card, CardContent} from "@/components/ui/card";
import {motion} from "framer-motion";
import Footer from "@/components/ui/Footer";

export default function CV() {
    const cardVariants = {
        hidden: {opacity: 0, y: 30},
        visible: (i: number): any => ({
            opacity: 1,
            y: 0,
            transition: {delay: i * 0.2, duration: 0.5, ease: "easeOut"},
        }),
    };

    const skills = [
        {
            title: "Development",
            items: [
                "Languages: Java (11+), JavaScript/TypeScript, Bash, Python",
                "Frameworks: Spring (Boot,Security, Data, Shell), Hibernate, React",
                "Databases: PostgreSQL, MySQL, H2",
                "Build Tools: Maven",
                "Version Control: Git",
                "Deployment: Docker, Apache Tomcat, nginx",
                "Web: HTML5, CSS3, Bootstrap, Tailwind"
            ]
        },
        {
            title: "Cybersecurity",
            items: [
                "Approaches: Black/Gray/White box testing, OWASP Top 10",
                "Tools: Burp Suite, sqlmap, Metasploit,  Gobuster, ffuf, trivy, commix",
                "Password Tools: Hashcat, Hydra, John the Ripper",
                "Vulnerability scanners: Nessus, Nikto, nuclei, Acunetix",
                "Reconnaissance: Nmap, Masscan, Amass, ASNmap, Wireshark",
                "OS: Kali Linux, Parrot Security"
            ]
        },
        {
            title: "DevSecOps & Tooling",
            items: [
                "CI/CD: GitHub/Gitlab Actions",
                "Secure SDLC: Static code analysis, Dependency checks",
                "Deployment: Docker, Kubernetes",
                "Threat modeling: Microsoft Threat Modeling Tool",
                "Vulnerability assessment and monitoring: trivy, falco, calico, CVEmap"
            ]
        }
    ];

    const servicesCard = {
        title: "Services & Results",
        items: [
            "✅ Web Application Penetration Testing (OWASP Top 10, gray/white box)",
            "✅ Secure Code Reviews for Java Spring Boot applications",
            "✅ DevSecOps integration & pipeline hardening",
            "🔍 30+ vulnerabilities discovered and documented (XSS, SQLi, IDOR, etc)",
            "🛡️ 12+ internal systems tested and secured for banks and startups",
            "👨‍🏫 Mentorship and training delivered to 40+ junior developers"
        ]
    };

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <main className="flex-grow py-10 flex flex-col gap-10">
                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((block, i) => (
                        <motion.div
                            key={block.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            variants={cardVariants}
                        >
                            <Card className="rounded-2xl shadow-md p-4">
                                <CardContent>
                                    <h3 className="text-xl font-semibold mb-3 text-white">{block.title}</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-white">
                                        {block.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    custom={skills.length}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={cardVariants}
                    className="max-w-5xl mx-auto w-full"
                >
                    <Card className="rounded-2xl shadow-lg p-8">
                        <CardContent>
                            <h3 className="text-2xl font-semibold mb-4 text-center text-white">{servicesCard.title}</h3>
                            <ul className="list-none pl-0 space-y-2 text-base text-white">
                                {servicesCard.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-green-500 mr-2">✔</span>
                                        <span>{item.replace(/^✅ /, "")}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center mt-6">
                                <a
                                    href="https://raw.githubusercontent.com/TheUnknownSoul/cv-site/refs/heads/master/public/cv/Andrii_Roi_Software_and_Security_Engineer.pdf"
                                    download
                                    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
                                >
                                    Download Resume (PDF)
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>
            <Footer/>
        </div>
    );
}

