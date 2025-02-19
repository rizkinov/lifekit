import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Back to Home */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Home
          </Link>
        </div>

        {/* Privacy Policy Content */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">Last updated: February 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600">
              This Privacy Policy describes how lifekit.sg (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              Our tools are designed to work without collecting personal information. All calculations and data processing are performed locally in your browser.
            </p>
            <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
            <p className="text-gray-600 mb-4">
              We may collect anonymous usage statistics to improve our services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Browser type and version</li>
              <li>Access times and dates</li>
              <li>Pages viewed</li>
              <li>Basic device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-gray-600 mb-4">
              Any anonymous data collected is used solely for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns</li>
              <li>Maintaining service security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
            <p className="text-gray-600">
              Our calculators and tools process all data locally in your browser. We do not store or transmit your personal information to our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-600">
              We use essential cookies only for basic website functionality. These cookies do not track personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-600">
              Our website may use third-party services such as analytics tools. These services may collect anonymous usage data subject to their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us through our{" "}
              <Link href="https://github.com/rizkinov" className="text-gray-900 hover:underline">
                GitHub page
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
} 