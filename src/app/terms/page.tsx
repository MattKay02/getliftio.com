import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/liftio/id6759969740";

export const metadata: Metadata = {
  title: "Terms of Service — Liftio",
  description:
    "Terms of Service for the Liftio gym tracking app.",
};

export default function TermsPage() {
  return (
    <>
      <Header appStoreUrl={APP_STORE_URL} />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20 prose-legal">
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated:</strong> April 2026
          <br />
          <strong>Effective date:</strong> April 2026
        </p>

        <hr />

        <h2>1. Agreement to These Terms</h2>
        <p>
          By downloading, installing, or using the Liftio application
          (&ldquo;the App&rdquo;), you agree to be bound by these Terms of
          Service (&ldquo;Terms&rdquo;). If you do not agree to these
          Terms, do not use the App.
        </p>
        <p>
          These Terms form a legally binding agreement between you and{" "}
          <strong>MGKCodes Ltd</strong>, a company registered in England and
          Wales (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
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

        <hr />

        <h2>2. Eligibility</h2>
        <p>
          You must be at least <strong>13 years old</strong> to use Liftio.
          By using the App, you confirm that you meet this age requirement.
        </p>
        <p>
          If you are under 18, you confirm that you have the consent of a
          parent or legal guardian to use the App and agree to these Terms
          on your behalf.
        </p>

        <hr />

        <h2>3. Description of the Service</h2>
        <p>
          Liftio is a gym workout tracking application. The App allows you
          to:
        </p>
        <ul>
          <li>Log workouts, exercises, and sets</li>
          <li>
            Track progress over time with charts and personal bests
          </li>
          <li>Create and manage custom workout templates</li>
          <li>Use a rest timer during workouts</li>
          <li>
            Back up your data to the cloud and restore it on a new device
          </li>
          <li>
            Take and manage progress photos with guided pose overlays
            (subscribers only)
          </li>
          <li>
            Generate timelapse videos from your progress photos (subscribers
            only)
          </li>
          <li>
            Receive AI-generated daily training summaries based on your
            workout statistics (subscribers only)
          </li>
        </ul>
        <p>
          All workout data is stored locally on your device. Cloud backup,
          including progress photos, is available when you sign in with an
          Apple account.
        </p>

        <hr />

        <h2>4. Account and Authentication</h2>

        <h3>4.1 Apple Sign-In</h3>
        <p>
          Liftio uses Sign in with Apple as its authentication method. We do
          not create or manage passwords. Your account is tied to your Apple
          ID.
        </p>

        <h3>4.2 Account Security</h3>
        <p>
          You are responsible for maintaining the security of your Apple ID
          and any device on which Liftio is installed. We are not liable for
          any loss or damage arising from unauthorised access to your
          account through your Apple ID.
        </p>

        <h3>4.3 One Account Per User</h3>
        <p>
          Each Liftio account is intended for use by a single individual.
          Sharing account credentials or subscription access is not
          permitted.
        </p>

        <hr />

        <h2>5. Subscriptions and Billing</h2>

        <h3>5.1 Subscription Required</h3>
        <p>
          Liftio requires an active subscription to use the App. Access to
          the App is granted only while your subscription is active.
        </p>

        <h3>5.2 Subscription Plans</h3>
        <p>We offer the following plans:</p>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Price</th>
              <th>Billing cycle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly</td>
              <td>&pound;1.99</td>
              <td>Billed monthly</td>
            </tr>
            <tr>
              <td>Annual</td>
              <td>&pound;19.99</td>
              <td>Billed annually</td>
            </tr>
          </tbody>
        </table>
        <p>
          Prices are in GBP. The actual price charged may vary by region and
          currency, as determined by Apple. The price displayed in the App
          at the time of purchase is the price you will be charged.
        </p>

        <h3>5.3 Free Trial</h3>
        <p>
          New subscribers to the monthly plan receive a{" "}
          <strong>1-month free trial</strong>. During the free trial:
        </p>
        <ul>
          <li>You have full access to all features of the App</li>
          <li>No payment is taken during the trial period</li>
          <li>
            Your subscription will automatically convert to a paid
            subscription at the end of the trial unless you cancel at least
            24 hours before the trial ends
          </li>
          <li>
            The free trial is available once per Apple ID and cannot be
            reused
          </li>
        </ul>

        <h3>5.4 Auto-Renewal</h3>
        <p>
          All subscriptions <strong>auto-renew</strong> at the end of each
          billing period unless you cancel. Renewal is charged within 24
          hours before the end of the current period at the same price as
          the original subscription.
        </p>

        <h3>5.5 How to Cancel</h3>
        <p>
          You can cancel your subscription at any time through your Apple ID
          settings:
        </p>
        <ol>
          <li>
            Open the <strong>Settings</strong> app on your iPhone
          </li>
          <li>Tap your name at the top</li>
          <li>
            Tap <strong>Subscriptions</strong>
          </li>
          <li>
            Select <strong>Liftio</strong>
          </li>
          <li>
            Tap <strong>Cancel Subscription</strong>
          </li>
        </ol>
        <p>
          Cancellation takes effect at the end of the current billing
          period. You will retain access to the App until that date.
        </p>
        <p>
          We cannot cancel subscriptions on your behalf. All subscription
          management is handled by Apple.
        </p>

        <h3>5.6 Refunds</h3>
        <p>
          All purchases are processed by Apple. Refund requests must be made
          directly to Apple:
        </p>
        <ul>
          <li>
            Visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://reportaproblem.apple.com
            </a>
          </li>
          <li>Or contact Apple Support</li>
        </ul>
        <p>
          We do not have access to your payment information and cannot issue
          refunds directly.
        </p>

        <h3>5.7 Price Changes</h3>
        <p>
          We may change subscription prices from time to time. If we
          increase the price of your subscription:
        </p>
        <ul>
          <li>Apple will notify you in advance</li>
          <li>
            You will need to agree to the new price before renewal
          </li>
          <li>
            If you do not agree, your subscription will not renew
          </li>
        </ul>

        <h3>5.8 What Happens When Your Subscription Ends</h3>
        <p>
          If your subscription expires or is cancelled:
        </p>
        <ul>
          <li>
            You will no longer be able to access the App&apos;s main
            features
          </li>
          <li>
            You will be shown a screen where you can renew, restore
            purchases, or delete your account
          </li>
          <li>
            Your local workout data stored on your device is{" "}
            <strong>not deleted</strong> and remains accessible if you
            resubscribe
          </li>
          <li>
            Your cloud backup data is retained for a reasonable period to
            allow resubscription
          </li>
        </ul>

        <hr />

        <h2>6. Your Data</h2>

        <h3>6.1 Local Data</h3>
        <p>
          All workout data and progress photos are stored locally on your
          device in a SQLite database and device storage respectively. This
          data belongs to you and remains on your device regardless of your
          subscription status or account state.
        </p>

        <h3>6.2 Cloud Data</h3>
        <p>
          If you sign in with Apple, your data — including workout history
          and progress photos — is backed up to our cloud servers
          (Supabase). Cloud backup is provided as a convenience for data
          recovery and device migration. You can export your workout data at
          any time via the in-app CSV export feature.
        </p>

        <h3>6.3 Data Ownership</h3>
        <p>
          You retain ownership of all workout data, profile data, progress
          photos, and content you create within the App. By using the cloud
          backup feature, you grant us a limited licence to store and
          transmit your data solely for the purpose of providing the backup
          and restore service.
        </p>

        <h3>6.4 Progress Photos</h3>
        <p>
          Progress photos you take within the App are stored on your device
          and backed up to the cloud as part of your subscription. You can
          delete any individual photo or entire photo session at any time.
          Timelapse videos are generated entirely on your device and are not
          uploaded to our servers. We do not perform facial recognition, body
          analysis, or any automated processing of your photos.
        </p>

        <h3>6.5 AI-Generated Summaries</h3>
        <p>
          The App may generate daily training summaries using AI. These
          summaries are based on anonymised, pre-aggregated workout
          statistics — no personally identifiable information is sent to the
          AI service. Summaries are provided for informational purposes only
          and do not constitute fitness advice.
        </p>

        <h3>6.6 Data Deletion</h3>
        <p>
          You can delete your account and all associated cloud data at any
          time through the App. Account deletion is permanent and
          irreversible. See our{" "}
          <a href="/privacy">Privacy Policy</a> for full details on data
          retention and deletion.
        </p>

        <hr />

        <h2>7. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Reverse-engineer, decompile, or disassemble the App
          </li>
          <li>
            Attempt to bypass the subscription requirement or any security
            measures
          </li>
          <li>Use the App for any unlawful purpose</li>
          <li>
            Redistribute, sublicense, or resell the App or any part of it
          </li>
          <li>
            Interfere with or disrupt the App&apos;s servers or
            infrastructure
          </li>
          <li>
            Create automated accounts or use bots to interact with the App
          </li>
          <li>
            Impersonate another person or misrepresent your identity
          </li>
        </ul>
        <p>
          We reserve the right to suspend or terminate your account if you
          breach these terms.
        </p>

        <hr />

        <h2>8. Intellectual Property</h2>

        <h3>8.1 The App</h3>
        <p>
          Liftio, including its design, code, branding, and user interface,
          is owned by MGKCodes Ltd. All rights are reserved.
        </p>

        <h3>8.2 Exercise Illustrations</h3>
        <p>
          Exercise illustrations used in the App are AI-generated and owned
          by MGKCodes Ltd. All rights reserved.
        </p>

        <h3>8.3 Your Content</h3>
        <p>
          You retain ownership of any content you create within the App
          (workout names, notes, custom exercises). We do not claim
          ownership of your content.
        </p>

        <hr />

        <h2>9. Health and Fitness Disclaimer</h2>
        <p>
          <strong>
            Liftio is not a medical device and does not provide medical
            advice.
          </strong>
        </p>
        <ul>
          <li>
            The App is a workout tracking tool only. It does not diagnose,
            treat, cure, or prevent any disease or medical condition.
          </li>
          <li>
            Always consult a qualified healthcare professional before
            beginning any exercise programme, especially if you have a
            pre-existing medical condition, are pregnant, or have not
            exercised for an extended period.
          </li>
          <li>
            You are solely responsible for your own health and safety while
            using the App. We are not liable for any injury, illness, or
            health issue that arises from your use of the App or any
            exercise programme you follow.
          </li>
          <li>
            Personal best calculations, estimated 1-rep max values,
            AI-generated training summaries, and any other metrics provided
            by the App are estimates only and should not be used to
            determine safe lifting limits or as fitness advice.
          </li>
          <li>
            If you experience pain, dizziness, or discomfort during
            exercise, stop immediately and seek medical attention.
          </li>
        </ul>

        <hr />

        <h2>10. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law:</p>
        <ul>
          <li>
            The App is provided on an <strong>&ldquo;as is&rdquo;</strong>{" "}
            and <strong>&ldquo;as available&rdquo;</strong> basis, without
            warranties of any kind, whether express or implied.
          </li>
          <li>
            We do not guarantee that the App will be uninterrupted,
            error-free, or free of harmful components.
          </li>
          <li>
            We are not liable for any loss of data, including workout
            history, arising from device failure, software errors, or
            circumstances beyond our control.
          </li>
          <li>
            Our total liability to you for any claim arising from your use
            of the App shall not exceed the amount you have paid to us in
            subscription fees in the <strong>12 months</strong> preceding
            the claim.
          </li>
          <li>
            We are not liable for any indirect, incidental, special,
            consequential, or punitive damages.
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes or limits our liability for:
        </p>
        <ul>
          <li>Death or personal injury caused by our negligence</li>
          <li>Fraud or fraudulent misrepresentation</li>
          <li>
            Any other liability that cannot be excluded or limited under
            English law
          </li>
        </ul>

        <hr />

        <h2>11. Termination</h2>

        <h3>11.1 By You</h3>
        <p>
          You may stop using the App at any time by cancelling your
          subscription and deleting the App from your device. You may also
          delete your account through the App to remove all cloud data.
        </p>

        <h3>11.2 By Us</h3>
        <p>
          We may suspend or terminate your access to the App if:
        </p>
        <ul>
          <li>You breach these Terms</li>
          <li>We are required to do so by law</li>
          <li>We discontinue the App</li>
        </ul>
        <p>
          If we discontinue the App, we will provide reasonable notice and
          allow you to export your data before the service ends.
        </p>

        <hr />

        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do:
        </p>
        <ul>
          <li>
            The &ldquo;Last updated&rdquo; date at the top of this page
            will be revised
          </li>
          <li>
            If changes are material, we will notify you through the App
          </li>
          <li>
            Continued use of the App after changes are posted constitutes
            acceptance of the revised Terms
          </li>
        </ul>
        <p>
          If you do not agree with the revised Terms, you should stop using
          the App and cancel your subscription.
        </p>

        <hr />

        <h2>13. Governing Law and Disputes</h2>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of <strong>England and Wales</strong>.
        </p>
        <p>
          Any disputes arising from these Terms or your use of the App
          shall be subject to the exclusive jurisdiction of the courts of
          England and Wales.
        </p>
        <p>
          If you are a consumer resident in the UK, nothing in these Terms
          affects your statutory consumer rights.
        </p>

        <hr />

        <h2>14. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or
          invalid by a court of competent jurisdiction, the remaining
          provisions shall continue in full force and effect.
        </p>

        <hr />

        <h2>15. Entire Agreement</h2>
        <p>
          These Terms, together with our{" "}
          <a href="/privacy">Privacy Policy</a>, constitute the entire
          agreement between you and MGKCodes Ltd regarding your use of the
          App.
        </p>

        <hr />

        <h2>16. Contact</h2>
        <p>For any questions about these Terms:</p>
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
            These Terms of Service apply to the Liftio iOS application
            only.
          </em>
        </p>
      </main>
      <Footer />
    </>
  );
}
