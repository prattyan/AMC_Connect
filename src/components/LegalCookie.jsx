import React from 'react';

const LegalCookie = ({ onBack }) => {
  return (
    <div className="flex-grow bg-white dark:bg-noir-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl animate-fade-in-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>
          <button 
            onClick={onBack}
            className="text-copper-600 dark:text-copper-400 hover:underline font-medium"
          >
            Back to Home
          </button>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p className="mb-4"><strong>Last updated:</strong> 28.11.2025</p>
          <p className="mb-6">This Cookie Policy explains how AMC Connect (“we”, “our”, “us”) uses cookies and similar technologies on our website. It applies to all visitors accessing our online services.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. What Are Cookies?</h2>
          <p className="mb-4">Cookies are small text files placed on your device (computer, phone, tablet) when you visit a website. They help websites function properly, remember your preferences, and analyse how the site is used.</p>
          <p className="mb-4">Cookies do not contain software, viruses, or give us access to your device.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Why We Use Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Ensure the website works correctly</li>
            <li>Remember your preferences (for example, language or region)</li>
            <li>Analyse website performance and improve user experience</li>
            <li>Understand how users interact with our pages</li>
            <li>Provide relevant and non-intrusive advertising (only with consent)</li>
          </ul>
          <p className="mb-4">No cookie used on our website allows us to identify you directly.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Essential Cookies</h3>
          <p className="mb-4">Required for the website to function. These cannot be disabled and do not store personal information.</p>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Analytics and Performance Cookies</h3>
          <p className="mb-4">Used to understand how visitors use the site (for example, which pages are visited and for how long). Tools include Google Analytics and similar services.</p>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Advertising and Marketing Cookies</h3>
          <p className="mb-4">Used to deliver relevant ads and measure their performance. These are only used if you give consent through the cookie banner.</p>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Session Cookies</h3>
          <p className="mb-4">Temporary cookies deleted when you close your browser.</p>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Persistent Cookies</h3>
          <p className="mb-4">Remain on your device for a set period or until you delete them.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Do Cookies Contain Personal Data?</h2>
          <p className="mb-4">Cookies do not normally contain personal information.</p>
          <p className="mb-4">In the cases where cookies help us understand how you interact with the site, the data is anonymised or aggregated.</p>
          <p className="mb-4">Any personal information collected through cookies is processed in accordance with our Privacy Policy.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. How to Manage or Delete Cookies</h2>
          <p className="mb-4">You can control cookies through your browser settings.</p>
          <p className="mb-2">Options include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Allowing all cookies</li>
            <li>Blocking all cookies</li>
            <li>Blocking only third-party cookies</li>
            <li>Deleting cookies already stored</li>
          </ul>
          <p className="mb-4"><strong>Please note:</strong> If you disable certain cookies, parts of the website may not function properly.</p>
          <p className="mb-2">Links to manage cookies in common browsers:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Firefox: Options → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy</li>
            <li>Edge: Settings → Cookies and site permissions</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Why Cookies Are Important</h2>
          <p className="mb-4">Cookies help websites:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Load and function correctly</li>
            <li>Remember items such as login details or form inputs</li>
            <li>Offer relevant content</li>
            <li>Limit how often ads are shown</li>
            <li>Improve website performance</li>
            <li>Provide safer browsing (for example, fraud prevention)</li>
          </ul>
          <p className="mb-4">Without cookies, many websites cannot function smoothly.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Updates to This Policy</h2>
          <p className="mb-4">We may update this Cookie Policy to reflect changes to our cookie practices or legal requirements.</p>
          <p className="mb-4">The latest version will always be available on this page.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">For questions about this Cookie Policy, you may contact us at:</p>
          <ul className="list-none pl-0 mb-4 space-y-2">
            <li><strong>Email:</strong> info@amc-connect.co.uk</li>
            <li><strong>Phone:</strong> 07543626565</li>
            <li><strong>Address:</strong> Unit 3, KD Tower, Cotterells, HP1 1FW, Hemel Hempstead, United Kingdom.</li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={onBack}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalCookie;
