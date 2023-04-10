import React from "react";
import "./PrivacyPolicy.scss";
import Footer from "../../components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="privacy-policy-wrapper">
        <div className="mx">
          <div className="privacy-policy-introduction">
            <h3>Introduction</h3>
            <p>
              We are committed to protecting your privacy and respecting your
              data protection rights. This privacy policy explains how we
              collect, use, disclose, and protect your personal information in
              accordance with applicable data protection laws.
            </p>
          </div>
          <div className="information-we-collect">
            <h3>Information we collect</h3>
            <p>
              We collect personal information about you when you use our game
              application, such as when you:
            </p>
            <ul className="list-content">
              <li>Create an account</li>
              <li>Purchase in-game items or subscriptions</li>
              <li>Participate in social media features</li>
              <li>Contact us for support</li>
            </ul>
            <p>The types of personal information we may collect include:</p>
            <ul className="list-content">
              <li>Name, email address, postal address, and phone number</li>
              <li>Payment information, such as credit card details</li>
              <li>Location information</li>
              <li>
                Information about your device, such as IP address and operating
                system
              </li>
            </ul>
          </div>

          <div className="information-we-collect">
            <h3>How we use your information</h3>
            <p>
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-content">
              <li>To provide and improve our game application</li>
              <li>To process payments and fulfill orders</li>
              <li>
                To communicate with you about our products, services, and
                promotions
              </li>
              <li>To personalize your experience in our game application</li>
              <li>To conduct research and analytics</li>
            </ul>
          </div>

          <div className="information-we-collect">
            <h3>How we share your information</h3>
            <p>We do not share your personal information with third parties.</p>
            <h3>Data protection</h3>
            <p>
              We take appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing and against accidental loss, destruction, or damage. We
              use access control and password encryption to protect your
              personal information.
            </p>
            <h3>Compliance</h3>
            <p>
              We comply with applicable data protection laws and regulations,
              including the General Data Protection Regulation (GDPR) in the
              European Union, the California Consumer Privacy Act (CCPA) in the
              United States, and the Indian Information Technology (Reasonable
              Security Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011.
            </p>
            <h3>Your rights</h3>
            <p>
              You have certain rights regarding your personal information,
              including:
            </p>
            <ul className="list-content">
              <li>The right to access your personal information</li>
              <li>The right to erase your personal information</li>
              <li>
                The right to rectify any inaccurate or incomplete personal
                information
              </li>
              <li>
                The right to restrict or object to the processing of your
                personal information
              </li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              information provided in section 8 below.
            </p>
            <h3>Contact us</h3>
            <p>
              If you have any questions or concerns about our privacy practices
              or this privacy policy, please contact us at [insert
              contact information].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
