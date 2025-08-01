import {Github, Linkedin, X} from "lucide-react";

export default function Footer(){
    return (
    <footer className="mt-auto w-full bg-lime-400 text-black px-6 py-6">
        <p className="text-sm">aroi.com.ua</p>
        <div className="flex justify-center flex-wrap gap-10 px-4">
            <h3 className="text-3xl font-semibold mt-2">Contacts</h3>
        </div>
        <div className="flex justify-center flex-wrap gap-10 px-4">
            <div className="flex gap-6 mt-4">
                <a href="https://www.linkedin.com/in/andrii-roi/"><Linkedin className="h-12 w-12"/></a>
                <a href="https://github.com/TheUnknownSoul"><Github className="h-12 w-12"/></a>
                <a href="https://x.com/v01d1nc4rn4t3"><X className="h-12 w-12"/></a>
            </div>
        </div>
    </footer>
)
}