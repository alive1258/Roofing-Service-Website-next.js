import Image from "next/image";

const OurStory = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/roofing/our-story.jpg"
            alt="Our roofing crew at a construction site at sunset"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Story
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Roofing Built on Quality, Trust & Experience
          </h2>
          <div className="mt-4 space-y-4 text-brand-900/60">
            <p>
              Ironclad Roofing was founded in 2010 by a small crew of
              roofers who were tired of seeing homeowners let down by rushed
              work and unclear pricing. We started with a simple promise:
              do the job right, explain everything clearly, and stand
              behind the work.
            </p>
            <p>
              Fifteen years later, we&rsquo;ve grown into a full-service
              residential and commercial roofing company serving the
              greater Dallas-Fort Worth area — but the promise hasn&rsquo;t
              changed. Every roof we install or repair is treated like it&rsquo;s
              protecting our own family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
