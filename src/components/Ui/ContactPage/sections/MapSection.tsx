const MapSection = () => {
  return (
    <section className="bg-brand-50 pb-20 lg:pb-28">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-brand-900/10 shadow-sm">
          <iframe
            title="Ironclad Roofing service area map"
            src="https://www.google.com/maps?q=Dallas,TX&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
