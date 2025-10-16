import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import Main from '@/components/Main';
import CV from '@/components/CV';
import Price from '@/components/Price';
import { Button } from '@/components/ui/button';
import {MailDialog} from "@/components/ui/MailDialog";


function App() {
    const [open, setOpen] = React.useState(false);

    return (
        <HashRouter>
            <div className="bg-lime-400 flex justify-between items-center px-6 py-4">
                <span className="text-black font-semibold">aroi.com.ua</span>

                <div className="flex items-center space-x-6 text-black justify-center">
                    <Link to="/" className="text-lg">About</Link>
                    <Link to="/cv" className="text-lg">CV</Link>
                    <Link to="/price" className="text-lg">Price</Link>

                    <Button
                        className="relative text-lg bg-black text-white px-4 py-2
                                   border-2 border-transparent
                                   before:content-[''] before:absolute before:inset-0
                                   before:rounded-md before:border-2 before:border-transparent
                                   before:transition
                                  hover:before:border-white"
                        onClick={() => setOpen(true)}
                    >
                        Write an email
                    </Button>

                    <MailDialog open={open} onOpenChange={setOpen} />
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/price" element={<Price />} />
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);