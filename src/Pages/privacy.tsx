import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-sm sm:prose lg:prose-lg">
        <section className="mb-8">
          <p>
            This Privacy Policy explains how <strong>Calendar AI</strong> we collects, uses, and protects your personal data when you use our website (the "Service"). By using the Service, you agree to the practices described herein.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google Account Data:</strong> When you log in via Google, we collect your name, email address, and profile picture (as permitted by Google’s OAuth scope).
            </li>
            <li>
              <strong>Task Data:</strong> Content you create (tasks, notes) to provide the Service.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages visited, and timestamps (via cookies or analytics tools).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and personalize the Service (e.g., AI summaries).</li>
            <li>To authenticate your account via Google Login.</li>
            <li>To analyze usage trends and improve the Service.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Data Sharing & Disclosure</h2>
          <p>We do not sell your data. We may share it only in these cases:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Service Providers:</strong> With third-party tools (e.g., hosting, analytics) necessary for the Service.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law or to protect our rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of a merger or acquisition.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We use encryption (HTTPS) and secure storage practices.</li>
            <li>Google Login data is handled per Google’s API policies.</li>
            <li>No method of transmission over the internet is 100% secure—we cannot guarantee absolute security.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Access/Delete:</strong> Request a copy of your data or delete your account via settings or by contacting us.
            </li>
            <li>
              <strong>Opt-Out:</strong> Disable cookies in your browser or revoke Google OAuth access.
            </li>
            <li>
              <strong>EU Users:</strong> You may have additional rights under GDPR (e.g., data portability).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Cookies & Tracking</h2>
          <p>We use cookies for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Authentication (session cookies).</li>
            <li>Analytics (e.g., Google Analytics).</li>
          </ul>
          <p className="mt-2">You can disable cookies in browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Children’s Privacy</h2>
          <p>Our Service is not intended for users under <strong>13</strong>. We do not knowingly collect their data.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p>We may update this policy. Continued use of the Service constitutes acceptance of changes.</p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;