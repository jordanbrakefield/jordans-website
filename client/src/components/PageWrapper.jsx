// export default function PageWrapper({ children }) {
//   return (
//     <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
//       <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//       {children}
//     </section>
//   );
// }

function PageWrapper({ children }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      {children}
    </section>
  );
}

export default PageWrapper;
