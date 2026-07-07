import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LegalSection, LegalSubHeading, LegalList } from "@/components/legal/LegalSection";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — SpecSwap",
  description: "How SpecSwap collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Legal
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: 6 July 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-600">
          <LegalSection number={1} title="About this policy">
            <p>In this Privacy Policy:</p>
            <p>
              <strong className="text-navy-900">
                &ldquo;SpecSwap&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
                &ldquo;our&rdquo;
              </strong>{" "}
              means Bonja Group (ABN 64 814 797 294), trading as SpecSwap,
              and any related business entity that operates the SpecSwap
              service.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;You&rdquo; and &ldquo;your&rdquo;
              </strong>{" "}
              means a visitor, client, prospective client, supplier,
              consultant, builder, designer, developer, homeowner, project
              manager or other person who interacts with us.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;Personal information&rdquo;
              </strong>{" "}
              means information or an opinion about an identified
              individual, or an individual who is reasonably identifiable.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;Project information&rdquo;
              </strong>{" "}
              means information relating to a project, site, specification,
              schedule, product requirement, pricing, programme, supplier,
              delivery, design or procurement package.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;Uploaded documents&rdquo;
              </strong>{" "}
              includes FF&E schedules, furniture schedules, product lists,
              drawings, specifications, finishes schedules, appliance
              schedules, IT/AV briefs, moodboards, quotes, plans, images,
              PDFs, spreadsheets, CSV files and other documents submitted to
              us.
            </p>
          </LegalSection>

          <LegalSection number={2} title="Compliance approach">
            <p>
              SpecSwap aims to handle personal information in accordance
              with the Australian Privacy Principles under the Privacy Act
              1988 (Cth) where applicable.
            </p>
            <p>
              Most Australian small businesses with annual turnover of $3
              million or less are not automatically covered by the Privacy
              Act, although some are covered depending on their activities.
              Even where SpecSwap is not legally required to comply with
              every Privacy Act obligation, we aim to follow privacy-aware
              practices because we handle project documents, supplier
              information and commercially sensitive material.
            </p>
          </LegalSection>

          <LegalSection number={3} title="Information we collect">
            <p>We may collect the following types of information.</p>

            <LegalSubHeading>Personal and contact information</LegalSubHeading>
            <p>This may include:</p>
            <LegalList
              items={[
                "name",
                "email address",
                "phone number",
                "company name",
                "job title",
                "billing details",
                "delivery contact details",
                "site contact details",
                "communication records",
                "meeting notes",
                "enquiry details",
              ]}
            />

            <LegalSubHeading>Business and project information</LegalSubHeading>
            <p>This may include:</p>
            <LegalList
              items={[
                "project name",
                "project address or location",
                "builder, designer, architect, developer or client details",
                "procurement requirements",
                "budgets or target pricing",
                "programme dates",
                "lead-time requirements",
                "delivery dates",
                "installation requirements",
                "supplier preferences",
                "product preferences",
                "project constraints",
                "scope notes",
                "contract or package details",
              ]}
            />

            <LegalSubHeading>Uploaded documents</LegalSubHeading>
            <p>You may upload or send documents such as:</p>
            <LegalList
              items={[
                "FF&E schedules",
                "furniture schedules",
                "appliance schedules",
                "lighting schedules",
                "IT/AV briefs",
                "equipment schedules",
                "product lists",
                "supplier quotes",
                "drawings",
                "plans",
                "renders",
                "moodboards",
                "images",
                "specifications",
                "finishes schedules",
                "PDFs",
                "spreadsheets",
                "CSV files",
                "handover documents",
              ]}
            />
            <p>
              These documents may contain personal information, business
              information, pricing information, design information,
              supplier information or other commercially sensitive
              material.
            </p>

            <LegalSubHeading>Procurement and transaction information</LegalSubHeading>
            <p>If you engage us, we may collect:</p>
            <LegalList
              items={[
                "quote details",
                "approved products",
                "rejected products",
                "purchase order details",
                "invoice details",
                "payment status",
                "supplier confirmations",
                "delivery records",
                "warranty information",
                "manuals",
                "O&M information",
                "defect or product issue records",
                "handover documentation",
              ]}
            />

            <LegalSubHeading>Website and technical information</LegalSubHeading>
            <p>When you use our website, we may collect:</p>
            <LegalList
              items={[
                "IP address",
                "device type",
                "browser type",
                "pages visited",
                "form interactions",
                "referral source",
                "approximate location",
                "cookies and analytics data",
                "website usage information",
              ]}
            />
          </LegalSection>

          <LegalSection number={4} title="How we collect information">
            <p>We may collect information when you:</p>
            <LegalList
              items={[
                "visit our website",
                "complete an enquiry or upload form",
                "upload files or project documents",
                "email, call or message us",
                "request a quote",
                "request a SpecSwap review",
                "engage our procurement services",
                "approve a product, quote or substitution",
                "provide delivery or site information",
                "communicate with us during a project",
                "provide feedback",
                "subscribe to updates",
                "interact with our advertising or marketing",
              ]}
            />
            <p>
              We may also collect information from third parties where
              relevant, including:
            </p>
            <LegalList
              items={[
                "builders",
                "designers",
                "architects",
                "developers",
                "project managers",
                "clients",
                "suppliers",
                "manufacturers",
                "installers",
                "consultants",
                "delivery providers",
                "IT/AV consultants",
                "publicly available sources",
              ]}
            />
          </LegalSection>

          <LegalSection number={5} title="Why we collect information">
            <p>
              We collect information so we can provide and improve our
              services, including to:
            </p>
            <LegalList
              items={[
                "respond to enquiries",
                "review uploaded project documents",
                "assess FF&E and selected fitout requirements",
                "prepare SpecSwap reports, quotes and recommendations",
                "source original specified products",
                "identify better-value or faster-available alternatives",
                "check product suitability, design intent, lead times and availability",
                "communicate with suppliers, consultants and installers",
                "manage procurement",
                "place or administer orders",
                "coordinate delivery",
                "coordinate selected installation support",
                "prepare handover documents",
                "provide warranties, manuals and O&M information",
                "manage client relationships",
                "issue invoices and process payments",
                "maintain records",
                "improve our website and services",
                "comply with legal, accounting, tax, insurance and business obligations",
                "manage disputes, defects, product issues or claims",
              ]}
            />
          </LegalSection>

          <LegalSection
            number={6}
            title="Uploaded documents and project confidentiality"
          >
            <p>
              SpecSwap understands that uploaded project documents may
              contain confidential, commercial or project-sensitive
              information.
            </p>
            <p>
              We use uploaded documents only for purposes connected with
              providing our services, including reviewing the project,
              preparing recommendations, sourcing products, obtaining
              supplier pricing, coordinating procurement and preparing
              handover information.
            </p>
            <p>We do not sell uploaded documents.</p>
            <p>We do not publish uploaded documents publicly without permission.</p>
            <p>
              We only share project information where reasonably necessary
              to provide our services, obtain supplier pricing, coordinate
              procurement, manage delivery, support installation, prepare
              handover documentation, comply with legal obligations or
              protect our legitimate business interests.
            </p>
            <p>
              You should only upload documents that you are authorised to
              share with SpecSwap.
            </p>
          </LegalSection>

          <LegalSection
            number={7}
            title="Sharing information with suppliers and project partners"
          >
            <p>
              To provide our services, we may share relevant information
              with third parties such as:
            </p>
            <LegalList
              items={[
                "suppliers",
                "manufacturers",
                "wholesalers",
                "importers",
                "delivery providers",
                "installers",
                "interior designers",
                "IT/AV consultants",
                "procurement consultants",
                "project consultants",
                "subcontractors",
                "professional advisers",
                "software and cloud service providers",
              ]}
            />
            <p>
              Where practical, we only share the information reasonably
              required for the relevant purpose.
            </p>
            <p>
              For example, when seeking supplier pricing, we may share
              product descriptions, quantities, finishes, dimensions,
              delivery suburb, project timing, relevant drawings or
              schedule extracts. We generally avoid sharing unnecessary
              personal, commercial or client information.
            </p>
          </LegalSection>

          <LegalSection number={8} title="Third-party tools and platforms">
            <p>
              SpecSwap may use third-party software and service providers
              to operate the business.
            </p>
            <p>These currently include:</p>
            <LegalList
              items={[
                <>
                  <strong className="text-navy-900">Vercel</strong> —
                  website hosting
                </>,
                <>
                  <strong className="text-navy-900">Vercel Blob</strong> —
                  secure cloud storage for uploaded project documents
                </>,
                <>
                  <strong className="text-navy-900">Web3Forms</strong> —
                  form submission and email delivery for enquiries and
                  uploads
                </>,
              ]}
            />
            <p>
              We may add or change providers over time, including for CRM,
              accounting, analytics, communication or document preparation
              purposes as the business grows.
            </p>
            <p>
              These providers may store or process information on our
              behalf. Their own privacy policies and security practices may
              also apply.
            </p>
          </LegalSection>

          <LegalSection number={9} title="Overseas disclosure and offshore support">
            <p>
              Some of our suppliers, service providers, software platforms,
              consultants or support team members may be located outside
              Australia.
            </p>
            <p>
              This means your information may be stored, accessed or
              processed overseas, including through cloud software or
              offshore support arrangements.
            </p>
            <p>
              Where we disclose personal information to an overseas
              recipient and the Australian Privacy Principles apply, we
              will take reasonable steps required by APP 8. OAIC guidance
              explains that an APP entity that discloses personal
              information overseas may be accountable for certain acts or
              practices of the overseas recipient.
            </p>
            <p>
              Overseas locations may vary depending on the tools, suppliers
              and consultants used for a particular project.
            </p>
          </LegalSection>

          <LegalSection number={10} title="Marketing communications">
            <p>
              We may use your contact details to send you updates, service
              information, case studies, offers or other marketing
              communications where permitted by law.
            </p>
            <p>
              You can unsubscribe from marketing emails at any time by
              using the unsubscribe link or contacting us directly.
            </p>
            <p>
              Even if you unsubscribe from marketing, we may still send you
              service-related communications about enquiries, quotes,
              orders, deliveries, invoices, handover documents or ongoing
              projects.
            </p>
          </LegalSection>

          <LegalSection number={11} title="Cookies and analytics">
            <p>
              Our website may use cookies, pixels, analytics tools and
              similar technologies to understand website performance, user
              behaviour and marketing effectiveness.
            </p>
            <p>
              These tools may collect information such as device type,
              browser type, pages visited, referral source, approximate
              location and interactions with the website.
            </p>
            <p>
              You can disable cookies through your browser settings,
              although some website features may not work properly.
            </p>
          </LegalSection>

          <LegalSection number={12} title="Storage and security">
            <p>
              We take reasonable steps to protect information from misuse,
              interference, loss, unauthorised access, modification or
              disclosure. OAIC guidance under APP 11 requires reasonable
              steps to protect personal information, and its security
              guidance covers measures organisations should consider.
            </p>
            <p>Our security measures may include:</p>
            <LegalList
              items={[
                "using reputable cloud storage and software providers",
                "password protection",
                "access controls",
                "limiting access to staff, contractors and consultants who need the information",
                "using secure file sharing where practical",
                "maintaining project folders and records",
                "restricting supplier access to only relevant information",
                "reviewing and archiving information when no longer needed",
                "deleting or de-identifying information where appropriate",
              ]}
            />
            <p>
              No method of online transmission or electronic storage is
              completely secure. We cannot guarantee absolute security, but
              we take privacy and confidentiality seriously.
            </p>
          </LegalSection>

          <LegalSection number={13} title="Retention of information">
            <p>
              We keep information for as long as reasonably necessary for
              the purposes for which it was collected, including to provide
              services, manage projects, support warranty or handover
              obligations, comply with legal and accounting requirements,
              resolve disputes and maintain business records.
            </p>
            <p>Typical retention periods may include:</p>
            <LegalList
              items={[
                "enquiry information: up to 24 months after last contact",
                "uploaded files for unconverted enquiries: up to 12 months unless deletion is requested earlier",
                "project, procurement and handover records: up to 7 years or longer where required for legal, accounting, insurance, warranty or project reasons",
                "invoices and financial records: as required by tax and accounting laws",
                "warranty, manual and O&M records: for the relevant warranty, maintenance or project support period",
              ]}
            />
            <p>
              We may retain de-identified or aggregated information for
              business analysis, service improvement or record-keeping.
            </p>
          </LegalSection>

          <LegalSection number={14} title="Accessing or correcting your information">
            <p>
              You may contact us to request access to, or correction of,
              personal information we hold about you.
            </p>
            <p>We may need to verify your identity before responding.</p>
            <p>
              In some cases, we may refuse access or correction where
              permitted by law, including where the request would
              unreasonably impact the privacy of others, reveal
              commercially sensitive information, breach confidentiality
              obligations or be otherwise legally restricted.
            </p>
          </LegalSection>

          <LegalSection number={15} title="Deletion requests">
            <p>
              You may ask us to delete information or uploaded documents we
              hold about you or your project.
            </p>
            <p>
              We will take reasonable steps to delete or de-identify
              information where appropriate, unless we need to retain it
              for legal, accounting, insurance, warranty, dispute, project,
              contractual or legitimate business reasons.
            </p>
            <p>
              Deletion may not be immediate where information is stored in
              backups, email archives, supplier communications, accounting
              records or project records required for ongoing business
              purposes.
            </p>
          </LegalSection>

          <LegalSection number={16} title="Accuracy of information">
            <p>We rely on the information you provide to us.</p>
            <p>
              You should ensure that project documents, schedules,
              quantities, site details, delivery information, contact
              details and approval instructions are accurate, current and
              complete.
            </p>
            <p>If your information changes, please notify us as soon as possible.</p>
          </LegalSection>

          <LegalSection number={17} title="Information about other people">
            <p>
              If you provide us with information about another person, such
              as a client, site contact, designer, architect, supplier,
              consultant or employee, you must ensure you are authorised to
              do so and that the person would reasonably expect their
              information to be shared with SpecSwap for the relevant
              project or service.
            </p>
          </LegalSection>

          <LegalSection number={18} title="Children">
            <p>
              SpecSwap&apos;s services are intended for businesses, project
              teams and adults. We do not knowingly collect personal
              information from children.
            </p>
          </LegalSection>

          <LegalSection number={19} title="Data breaches">
            <p>
              If we become aware of a data breach involving personal
              information, we will assess the incident and take
              appropriate steps in accordance with applicable law.
            </p>
            <p>
              Where required, this may include notifying affected
              individuals and/or the Office of the Australian Information
              Commissioner.
            </p>
          </LegalSection>

          <LegalSection number={20} title="Links to third-party websites">
            <p>
              Our website, reports, quotes or communications may include
              links to third-party websites, suppliers or product pages.
            </p>
            <p>
              We are not responsible for the privacy practices, content or
              security of third-party websites.
            </p>
          </LegalSection>

          <LegalSection number={21} title="Changes to this Privacy Policy">
            <p>We may update this Privacy Policy from time to time.</p>
            <p>
              The latest version will be published on our website with the
              effective date shown at the top.
            </p>
            <p>
              Your continued use of our website or services after changes
              are published indicates your acceptance of the updated
              policy.
            </p>
          </LegalSection>

          <LegalSection number={22} title="Contact us">
            <p>
              For privacy questions, access requests, correction requests,
              deletion requests or complaints, contact:
            </p>
            <p className="text-navy-900">
              SpecSwap
              <br />
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-coral-600 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.specswap.com.au"
                className="font-medium text-coral-600 hover:underline"
              >
                www.specswap.com.au
              </a>
            </p>
            <p>
              We will aim to respond to privacy enquiries within a
              reasonable time.
            </p>
            <p>
              If you are not satisfied with our response and the Privacy
              Act applies, you may be able to contact the Office of the
              Australian Information Commissioner.
            </p>
          </LegalSection>
        </div>
      </Container>
    </div>
  );
}
