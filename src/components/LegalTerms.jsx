import React from 'react';

const LegalTerms = ({ onBack }) => {
  return (
    <div className="flex-grow bg-white dark:bg-noir-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl animate-fade-in-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terms and Conditions</h1>
          <button 
            onClick={onBack}
            className="text-copper-600 dark:text-copper-400 hover:underline font-medium"
          >
            Back to Home
          </button>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">TERMS AND CONDITIONS – AMC CONNECT</h1>
          <p className="mb-4"><strong>Last Updated:</strong> 28.11.2025</p>
          <p className="mb-4">By using this website and our services, you agree to the terms and conditions below.</p>
          <p className="mb-4">Please read them carefully before submitting any information or starting an application with us.</p>
          <p className="mb-2">This website is operated by:</p>
          <p className="mb-2"><strong>AMC Connect</strong></p>
          <p className="mb-6"><strong>Company Number:</strong> 16252583</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. INTRODUCTION</h2>
          <p className="mb-4">These Terms and Conditions outline the services provided by AMC Connect and the responsibilities of both the applicant (“you”) and AMC Connect (“we”, “our”, “us”).</p>
          <p className="mb-4">Our role is to provide guidance, advice, and support to applicants interested in applying to UK universities. By contacting us through our website, phone, email, or social media, you agree to these Terms.</p>
          <p className="mb-4">We reserve the right to update website content or modify these Terms without prior notice.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. DEFINITIONS</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Applicant:</strong> Any person who contacts us seeking support with a university application.</li>
            <li><strong>Home Applicant:</strong> A person who has the right to live, work, and study in the UK.</li>
            <li><strong>International Applicant:</strong> A person who requires a visa to study in the UK.</li>
            <li><strong>Partner Institution:</strong> A university or college to which AMC Connect submits applications on behalf of applicants.</li>
            <li><strong>Application Form:</strong> The form used to begin the application process, which differs depending on the institution.</li>
            <li><strong>Identification Documents:</strong> Any official document verifying identity (passport, ID card, residency status).</li>
            <li><strong>Qualifications:</strong> Diplomas, certificates, transcripts, or other proof of education.</li>
            <li><strong>Finance Application:</strong> Application for Student Finance England (or equivalent UK funding body).</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. APPLICANT RESPONSIBILITIES</h2>
          <p className="mb-4">By using our services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate, complete, and up-to-date information.</li>
            <li>Supply valid documents required by the chosen university or finance authority.</li>
            <li>Respond promptly to communication related to your application.</li>
            <li>Inform us of any changes in your circumstances (address, residency status, contact details).</li>
          </ul>
          <p className="mb-4">We reserve the right to suspend support if false, misleading, or incomplete information is provided.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. AMC CONNECT RESPONSIBILITIES</h2>
          <p className="mb-4">We will:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Contact you after you express interest in our services.</li>
            <li>Provide accurate information about entry requirements for the chosen course or university.</li>
            <li>Assist you in preparing your application documents.</li>
            <li>Submit your application to your chosen institution once all documents are provided.</li>
            <li>Help you understand and prepare for admission tasks or assessments (where required).</li>
            <li>Communicate updates such as conditional offers, test schedules, or acceptance letters.</li>
            <li>Support you in completing a Student Finance application if applicable.</li>
          </ol>
          <p className="mb-2"><strong>Important:</strong></p>
          <p className="mb-2">AMC Connect does not:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Influence admission decisions made by universities</li>
            <li>Influence decisions made by Student Finance England</li>
            <li>Guarantee enrolment or funding approval</li>
            <li>Interfere with academic or institutional criteria</li>
          </ul>
          <p className="mb-4">All admission and finance decisions are made solely by the relevant institution or authority.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. UNIVERSITY REQUIREMENTS</h2>
          <p className="mb-4">Entry requirements, admission tests, and passing grades are set entirely by each partner institution. These may include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Academic entry requirements</li>
            <li>English language requirements</li>
            <li>Admission interviews or assessments</li>
            <li>Residency and identification requirements</li>
          </ul>
          <p className="mb-4">AMC Connect cannot alter or negotiate these requirements.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. STUDENT FINANCE & LOAN RESPONSIBILITIES</h2>
          <p className="mb-4">Applicants seeking financial support through Student Finance England (SFE) must:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Read and understand the terms of the student loan agreement</li>
            <li>Provide accurate financial and residency information</li>
            <li>Accept full responsibility for any loan they take out</li>
          </ul>
          <p className="mb-4">By completing a finance application, you confirm:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You have reviewed the official loan terms published by SFE</li>
            <li>You understand that AMC Connect provides guidance only</li>
            <li>You acknowledge that SFE alone decides loan approval, repayment conditions, and obligations</li>
          </ul>
          <p className="mb-4">AMC Connect is not responsible for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Loan rejections</li>
            <li>Repayment schedules</li>
            <li>SFE policy changes</li>
            <li>Financial commitments entered into by the applicant</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. GDPR & DATA PROTECTION</h2>
          <p className="mb-4">AMC Connect complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          <p className="mb-4">We process personal data only for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Eligibility checks</li>
            <li>Application preparation and submission</li>
            <li>Communication with the applicant</li>
            <li>Student Finance guidance (if applicable)</li>
          </ul>
          <p className="mb-4"><strong>Your Rights Under UK GDPR:</strong></p>
          <p className="mb-4">You may request at any time:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access to your data</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your data</li>
            <li>Restriction or objection to processing</li>
            <li>A copy of your data (where technically possible)</li>
          </ul>
          <p className="mb-4">Requests can be made via email at: <a href="mailto:info@amc-connect.co.uk" className="text-copper-600 hover:underline">info@amc-connect.co.uk</a></p>
          <p className="mb-4">For full details, please review our separate Privacy Policy.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. USE OF THE WEBSITE</h2>
          <p className="mb-4">By accessing our website, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use the site lawfully and not misuse any services</li>
            <li>Not attempt to interfere with website security</li>
            <li>Acknowledge that website content may change without notice</li>
            <li>Understand that external links are provided for convenience and are not endorsed by us</li>
          </ul>
          <p className="mb-4">We are not responsible for the content or reliability of external websites.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. LIMITATION OF LIABILITY</h2>
          <p className="mb-4">AMC Connect is not liable for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Decisions made by universities, colleges, funding authorities, or visa offices</li>
            <li>Delays caused by third parties (universities, SFE, government agencies)</li>
            <li>Losses resulting from the applicant providing inaccurate information</li>
            <li>Misuse or unauthorised disclosure of information by third parties outside our control</li>
          </ul>
          <p className="mb-4">Our services are advisory. Final decisions always rest with the relevant authority.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. TERMINATION OF SERVICE</h2>
          <p className="mb-4">We may suspend or discontinue support if:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>False or fraudulent information is provided</li>
            <li>Required documents are not submitted</li>
            <li>Communication from the applicant stops</li>
            <li>There is abusive, inappropriate, or disrespectful behaviour</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. GOVERNING LAW</h2>
          <p className="mb-4">These Terms and Conditions are governed by the laws of the United Kingdom.</p>
          <p className="mb-4">Any disputes shall be resolved exclusively by UK courts.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. CONTACT INFORMATION</h2>
          <p className="mb-4">For questions about these Terms, please contact us:</p>
          <p className="mb-4"><strong>AMC Connect</strong></p>
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

export default LegalTerms;
