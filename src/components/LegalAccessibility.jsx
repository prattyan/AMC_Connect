import React from 'react';

const LegalAccessibility = ({ onBack }) => {
  return (
    <div className="flex-grow bg-white dark:bg-noir-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl animate-fade-in-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Accessibility Statement</h1>
          <button 
            onClick={onBack}
            className="text-copper-600 dark:text-copper-400 hover:underline font-medium"
          >
            Back to Home
          </button>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accessibility Statement for AMC Connect Website</h1>
          <p className="mb-4">This accessibility statement applies to AMC Connect's website: <a href="https://amc-connect.co.uk" className="text-copper-600 hover:underline">https://amc-connect.co.uk</a>.</p>
          <p className="mb-4">At AMC Connect, we are committed to making our website accessible to as many people as possible, including individuals with disabilities. Our goal is to ensure an inclusive and accessible experience for all visitors. On our website, users should be able to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Adjust colors, contrast levels, and fonts through browser or device settings.</li>
            <li>Zoom in up to 400% without text spilling off the screen.</li>
            <li>Navigate most of the website using a keyboard or speech recognition software.</li>
            <li>Listen to most of the website using a screen reader (including the latest versions of JAWS, NVDA, and VoiceOver).</li>
          </ul>
          <p className="mb-4">We have also ensured that our website's text is simple and easy to understand.</p>
          <p className="mb-4">For additional advice on making your device easier to use, you can visit <a href="https://mcmw.abilitynet.org.uk/" target="_blank" rel="noopener noreferrer" className="text-copper-600 hover:underline">AbilityNet</a>.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How Accessible This Website Is</h2>
          <p className="mb-4">While we strive to ensure accessibility, we acknowledge that some parts of the website may not be fully accessible:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Users cannot modify line height or text spacing.</li>
            <li>Some older PDF documents may not be compatible with screen readers.</li>
            <li>Live video streams do not currently have captions.</li>
            <li>A "skip to main content" feature is not available for screen reader navigation.</li>
            <li>Users may face limitations when magnifying maps on the "Contact Us" page.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Feedback and Contact Information</h2>
          <p className="mb-4">If you experience any issues not listed here or require assistance, please contact us:</p>
          <ul className="list-none pl-0 mb-4 space-y-2">
            <li><strong>Email:</strong> info@amc-connect.co.uk</li>
            <li><strong>Phone:</strong> 07543626565</li>
          </ul>
          <p className="mb-4">We’ll consider your request and aim to respond within 7 working days.</p>
          <p className="mb-4">If you need information on this website in an alternative format (e.g., large print, audio recording, braille, or easy read), please get in touch with us.</p>
          <p className="mb-4">If you are unable to view the map on our "Contact Us" page, please email or call us for directions.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Enforcement Procedure</h2>
          <p className="mb-4">If you are dissatisfied with our response to an accessibility-related concern, you can contact the Equality Advisory and Support Service (EASS) or, if you’re based in Northern Ireland, the Equality Commission for Northern Ireland (ECNI).</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Technical Information About This Website’s Accessibility</h2>
          <p className="mb-4">AMC Connect LTD is committed to making our website accessible in line with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Compliance Status:</h3>
          <p className="mb-4">This website is partially compliant with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standard due to the non-compliances and exemptions outlined below.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Non-Accessible Content</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Non-Compliance with Accessibility Regulations:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Some images lack alternative text, making them inaccessible to screen readers (WCAG 2.2, Success Criterion 1.1.1). We aim to resolve this by [insert date].</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Disproportionate Burden:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Navigation: There is no "skip to main content" feature, and text resizing can cause content overlap.</li>
            <li>Device orientation changes are not fully supported for content viewing.</li>
          </ul>
          <p className="mb-4">We have assessed these issues and determined that addressing them immediately would impose a disproportionate burden. These will be reassessed during our next supplier contract review.</p>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">Content Outside the Scope of Accessibility Regulations:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>PDFs and other documents published before September 23, 2018, are exempt unless essential for active services. Future documents will meet accessibility standards.</li>
            <li>Live video streams are currently exempt from accessibility regulations and do not have captions.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What We’re Doing to Improve Accessibility</h2>
          <p className="mb-4">We are dedicated to ongoing improvements. Our accessibility roadmap outlines key steps we are taking to address the identified issues.</p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Preparation of This Accessibility Statement</h2>
          <p className="mb-4">This statement was prepared on October 31, 2024, and last reviewed on November 19, 2024.</p>
          <p className="mb-4">Our website was last tested on November 19, 2024, using a combination of automated tools and manual audits on our most visited pages. The assessment was conducted by the director of AMC Connect LTD.</p>
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

export default LegalAccessibility;
