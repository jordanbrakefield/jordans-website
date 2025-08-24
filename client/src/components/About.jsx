import PageWrapper from './PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-3xl">
        {/* Card Container (same style as projects) */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-10">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              About Me
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed text-left">
              Hi, I’m Jordan Brakefield — a recent B.S. Software Engineering graduate with nearly a decade of 
              experience at Boeing in manufacturing and supply chain operations. While working full-time, 
              I earned my degree from Western Governors University, blending real-world problem-solving skills 
              with a strong technical foundation.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed text-left">
              My portfolio includes projects ranging from Android apps and full-stack web applications to 
              smart home integrations in my personal home lab — including building a home networking rack 
              from the ground up. I’m driven by curiosity, precision, and a passion for bridging the gap 
              between the physical and digital worlds.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed text-left">
              Whether I’m writing clean, scalable code, deploying a cloud service, or streamlining a workflow, 
              my goal is the same: deliver practical, high-quality solutions that just work.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
