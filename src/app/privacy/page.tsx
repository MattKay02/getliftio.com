import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/liftio/id6759969740";

export const metadata: Metadata = {
  title: "Privacy Policy — Liftio",
  description:
    "Privacy Policy for the Liftio gym tracking app. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header appStoreUrl={APP_STORE_URL} />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20 prose-legal">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> April 2026
          <br />
          <strong>Effective date:</strong> April 2026
        </p>

        <hr />

        <h2>1. Who We Are</h2>
        <p>
          Liftio is operated by <strong>MGKCodes Ltd</strong>, a company
          registered in England and Wales.
        </p>
        <p>
          <strong>Contact:</strong>
          <br />
          Email:{" "}
          <a href="mailto:hello@mgkcodes.com">hello@mgkcodes.com</a>
          <br />
          Website:{" "}
          <a
            href="https://www.mgkcodes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mgkcodes.com
          </a>
        </p>
        <p>
          For all privacy-related enquiries, including requests to access,
          correct, or delete your data, contact us at{" "}
          <a href="mailto:hello@mgkcodes.com">hello@mgkcodes.com</a>.
        </p>

        <hr />

        <h2>2. Who This Policy Applies To</h2>
        <p>
          This policy applies to all users of the Liftio iOS application.
        </p>
        <p>
          <strong>Age requirement:</strong> Liftio is intended for users aged{" "}
          <strong>13 and over</strong>. We do not knowingly collect personal
          data from children under 13. If you believe a child under 13 has
          provided us with personal data, please contact us at{" "}
          <a href="mailto:hello@mgkcodes.com">hello@mgkcodes.com</a> and we
          will delete it promptly.
        </p>

        <hr />

        <h2>3. What Data We Collect</h2>

        <h3>3.1 Account Data</h3>
        <p>When you sign in with Apple, we receive:</p>
        <ul>
          <li>
            A unique Apple-generated identifier (used as your account ID —
            this is not your email address)
          </li>
          <li>
            Your email address, if you choose to share it with us during
            Apple Sign-In
          </li>
          <li>
            Your name, if you choose to share it during Apple Sign-In
          </li>
        </ul>
        <p>
          Apple may provide a relay email address rather than your real one —
          we store whichever address Apple provides.
        </p>

        <h3>3.2 Profile Data</h3>
        <p>Data you voluntarily enter in your profile:</p>
        <ul>
          <li>Display name</li>
          <li>Gender</li>
          <li>Date of birth</li>
          <li>Height</li>
          <li>Weight</li>
          <li>Profile photo</li>
        </ul>
        <p>
          Height and weight are stored in metric units (cm and kg) on our
          servers, regardless of your in-app display preference.
        </p>

        <h3>3.3 Workout and Training Data</h3>
        <p>Data generated through your use of the app:</p>
        <ul>
          <li>Workout history (date, duration, name, notes)</li>
          <li>Exercise records (exercise name, muscle group, category)</li>
          <li>Set data (weight, reps, rest time)</li>
          <li>Personal bests and estimated 1-rep maxes</li>
        </ul>

        <h3>3.4 Subscription Data</h3>
        <p>
          We use RevenueCat to manage your subscription. RevenueCat
          receives:
        </p>
        <ul>
          <li>
            Your Apple-generated user identifier (not your name or email)
          </li>
          <li>
            Your subscription status (active, expired, trial)
          </li>
          <li>Purchase timestamps</li>
        </ul>
        <p>
          We do not receive or store your payment card details. All payment
          processing is handled by Apple.
        </p>

        <h3>3.5 Progress Photos (Subscribers Only)</h3>
        <p>
          If you are a subscribed user and use the progress photos feature,
          we collect:
        </p>
        <ul>
          <li>
            Photos you take using the in-app camera or select from your
            photo library
          </li>
          <li>
            Pose type labels you assign to each photo (e.g. front, side,
            back)
          </li>
          <li>Crop and rotation metadata you apply to photos</li>
          <li>Optional notes you attach to photo sessions</li>
        </ul>
        <p>
          Photos are stored locally on your device. As a subscribed user,
          your photos are also backed up to our cloud servers (Supabase
          Storage) to enable data recovery and device migration.
        </p>
        <p>
          <strong>Camera and photo library access:</strong> The App requests
          permission to access your device camera and photo library solely
          for the purpose of capturing and selecting progress photos. We do
          not access your camera or photo library for any other purpose.
        </p>
        <p>
          <strong>Photo deletion:</strong> You can delete any individual
          progress photo or entire photo session at any time through the
          App. Deleting a photo removes it from both your device and the
          cloud backup. Account deletion removes all progress photos
          permanently.
        </p>
        <p>
          <strong>Timelapse generation:</strong> The App can generate
          timelapse videos from your progress photos. This processing is
          performed entirely on your device — no photos are sent to external
          servers for this purpose.
        </p>

        <h3>3.6 AI-Generated Daily Summary (Subscribers Only)</h3>
        <p>
          If you are a subscribed user, the App may generate a daily
          training summary using AI. To produce this summary:
        </p>
        <ul>
          <li>
            Pre-aggregated workout statistics (e.g. number of sessions,
            average frequency, trending exercises, weight changes) are sent
            to a server-side function
          </li>
          <li>
            The server-side function sends these statistics to a third-party
            AI service (Anthropic) to generate a short text summary
          </li>
          <li>
            <strong>No personally identifiable information is sent</strong>{" "}
            — the AI receives only anonymised numerical workout statistics.
            Your name, email, date of birth, and other personal data are
            never included in the request.
          </li>
          <li>
            Your first name is prepended to the summary locally on your
            device after the AI response is received
          </li>
        </ul>
        <p>
          Summaries are cached locally on your device and refreshed once per
          day.
        </p>

        <h3>3.7 Technical Data</h3>
        <p>
          We may receive basic technical information when you use the app:
        </p>
        <ul>
          <li>App version</li>
          <li>iOS version</li>
          <li>Device type (e.g. iPhone)</li>
        </ul>
        <p>
          We do not use advertising identifiers (IDFA) or track you across
          other apps or websites.
        </p>

        <hr />

        <h2>4. Why We Collect This Data (Legal Basis)</h2>
        <p>
          Under UK GDPR, we process your data on the following legal bases:
        </p>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Legal Basis</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account data</td>
              <td><strong>Contract</strong></td>
              <td>Required to provide your subscription and sync your data across devices</td>
            </tr>
            <tr>
              <td>Profile data</td>
              <td><strong>Contract</strong></td>
              <td>Required to personalise your experience and enable cloud backup</td>
            </tr>
            <tr>
              <td>Workout data</td>
              <td><strong>Contract</strong></td>
              <td>The core service — cloud backup and restore of your training history</td>
            </tr>
            <tr>
              <td>Progress photos</td>
              <td><strong>Contract</strong></td>
              <td>Cloud backup of your progress photos as part of the subscription service</td>
            </tr>
            <tr>
              <td>AI summary statistics</td>
              <td><strong>Contract</strong></td>
              <td>Generating personalised training summaries as part of the subscription service</td>
            </tr>
            <tr>
              <td>Subscription data</td>
              <td><strong>Contract</strong></td>
              <td>Required to verify your active subscription and restore purchases</td>
            </tr>
            <tr>
              <td>Technical data</td>
              <td><strong>Legitimate interests</strong></td>
              <td>Diagnosing crashes and improving app stability</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <h2>5. How We Use Your Data</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Provide, maintain, and improve the Liftio app</li>
          <li>
            Sync your workout history and progress photos to the cloud so
            you can restore them on a new device
          </li>
          <li>
            Generate personalised daily training summaries using anonymised
            workout statistics
          </li>
          <li>Verify your active subscription on each app launch</li>
          <li>
            Enable you to restore purchases if you reinstall the app
          </li>
          <li>Respond to your support requests</li>
        </ul>
        <p>
          We do <strong>not</strong>:
        </p>
        <ul>
          <li>Sell your data to third parties</li>
          <li>Use your data for advertising</li>
          <li>
            Share your data with third parties except as described in
            Section 6
          </li>
          <li>Use your data to train machine learning models</li>
          <li>
            Send personally identifiable information to AI services — only
            anonymised workout statistics are used for summary generation
          </li>
          <li>
            Perform facial recognition, body analysis, or any automated
            processing of your progress photos
          </li>
        </ul>

        <hr />

        <h2>6. Third-Party Services</h2>
        <p>
          We share data with the following third-party processors to deliver
          the service. Each is bound by a data processing agreement with us.
        </p>

        <h3>Supabase (Cloud Storage)</h3>
        <p>
          Supabase stores your account data, profile data, workout data, and
          progress photos in the cloud, enabling backup and restore across
          devices.
        </p>
        <ul>
          <li>
            <strong>Data stored:</strong> Account identifier, profile data,
            workout data, progress photos
          </li>
          <li>
            <strong>Location:</strong> EU (primary) / US (replicated)
          </li>
          <li>
            <strong>Privacy policy:</strong>{" "}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://supabase.com/privacy
            </a>
          </li>
        </ul>

        <h3>Anthropic (AI Summary Generation)</h3>
        <p>
          Anthropic provides the AI model used to generate daily training
          summaries. Only anonymised, pre-aggregated workout statistics are
          sent to Anthropic — no personally identifiable information is
          included.
        </p>
        <ul>
          <li>
            <strong>Data shared:</strong> Anonymised workout statistics
            (session counts, frequency, trending exercises, weight changes)
          </li>
          <li>
            <strong>Location:</strong> US
          </li>
          <li>
            <strong>Privacy policy:</strong>{" "}
            <a
              href="https://www.anthropic.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.anthropic.com/privacy
            </a>
          </li>
        </ul>

        <h3>RevenueCat (Subscription Management)</h3>
        <p>
          RevenueCat validates your subscription status and manages
          entitlements.
        </p>
        <ul>
          <li>
            <strong>Data shared:</strong> Apple-generated user identifier,
            subscription status, purchase timestamps
          </li>
          <li>
            <strong>Location:</strong> US
          </li>
          <li>
            <strong>Privacy policy:</strong>{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.revenuecat.com/privacy
            </a>
          </li>
        </ul>

        <h3>Apple (Authentication and Payments)</h3>
        <p>
          Apple handles Sign in with Apple and all in-app payment
          processing. Apple&apos;s data practices are governed by their own
          privacy policy.
        </p>
        <ul>
          <li>
            <strong>Privacy policy:</strong>{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.apple.com/legal/privacy/
            </a>
          </li>
        </ul>

        <hr />

        <h2>7. Data Retention</h2>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Retention period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account and profile data</td>
              <td>Retained until you delete your account</td>
            </tr>
            <tr>
              <td>Workout and training data</td>
              <td>Retained until you delete your account</td>
            </tr>
            <tr>
              <td>Progress photos</td>
              <td>Retained until you delete individual photos or your account</td>
            </tr>
            <tr>
              <td>AI summary data</td>
              <td>Cached locally for up to 24 hours; not retained server-side</td>
            </tr>
            <tr>
              <td>Subscription records</td>
              <td>Retained as required by Apple / RevenueCat for purchase validation</td>
            </tr>
          </tbody>
        </table>
        <p>When you delete your account through the app:</p>
        <ol>
          <li>
            All your data is permanently deleted from Supabase (your
            account, profile, workouts, exercises, sets, and progress
            photos)
          </li>
          <li>
            Your subscription entitlement is removed from RevenueCat
          </li>
        </ol>
        <p>
          Cloud data deletion is permanent and irreversible. We cannot
          recover your data after account deletion.
        </p>
        <p>
          <strong>Local data:</strong> Workout data stored locally on your
          device (SQLite) is retained on-device until you uninstall the app,
          even after account deletion. This is intentional — your data
          always remains accessible locally regardless of your subscription
          status.
        </p>

        <hr />

        <h2>8. Your Rights Under UK GDPR</h2>
        <p>
          As a UK resident, you have the following rights regarding your
          personal data:
        </p>
        <ul>
          <li>
            <strong>Right of access</strong> — request a copy of the
            personal data we hold about you
          </li>
          <li>
            <strong>Right to rectification</strong> — request correction of
            inaccurate or incomplete data
          </li>
          <li>
            <strong>Right to erasure</strong> — request deletion of your
            data (&ldquo;right to be forgotten&rdquo;)
          </li>
          <li>
            <strong>Right to restrict processing</strong> — request that we
            limit how we use your data
          </li>
          <li>
            <strong>Right to data portability</strong> — request your data
            in a machine-readable format
          </li>
          <li>
            <strong>Right to object</strong> — object to processing based
            on legitimate interests
          </li>
        </ul>
        <p>
          <strong>To exercise any of these rights</strong>, contact us at{" "}
          <a href="mailto:hello@mgkcodes.com">hello@mgkcodes.com</a>. We
          will respond within 30 days.
        </p>
        <p>
          You also have the right to lodge a complaint with the{" "}
          <strong>Information Commissioner&apos;s Office (ICO)</strong> if
          you believe your data has been handled improperly:
        </p>
        <ul>
          <li>
            Website:{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ico.org.uk
            </a>
          </li>
          <li>Phone: 0303 123 1113</li>
        </ul>

        <hr />

        <h2>9. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect
          your data:
        </p>
        <ul>
          <li>Data in transit is encrypted using TLS</li>
          <li>
            Supabase uses row-level security (RLS) policies — your data is
            accessible only to your authenticated account
          </li>
          <li>
            Authentication tokens are stored securely on-device using
            platform-standard storage
          </li>
          <li>
            No passwords are stored — authentication is delegated entirely
            to Apple
          </li>
        </ul>
        <p>
          No method of transmission over the internet or electronic storage
          is 100% secure. We cannot guarantee absolute security, but we are
          committed to protecting your data using industry-standard
          practices.
        </p>

        <hr />

        <h2>10. International Data Transfers</h2>
        <p>
          Your data may be stored and processed in countries outside the UK,
          including the United States (Supabase, RevenueCat). Where this
          occurs, we rely on:
        </p>
        <ul>
          <li>
            Standard Contractual Clauses (SCCs) as approved by the UK ICO
          </li>
          <li>
            The data processor&apos;s own certifications and compliance
            frameworks
          </li>
        </ul>

        <hr />

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. When we do:
        </p>
        <ul>
          <li>
            The &ldquo;Last updated&rdquo; date at the top of this page
            will be revised
          </li>
          <li>
            If changes are material, we will notify you through the app
          </li>
        </ul>
        <p>
          Continued use of Liftio after changes are posted constitutes
          acceptance of the revised policy.
        </p>

        <hr />

        <h2>12. Contact</h2>
        <p>
          For any privacy questions, data requests, or concerns:
        </p>
        <p>
          <strong>MGKCodes Ltd</strong>
          <br />
          Email:{" "}
          <a href="mailto:hello@mgkcodes.com">hello@mgkcodes.com</a>
          <br />
          Website:{" "}
          <a
            href="https://www.mgkcodes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mgkcodes.com
          </a>
        </p>

        <hr />

        <p>
          <em>
            This privacy policy applies to the Liftio iOS application only.
          </em>
        </p>
      </main>
      <Footer />
    </>
  );
}
