import React from 'react';

const TermsandCondition = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-sm sm:prose lg:prose-lg">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Account Registration & Google Login</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You may log in using your Google account for authentication.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You must provide accurate and up-to-date information.</li>
            <li>We are not liable for any unauthorized access resulting from your failure to secure your account.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You agree not to use the Website for any illegal or unauthorized purposes.</li>
            <li>You must not interfere with the Website’s functionality or attempt to access data beyond your permissions.</li>
            <li>You are solely responsible for the tasks and content you input into the system.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. AI-Generated Summaries</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>The AI-generated summaries are for informational purposes only and should not be considered professional advice.</li>
            <li>We do not guarantee the accuracy, completeness, or reliability of AI-generated content.</li>
            <li>You use the summaries at your own discretion.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Data Privacy & Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We collect and process data in accordance with our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.</li>
            <li>By using Google Login, you authorize us to access certain Google account information as permitted by Google’s policies.</li>
            <li>We implement security measures, but we cannot guarantee absolute protection against breaches.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All content, features, and functionality on the Website are owned by us or licensed to us.</li>
            <li>You may not reproduce, distribute, or modify any part of the Website without permission.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>The Website is provided "as is" without warranties of any kind.</li>
            <li>We are not liable for any direct, indirect, or consequential damages arising from your use of the Website.</li>
            <li>We do not guarantee uninterrupted or error-free service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Modifications & Termination</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We reserve the right to modify or discontinue the Website at any time.</li>
            <li>We may update these Terms periodically, and continued use constitutes acceptance of changes.</li>
            <li>We may terminate or suspend your account for violations of these Terms.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
          <p>For any questions, contact us at: <a href="mailto:shhreyasrivastava@gmail.com" className="text-blue-600 hover:underline">shhreyasrivastava@gmail.com</a>.</p>
        </section>

        <p className="mt-8 font-medium">
          By using <strong>Your Website Name</strong>, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsandCondition;