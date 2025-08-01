import Footer from "@/components/ui/Footer";
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Part time',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$2300',
        description: "The perfect plan if you're just want to try my capabilities and knowledge",
        features: ['Development or cyber security skills set',
            'The same as in full-time job but in more limited scope',
            'Understandable and detailed feedback. With potential impact (optional)',
            'Open-minded and easy to communicate'],
        featured: false,
    },
    {
        name: 'Full time job',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$4000',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Security assessment and code review. Understandable feedback with potential consequences for your business and team',
            'Developing new and support already produced products',
            'Suggestions for code and functionality improvements',
            'Highly developed soft skills allow to work as fully integrated team member even on remote',
            'Open-minded and easy to communicate',
            'Custom integrations',
        ],
        featured: true,
    },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Price() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <main className="flex-grow px-6 py-24 sm:py-32 lg:px-8">
                <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-lime-400 to-cyan-400 opacity-30"
                    />
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base/7 font-semibold text-lime-400">Pricing</h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                        Choose the right plan for you
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                </p>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured ? 'relative bg-lime-500/10 border border-lime-400 shadow-xl' : 'bg-cyan-400/10 border border-cyan-300 sm:mx-8 lg:mx-0',
                                tier.featured
                                    ? ''
                                    : tierIdx === 0
                                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                        : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                                'rounded-3xl p-8 ring-1 ring-inset ring-white/10 sm:p-10 backdrop-blur'
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(tier.featured ? 'text-lime-300' : 'text-cyan-300', 'text-base/7 font-semibold')}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                <span
                    className={classNames(
                        'text-white text-5xl font-semibold tracking-tight'
                    )}
                >
                  {tier.priceMonthly}
                </span>
                                <span className="text-gray-400 text-base">/month</span>
                            </p>
                            <p className="mt-6 text-base/7 text-gray-300">
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10"
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-lime-400"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className="mt-8 block rounded-md bg-lime-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-md hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 sm:mt-10"
                            >
                                Get started today
                            </a>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}