interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, idx) => (
        <div key={step.number} className="relative">
          {idx < steps.length - 1 && (
            <div className="absolute right-[-1rem] top-7 hidden h-px w-8 bg-brand-900/15 lg:block" />
          )}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-900 font-heading text-lg font-bold text-gold-400">
            {step.number}
          </div>
          <h3 className="mt-5 font-heading text-lg font-bold text-brand-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-900/60">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
