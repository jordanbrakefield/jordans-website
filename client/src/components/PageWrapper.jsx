function PageWrapper({ children }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      {children}
    </section>
  );
}

export default PageWrapper;
