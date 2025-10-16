import * as React from "react";
import {Dialog} from "radix-ui";
import {Cross2Icon} from "@radix-ui/react-icons";
import "./styles/dialog-styles.css";
import {useState} from "react";

type MailDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function MailDialog({open, onOpenChange}: MailDialogProps) {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const myEmail = "andriyroy3@gmail.com";

    const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // 1) validation
        if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
            alert("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // 2) packing email body
        const to = (myEmail || "").trim(); // твой адрес
        const subj = `Message from ${name}: ${subject}`.trim();
        const body =
            `${message}\n\n—\nFrom: ${name} <${email}>`
                .replace(/\r?\n/g, '\n'); // нормализуем переносы

        if (!to) {
            alert("Recipient address is not configured.");
            return;
        }

        const params = new URLSearchParams();
        params.set("subject", subj);
        params.set("body", body);

        window.location.href = `mailto:${to}?${params.toString()}`;
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle ">Write an email</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        <p>Connect via email: </p>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="customer-name">
                                Name
                            </label>
                            <input className="Input" id="customer-name"
                                   onChange={(e) => setName(e.target?.value)}
                                   placeholder="Enter your name"
                            />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="subject">
                                Subject
                            </label>
                            <input className="Input" id="subject"
                                   onChange={(e) => setSubject(e.target?.value)}
                                   placeholder="Subject"
                            />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="customer-email">
                                Your email
                            </label>
                            <input className="Input" id="customer-email"
                                   onChange={(e) => setEmail(e.target?.value)}
                                   placeholder="Enter your email"/>
                        </fieldset>

                        <fieldset className="FieldsetTextArea">
                            <label className="Label" htmlFor="email-text-body">
                                Your message
                            </label>
                            <textarea className="TextArea" id="email-text-body"
                                      onChange={e => setMessage(e.target?.value)}
                                      placeholder="Enter your message"/>
                        </fieldset>

                        <div
                            style={{display: "flex", gap: 350, justifyContent: "flex-end", marginTop: 25}}
                        >
                            <Dialog.Close asChild>
                                <button className="Button green" onClick={sendEmail}>Send email</button>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <button className="Button green">Close</button>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <button className="IconButton" aria-label="Close">
                                    <Cross2Icon/>
                                </button>
                            </Dialog.Close>
                        </div>
                        <div
                            style={{display: "flex", justifyContent: "flex-start"}}
                        >
                        </div>
                    </Dialog.Description>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

