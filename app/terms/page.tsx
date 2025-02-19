import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Back to Home */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Home
          </Link>
        </div>

        {/* Terms of Service Content */}
        <article className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">Last updated: February 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using lifekit.sg (&quot;the Website&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p className="text-gray-600">
              lifekit.sg provides online calculators and tools designed for Singapore residents. These tools are for informational purposes only and should not be considered as professional advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
            <p className="text-gray-600 mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Use the services in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with or disrupt the operation of the Website</li>
              <li>Attempt to reverse engineer or access the source code of our tools</li>
              <li>Use the services for any commercial purpose without our express consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-600">
              The services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. While we strive for accuracy, we make no guarantees about the results or reliability of our tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, lifekit.sg shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, features, and functionality of the Website, including but not limited to text, graphics, logos, and code, are the exclusive property of lifekit.sg and are protected by international copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page. Your continued use of the Website after such modifications constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these Terms, please contact us through our{" "}
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