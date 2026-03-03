import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Avyron</title>
        <meta name="description" content="Avyron's privacy policy. Learn how we collect, use, and protect your data." />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gray-50">
        {/* Header */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-500 font-medium">Effective Date: 01/01/2026 | Last Updated: 01/01/2026</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="shadow-premium border-0">
                <CardContent className="p-8 md:p-12 prose prose-indigo max-w-none text-gray-700">
                  <p className="text-lg mb-8">
                    Avyron ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                  </p>

                  <div className="space-y-10">
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definitions</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
                        <li><strong>Platform:</strong> The Avyron software, website, and associated AI services.</li>
                        <li><strong>User:</strong> Any individual or entity using the Platform.</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
                      <p className="mb-4">We collect the following types of information:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account Information:</strong> Name, email address, phone number, company details, and billing information.</li>
                        <li><strong>Operational Data:</strong> Booking details, vendor information, payment records, and customer communications processed through our platform.</li>
                        <li><strong>Usage Data:</strong> IP addresses, browser types, device information, and interaction metrics with our platform.</li>
                        <li><strong>AI Interaction Data:</strong> Queries, prompts, and responses generated through our AI agents.</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purpose of Processing</h2>
                      <p className="mb-4">We process your data for the following purposes:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>To provide, maintain, and improve the Platform.</li>
                        <li>To process transactions and send related information.</li>
                        <li>To train and optimize our AI models (using aggregated and anonymized data where possible).</li>
                        <li>To send administrative messages, technical notices, and security alerts.</li>
                        <li>To comply with legal obligations.</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consent</h2>
                      <p>
                        By using Avyron, you consent to the collection and processing of your data as described in this policy. You may withdraw your consent at any time by contacting our Grievance Officer, though this may limit your ability to use certain features of the Platform.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                      <p>
                        We retain Personal Data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Upon account termination, operational data may be retained for up to 90 days before permanent deletion.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                      <p>
                        We implement enterprise-grade technical and organizational measures to protect your data, including end-to-end encryption, role-based access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing</h2>
                      <p className="mb-4">We do not sell your Personal Data. We may share data with:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., cloud hosting, payment processors).</li>
                        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition.</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Rights of Data Principals</h2>
                      <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Access and obtain a copy of your Personal Data.</li>
                        <li>Request correction of inaccurate data.</li>
                        <li>Request deletion of your data (Right to be Forgotten).</li>
                        <li>Object to or restrict processing.</li>
                        <li>Data portability.</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Grievance Officer</h2>
                      <p>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our Grievance Officer at:
                      </p>
                      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <p className="font-medium text-gray-900">Email: privacy@avyron.tech</p>
                        <p className="text-gray-600">We will respond to all legitimate requests within 30 days.</p>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
