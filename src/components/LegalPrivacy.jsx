import React from 'react';

const LegalPrivacy = ({ onBack }) => {
  return (
    <div className="flex-grow bg-white dark:bg-noir-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl animate-fade-in-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          <button 
            onClick={onBack}
            className="text-copper-600 dark:text-copper-400 hover:underline font-medium"
          >
            Back to Home
          </button>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">PERSONAL DATA PROCESSING POLICY – AMC CONNECT</h1>
          <p className="mb-6"><strong>Last updated:</strong> 28.11.2025</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER I – INTRODUCTION</h2>
          <p className="mb-4">This Personal Data Processing Policy explains how AMC Connect (“Company”, “we”, “our”, “us”) processes the personal data of users who contact us or use our services.</p>
          <p className="mb-2">We comply with all applicable data protection legislation, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The UK General Data Protection Regulation (UK GDPR)</li>
            <li>The Data Protection Act 2018</li>
            <li>Relevant domestic data protection rules</li>
          </ul>
          <p className="mb-4">By submitting your information through our website or through any communication channel, you acknowledge that you have read and understood this Policy.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER II – CATEGORIES OF PERSONAL DATA PROCESSED</h2>
          <p className="mb-4">We may process the following categories of personal data:</p>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">1. Identification Data</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>First and last name</li>
            <li>Date of birth</li>
            <li>Residency status (e.g., Settled, Pre-Settled, British Citizen)</li>
            <li>Nationality</li>
            <li>Country of origin</li>
            <li>Address or city of residence</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">2. Contact Data</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Email address</li>
            <li>Mobile phone number</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">3. Educational and Background Data</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>English level</li>
            <li>Qualifications (e.g., Level 3, Baccalaureate)</li>
            <li>Work history (if applicable)</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">4. Technical and Usage Data</h3>
          <p className="mb-2">Collected automatically via cookies, log files, or analytics tools (e.g., Google Analytics, Meta Pixel):</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Pages visited and time spent</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">5. Additional Information You Provide</h3>
          <p className="mb-4">Any data you choose to share during calls, messages, consultations, or application preparation.</p>
          <p className="mb-4">Providing personal data is necessary for us to determine eligibility and offer guidance. Failure to provide certain information may make it impossible for us to offer our services.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER III – PURPOSES OF PROCESSING</h2>
          <p className="mb-4">Your personal data is processed strictly for the following purposes:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Eligibility assessment:</strong> To determine suitable university options for you.</li>
            <li><strong>Communication:</strong> To contact you and provide guidance and updates related to your enquiry.</li>
            <li><strong>Application support:</strong> To prepare, manage, and submit your application to your chosen institution, with your agreement.</li>
            <li><strong>Customer care:</strong> To answer questions, handle requests, and assist you throughout your academic journey.</li>
            <li><strong>Service improvement:</strong> To analyse website usage and improve the performance of our website and services.</li>
            <li><strong>Marketing (only if you consent):</strong> To send newsletters or information about educational opportunities.</li>
            <li><strong>Security and compliance:</strong> To ensure the security of our systems and comply with legal obligations.</li>
          </ol>
          <p className="mb-4">We never use your personal data for purposes that are incompatible with the above.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER IV – LEGAL BASIS FOR PROCESSING</h2>
          <p className="mb-4">We process your data on one or more of the following legal grounds:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Consent (when you submit your information or accept cookies)</li>
            <li>Legitimate interests (to provide the guidance you requested)</li>
            <li>Contractual necessity (when assisting with university applications)</li>
            <li>Legal obligations (where required by law)</li>
          </ul>
          <p className="mb-4">You may withdraw consent at any time.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER V – RIGHTS OF DATA SUBJECTS</h2>
          <p className="mb-4">Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Rectification of inaccurate or incomplete data</li>
            <li>Erasure (“right to be forgotten”)</li>
            <li>Restriction of processing</li>
            <li>Objection to processing</li>
            <li>Data portability (where applicable)</li>
            <li>Not be subject to automated decision-making</li>
          </ul>
          <p className="mb-4">To exercise your rights, contact us at: <a href="mailto:info@amc-connect.co.uk" className="text-copper-600 hover:underline">info@amc-connect.co.uk</a></p>
          <p className="mb-4">We respond within one month, free of charge.</p>
          <p className="mb-4">You may also contact the Information Commissioner’s Office (ICO) if you believe your rights have been violated.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER VI – DATA STORAGE AND SECURITY</h2>
          <p className="mb-4">We store personal data within the United Kingdom or the European Union.</p>
          <p className="mb-2">We implement appropriate technical and organisational measures, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Secure servers and encrypted connections (SSL)</li>
            <li>Restricted access to authorised personnel</li>
            <li>Secure digital storage and access controls</li>
          </ul>
          <p className="mb-4">Although we take reasonable precautions, no method of electronic transmission is fully secure.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER VII – DATA RETENTION</h2>
          <p className="mb-4">We retain your data only for as long as needed:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Active students:</strong> For the duration of your academic journey</li>
            <li><strong>Non-continuing applicants:</strong> Up to 12 months from collection</li>
            <li><strong>Upon request:</strong> Deleted sooner if you ask us to erase your data</li>
          </ul>
          <p className="mb-4">After the retention period, data is securely deleted or anonymised.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER VIII – COOKIES AND TRACKING</h2>
          <p className="mb-4">Our website uses cookies to improve functionality and user experience.</p>
          <p className="mb-2">Types of cookies used:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Essential cookies (cannot be refused)</li>
            <li>Analytics and performance cookies (optional)</li>
            <li>Marketing cookies (optional)</li>
          </ul>
          <p className="mb-4">You control your cookie preferences through your browser.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER IX – CONTACT INFORMATION</h2>
          <p className="mb-4">If you have any questions or wish to exercise your rights, contact us at:</p>
          <p className="mb-4"><strong>AMC Connect</strong></p>
          <ul className="list-none pl-0 mb-4 space-y-2">
            <li><strong>Email:</strong> info@amc-connect.co.uk</li>
            <li><strong>Phone:</strong> 07543626565</li>
            <li><strong>Address:</strong> Unit 3, KD Tower, Cotterells, HP1 1FW, Hemel Hempstead, United Kingdom</li>
            <li><strong>ICO website:</strong> <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-copper-600 hover:underline">www.ico.org.uk</a></li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CHAPTER X – POLICY UPDATES</h2>
          <p className="mb-4">We may update this Policy when necessary.</p>
          <p className="mb-4">The most recent version will always be available on our website.</p>
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

export default LegalPrivacy;
