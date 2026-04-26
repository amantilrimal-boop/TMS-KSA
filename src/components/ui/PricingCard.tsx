'use client';

type PricingCardProps = {
  plan: string;
  price: string;
  perks: string[];
  featured?: boolean;
};

export default function PricingCard({ plan, price, perks, featured }: PricingCardProps) {
  return (
    <div className={`rounded-[32px] border p-6 shadow-xl transition ${featured ? 'border-amber-300/20 bg-[#0d1f3c]' : 'border-slate-200 bg-white'} ${featured ? 'text-white' : 'text-slate-900'}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">{plan}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className={`text-4xl font-semibold ${featured ? 'text-white' : 'text-[#0d1f3c]'}`}>{price}</span>
        <span className={`text-sm ${featured ? 'text-slate-300' : 'text-slate-600'}`}>/service</span>
      </div>
      <ul className="mt-6 space-y-3">
        {perks.map((perk) => (
          <li key={perk} className={`text-sm leading-7 ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
            • {perk}
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/+966540915000"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${featured ? 'bg-amber-300 text-slate-950 hover:bg-amber-400' : 'bg-[#0d1f3c] text-white hover:bg-[#142a4a]'}`}
      >
        Choose Plan
      </a>
    </div>
  );
}
