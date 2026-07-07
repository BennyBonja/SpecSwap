import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LegalSection, LegalSubHeading, LegalList } from "@/components/legal/LegalSection";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — SpecSwap",
  description: "The terms and conditions that govern your use of SpecSwap.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Legal
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>

        <dl className="mt-4 space-y-1 text-sm text-slate-500">
          <div className="flex gap-2">
            <dt className="font-medium text-navy-900">Effective date:</dt>
            <dd>6 July 2026</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-navy-900">Business name:</dt>
            <dd>SpecSwap, a service of Bonja Group (ABN 64 814 797 294)</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-navy-900">Website:</dt>
            <dd>
              <a
                href="https://www.specswap.com.au"
                className="font-medium text-coral-600 hover:underline"
              >
                www.specswap.com.au
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-navy-900">Contact:</dt>
            <dd>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-coral-600 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
          <p>
            These Terms &amp; Conditions govern your use of the SpecSwap
            website and services.
          </p>
          <p>
            By accessing our website, submitting an enquiry, uploading
            documents, requesting a quote, approving a product, accepting a
            proposal, placing an order or otherwise engaging SpecSwap, you
            agree to these Terms &amp; Conditions.
          </p>
        </div>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-600">
          <LegalSection number={1} title="About SpecSwap">
            <p>
              SpecSwap provides FF&E procurement, specification review,
              product sourcing, value-management, procurement
              administration, ordering coordination, delivery coordination,
              selected installation coordination and handover documentation
              services.
            </p>
            <p>
              Our services may include reviewing furniture, fixtures,
              equipment, appliances, IT/AV, lighting, acoustic products,
              accessories, selected wall and ceiling products and other
              non-structural fitout-related products.
            </p>
            <p>
              SpecSwap is not a builder, architect, engineer, building
              surveyor or certifier. Unless expressly agreed in writing, we
              do not provide architectural, engineering, building
              certification, building surveying or regulated design
              services.
            </p>
          </LegalSection>

          <LegalSection number={2} title="Definitions">
            <p>In these Terms:</p>
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
                &ldquo;Client&rdquo;, &ldquo;you&rdquo; and &ldquo;your&rdquo;
              </strong>{" "}
              means the person, company, builder, designer, developer,
              project manager, consultant, homeowner or other party
              engaging with SpecSwap.
            </p>
            <p>
              <strong className="text-navy-900">&ldquo;Services&rdquo;</strong>{" "}
              means any service provided by SpecSwap, including
              specification review, product sourcing, procurement
              management, report-only support, order-on-behalf
              administration, delivery coordination, selected installation
              coordination and handover documentation.
            </p>
            <p>
              <strong className="text-navy-900">&ldquo;Products&rdquo;</strong>{" "}
              means furniture, fixtures, equipment, appliances, IT/AV
              products, lighting, accessories, acoustic products, selected
              wall or ceiling products and any other goods or materials
              reviewed, recommended, sourced, supplied or coordinated by
              SpecSwap.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;Uploaded Documents&rdquo;
              </strong>{" "}
              means FF&E schedules, drawings, plans, specifications, product
              lists, finishes schedules, appliance schedules, IT/AV briefs,
              moodboards, supplier quotes, PDFs, spreadsheets, images, CSV
              files or other documents provided to SpecSwap.
            </p>
            <p>
              <strong className="text-navy-900">&ldquo;Proposal&rdquo;</strong>{" "}
              means any quote, report, recommendation, estimate, proposal,
              scope, schedule, supply list or other document issued by
              SpecSwap.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;Specified Item&rdquo;
              </strong>{" "}
              means an original product, item or selection provided by an
              architect, designer, consultant, builder, client or other
              project party.
            </p>
            <p>
              <strong className="text-navy-900">
                &ldquo;Swap&rdquo; or &ldquo;Alternative&rdquo;
              </strong>{" "}
              means a product or option recommended as an alternative to a
              Specified Item.
            </p>
          </LegalSection>

          <LegalSection number={3} title="Service options">
            <p>
              SpecSwap may provide services under different engagement
              types.
            </p>

            <LegalSubHeading>3.1 Full Procurement Service</LegalSubHeading>
            <p>
              Under a Full Procurement Service, SpecSwap may assist with
              reviewing specifications, sourcing products, recommending
              alternatives, obtaining pricing, coordinating suppliers,
              placing or facilitating orders, managing procurement
              follow-up, coordinating delivery, supporting selected
              installation and preparing handover documentation.
            </p>

            <LegalSubHeading>
              3.2 Report-Only or Supply List Service
            </LegalSubHeading>
            <p>
              Under a Report-Only or Supply List Service, SpecSwap provides
              recommendations, supplier options, product information,
              lead-time notes, pricing indications and/or alternative
              product suggestions. The client remains responsible for
              ordering, delivery, installation, final checks and
              procurement execution unless otherwise agreed.
            </p>

            <LegalSubHeading>
              3.3 Order-on-Behalf / Procurement Administration
            </LegalSubHeading>
            <p>
              Under an Order-on-Behalf or Procurement Administration
              Service, SpecSwap may place orders, communicate with
              suppliers and coordinate procurement tasks on your behalf for
              an agreed administration, procurement management or service
              fee.
            </p>

            <LegalSubHeading>3.4 Custom service scope</LegalSubHeading>
            <p>
              The exact scope of work will be set out in the relevant
              Proposal, quote, email, written agreement or approved scope.
              If there is any inconsistency between these Terms and a
              specific written agreement signed by both parties, the signed
              agreement will prevail to the extent of the inconsistency.
            </p>
          </LegalSection>

          <LegalSection number={4} title="Scope limitations">
            <p>
              SpecSwap focuses on FF&E and selected non-structural,
              product-heavy fitout categories.
            </p>
            <p>
              Unless expressly agreed in writing, our services do not
              include responsibility for:
            </p>
            <LegalList
              items={[
                "structural products or systems",
                "fire-rated systems",
                "waterproofing systems",
                "building envelope systems",
                "engineered products",
                "mechanical, electrical, hydraulic or fire services design",
                "plasterboard systems or wall/ceiling systems requiring trade certification",
                "paint systems requiring specification compliance or warranty certification",
                "regulated building products",
                "code-critical or compliance-critical substitutions",
                "architectural, engineering or certification sign-off",
                "trade works requiring licensed contractors",
                "building permit compliance",
                "site safety management",
                "principal contractor obligations",
              ]}
            />
            <p>
              SpecSwap may review broader schedules to identify where we
              can assist, but this does not mean we accept responsibility
              for every item in a project schedule.
            </p>
          </LegalSection>

          <LegalSection number={5} title="Uploaded documents and authority">
            <p>You confirm that:</p>
            <LegalList
              items={[
                "you have the right and authority to provide Uploaded Documents to SpecSwap",
                "you have permission to share any drawings, schedules, specifications, pricing, client information or project documents you upload or send to us",
                "the information you provide is accurate, current and complete",
                "you will notify us promptly if any information changes",
              ]}
            />
            <p>
              You retain ownership of your Uploaded Documents. You grant
              SpecSwap permission to use, copy, review, extract, share and
              process Uploaded Documents as reasonably required to provide
              our Services, including to obtain supplier pricing, prepare
              recommendations, coordinate procurement, manage delivery and
              prepare handover documentation.
            </p>
          </LegalSection>

          <LegalSection number={6} title="Confidentiality">
            <p>
              SpecSwap will take reasonable steps to treat Uploaded
              Documents and project information as confidential.
            </p>
            <p>
              We may share relevant information with suppliers,
              manufacturers, consultants, installers, delivery providers,
              service providers and other project parties where reasonably
              required to provide the Services.
            </p>
            <p>
              Where practical, we will only share the information necessary
              for the relevant purpose, such as product descriptions,
              quantities, dimensions, finishes, delivery suburb, project
              timing, drawings or schedule extracts.
            </p>
            <p>
              Confidentiality obligations do not apply to information that
              is publicly available, already known to us, independently
              developed by us, disclosed with your consent, or required to
              be disclosed by law.
            </p>
          </LegalSection>

          <LegalSection
            number={7}
            title="Product recommendations and substitutions"
          >
            <p>
              SpecSwap may recommend alternatives to Specified Items based
              on factors such as price, availability, lead time, design
              intent, functionality, quality, supplier reliability,
              warranty and suitability.
            </p>
            <p>
              Unless expressly stated in writing, a recommended alternative
              is not guaranteed to be identical to the Specified Item.
            </p>
            <p>Alternatives may differ in:</p>
            <LegalList
              items={[
                "dimensions",
                "finish",
                "colour",
                "material",
                "construction",
                "brand",
                "warranty",
                "lead time",
                "installation method",
                "performance",
                "certification",
                "country of origin",
                "supplier terms",
              ]}
            />
            <p>
              You are responsible for reviewing and approving any
              alternative before purchase. Where relevant, you should
              obtain approval from the client, builder, architect,
              designer, superintendent, project manager, certifier,
              engineer, building surveyor or other responsible party before
              proceeding.
            </p>
            <p>
              SpecSwap is not responsible for consequences arising from a
              client&apos;s failure to obtain required approvals.
            </p>
          </LegalSection>

          <LegalSection
            number={8}
            title="Design intent and fit-for-purpose review"
          >
            <p>
              SpecSwap aims to recommend products that are suitable,
              practical and aligned with the intended design outcome.
            </p>
            <p>
              However, design intent, appearance, quality and suitability
              involve judgment. Unless expressly guaranteed in writing,
              SpecSwap does not warrant that an alternative will be
              identical, equivalent or acceptable to every project
              stakeholder.
            </p>
            <p>
              You remain responsible for confirming that selected products
              are suitable for the intended use, site conditions, project
              requirements, approvals, compliance obligations and end-user
              needs.
            </p>
          </LegalSection>

          <LegalSection number={9} title="Lead times, availability and programme">
            <p>
              SpecSwap may provide lead-time, availability and delivery
              information based on supplier, manufacturer, freight provider
              or consultant information.
            </p>
            <p>
              Lead times and availability are estimates only unless
              expressly guaranteed in writing.
            </p>
            <p>
              SpecSwap is not responsible for delays caused by suppliers,
              manufacturers, customs, freight providers, installers, site
              access issues, weather, force majeure events, incorrect
              information, late approvals, late payment, design changes,
              variations, or circumstances outside our reasonable control.
            </p>
            <p>
              If programme timing is critical, you must notify SpecSwap in
              writing before approving products or orders.
            </p>
          </LegalSection>

          <LegalSection number={10} title="Quotes, pricing and validity">
            <p>
              Prices may be based on supplier quotes, supplier catalogues,
              exchange rates, freight estimates, product availability,
              quantities, finishes, delivery locations and project
              assumptions.
            </p>
            <p>Unless stated otherwise:</p>
            <LegalList
              items={[
                "quotes are valid for 14 days from issue",
                "prices are exclusive of GST unless stated otherwise",
                "freight, delivery, installation, storage, handling and after-hours delivery costs may be additional",
                "supplier prices may change without notice",
                "products may become unavailable or discontinued",
                "imported products may be affected by exchange rates, duties, taxes, customs, freight and shipping costs",
              ]}
            />
            <p>
              SpecSwap may revise pricing if scope, quantities, supplier
              pricing, delivery requirements, site conditions or
              assumptions change.
            </p>
          </LegalSection>

          <LegalSection number={11} title="Orders and approvals">
            <p>No product order will be placed unless:</p>
            <LegalList
              items={[
                "a written Proposal, quote or product schedule has been accepted",
                "required approvals have been provided",
                "any required deposit or payment has been received",
                "all required information has been provided",
              ]}
            />
            <p>
              Approval may be given by email, signed quote, purchase order,
              online acceptance, written instruction or another method
              accepted by SpecSwap.
            </p>
            <p>
              Once an order is approved, cancellation or variation may not
              be possible, especially for custom, imported, made-to-order,
              clearance, special-order or supplier-restricted items.
            </p>
          </LegalSection>

          <LegalSection number={12} title="Payment terms">
            <p>
              Payment terms will be set out in the relevant Proposal, quote
              or invoice.
            </p>
            <p>Unless otherwise agreed in writing:</p>
            <LegalList
              items={[
                "a deposit or full payment may be required before orders are placed",
                "supplier orders may not proceed until cleared funds are received",
                "invoices are payable by the due date stated on the invoice",
                "late payments may delay orders, delivery or handover",
                "overdue amounts may attract interest, debt recovery costs or suspension of Services",
                "title to Products may not pass until full payment has been received",
              ]}
            />
            <p>
              SpecSwap may suspend or withhold Services, deliveries,
              documents, warranties or handover packs while amounts remain
              overdue, subject to applicable law.
            </p>
          </LegalSection>

          <LegalSection number={13} title="Variations">
            <p>
              Any change to scope, quantities, finishes, brands, delivery
              locations, programme requirements, installation requirements
              or documentation requirements may be treated as a variation.
            </p>
            <p>
              SpecSwap may issue a revised quote or variation claim for
              additional work, supplier charges, freight costs,
              administration, coordination time, storage, re-delivery,
              cancellation charges or other costs arising from the
              variation.
            </p>
          </LegalSection>

          <LegalSection number={14} title="Delivery">
            <p>
              Where SpecSwap coordinates delivery, delivery depends on
              supplier availability, freight providers, site access and
              project coordination.
            </p>
            <p>You are responsible for ensuring:</p>
            <LegalList
              items={[
                "accurate delivery address and site contact details",
                "safe and lawful site access",
                "suitable loading zones",
                "lift or stair access where required",
                "site readiness",
                "availability of a person to receive goods",
                "access during agreed delivery windows",
                "compliance with site induction or access requirements",
                "notification of any access restrictions",
              ]}
            />
            <p>
              Additional charges may apply for failed deliveries, waiting
              time, re-delivery, difficult access, after-hours delivery,
              storage, craneage, manual handling, stairs, remote delivery
              locations or changes to delivery timing.
            </p>
          </LegalSection>

          <LegalSection number={15} title="Receipt, inspection and damage">
            <p>
              You or your nominated site contact must inspect Products as
              soon as reasonably possible after delivery.
            </p>
            <p>
              Any visible damage, missing items, incorrect items or
              delivery issues must be reported to SpecSwap in writing
              within 48 hours of delivery, with photos and relevant
              details.
            </p>
            <p>
              Failure to report issues promptly may affect the ability to
              claim against suppliers, freight providers or insurers.
            </p>
            <p>
              Do not install, use, dispose of packaging or move damaged
              goods unless instructed, as this may affect warranty, freight
              or supplier claims.
            </p>
          </LegalSection>

          <LegalSection number={16} title="Storage">
            <p>
              If Products arrive before the site is ready, or delivery is
              delayed due to client, builder, site or project
              circumstances, storage charges may apply.
            </p>
            <p>
              Risk of damage, loss or additional costs may increase where
              goods are stored, moved, handled multiple times or delayed
              outside the original programme.
            </p>
            <p>
              SpecSwap is not responsible for damage, loss or delay caused
              by storage arrangements outside our control.
            </p>
          </LegalSection>

          <LegalSection number={17} title="Installation">
            <p>
              SpecSwap may coordinate selected installation services where
              suitable.
            </p>
            <p>
              Unless expressly agreed in writing, installation services are
              provided by third-party suppliers, installers or
              subcontractors, not directly by SpecSwap.
            </p>
            <p>Installation may be subject to:</p>
            <LegalList
              items={[
                "site readiness",
                "access",
                "dimensions",
                "substrate conditions",
                "existing services",
                "coordination with trades",
                "site safety requirements",
                "licensed contractor requirements",
                "builder approvals",
                "supplier installation terms",
              ]}
            />
            <p>
              SpecSwap does not perform licensed trade work unless
              expressly agreed and legally permitted.
            </p>
          </LegalSection>

          <LegalSection number={18} title="Warranties, manuals and O&M documents">
            <p>
              SpecSwap may assist with collecting and preparing warranties,
              manuals, care instructions and O&M documentation.
            </p>
            <p>
              Product warranties are generally provided by the relevant
              manufacturer, supplier or installer, not SpecSwap, unless
              expressly stated otherwise.
            </p>
            <p>
              Warranty periods, exclusions and claim processes vary by
              product and supplier.
            </p>
            <p>
              SpecSwap may assist with warranty claims where agreed, but is
              not responsible for manufacturer or supplier warranty
              decisions, delays or exclusions.
            </p>
            <p>
              Nothing in these Terms limits rights you may have under the
              Australian Consumer Law.
            </p>
          </LegalSection>

          <LegalSection number={19} title="Handover documentation">
            <p>
              Where included in the scope, SpecSwap may prepare digital or
              physical handover documentation.
            </p>
            <p>
              Handover documents may include product schedules, supplier
              details, warranties, manuals, care instructions, O&M
              information and other relevant records.
            </p>
            <p>
              Handover documentation is prepared based on information
              available from suppliers, manufacturers, consultants and
              project records. SpecSwap is not responsible for errors or
              omissions in third-party documents provided to us.
            </p>
          </LegalSection>

          <LegalSection
            number={20}
            title="Renders, visualisations and product images"
          >
            <p>
              SpecSwap may provide renders, visualisations, moodboards,
              product placement views or images to assist decision-making.
            </p>
            <p>
              These are indicative only and may not represent exact
              dimensions, finishes, colours, textures, lighting, scale,
              site conditions or final appearance.
            </p>
            <p>
              You should not rely solely on renders or images when
              approving products. Physical samples, supplier
              specifications, dimensions and technical data should be
              reviewed where important.
            </p>
          </LegalSection>

          <LegalSection number={21} title="Imported products">
            <p>
              Where imported products are considered or supplied,
              additional risks may apply, including:
            </p>
            <LegalList
              items={[
                "longer lead times",
                "shipping delays",
                "customs delays",
                "duties and taxes",
                "currency fluctuations",
                "minimum order quantities",
                "sampling requirements",
                "quality control requirements",
                "limited return options",
                "different warranty processes",
                "freight damage risks",
              ]}
            />
            <p>
              Imported products should only proceed after written approval
              and acceptance of the relevant risks, pricing and lead times.
            </p>
          </LegalSection>

          <LegalSection number={22} title="Returns, cancellations and refunds">
            <p>
              Returns, cancellations and refunds depend on the product,
              supplier terms, order status and applicable law.
            </p>
            <p>
              Custom, made-to-order, imported, special-order, clearance,
              assembled, installed or used Products may not be cancellable
              or returnable unless required by law or accepted by the
              supplier.
            </p>
            <p>
              SpecSwap will not make misleading &ldquo;no refund&rdquo;
              claims. Your rights under the Australian Consumer Law remain
              protected, including consumer guarantees that cannot be
              excluded.
            </p>
            <p>
              Where a return is accepted, restocking fees, freight fees,
              handling fees, supplier fees or administration fees may
              apply, except where prohibited by law.
            </p>
          </LegalSection>

          <LegalSection number={23} title="Australian Consumer Law">
            <p>
              Nothing in these Terms excludes, restricts or modifies any
              rights, remedies, guarantees or warranties that cannot be
              excluded, restricted or modified under the Australian
              Consumer Law or other applicable law.
            </p>
            <p>
              Where permitted by law, SpecSwap&apos;s liability for breach
              of any non-excludable guarantee is limited, at our option,
              to:
            </p>
            <LegalSubHeading>For goods:</LegalSubHeading>
            <LegalList
              items={[
                "replacement of the goods",
                "supply of equivalent goods",
                "repair of the goods",
                "payment of the cost of replacing the goods",
                "payment of the cost of acquiring equivalent goods",
                "payment of the cost of having the goods repaired",
              ]}
            />
            <LegalSubHeading>For services:</LegalSubHeading>
            <LegalList
              items={[
                "supplying the services again",
                "payment of the cost of having the services supplied again",
              ]}
            />
            <p>
              This limitation does not apply where it would be unlawful to
              apply it.
            </p>
          </LegalSection>

          <LegalSection number={24} title="Liability">
            <p>
              To the maximum extent permitted by law, SpecSwap is not
              liable for indirect, consequential, special or economic loss,
              including loss of profit, loss of opportunity, loss of
              contract, delay damages, liquidated damages, loss of
              goodwill, loss of data or project delay, except to the extent
              such liability cannot be excluded by law.
            </p>
            <p>
              To the maximum extent permitted by law, SpecSwap&apos;s total
              liability arising out of or in connection with the Services
              is limited to the amount paid by you to SpecSwap for the
              relevant Service giving rise to the claim.
            </p>
            <p>
              This clause does not exclude liability that cannot be
              excluded under the Australian Consumer Law or other
              applicable law.
            </p>
          </LegalSection>

          <LegalSection number={25} title="Client responsibilities">
            <p>You are responsible for:</p>
            <LegalList
              items={[
                "providing accurate and complete information",
                "confirming quantities",
                "confirming site measurements",
                "reviewing product specifications",
                "obtaining required approvals",
                "notifying us of critical dates",
                "confirming delivery access",
                "checking site readiness",
                "reviewing quotes and reports carefully",
                "paying invoices on time",
                "ensuring products are suitable for your project",
                "ensuring relevant stakeholders approve substitutions",
                "complying with your own contract, project and legal obligations",
              ]}
            />
            <p>
              SpecSwap is not responsible for issues caused by incomplete
              information, inaccurate quantities, late approvals, incorrect
              assumptions, site constraints, design changes, client changes
              or third-party decisions.
            </p>
          </LegalSection>

          <LegalSection number={26} title="Supplier and third-party services">
            <p>
              SpecSwap may rely on suppliers, manufacturers, freight
              providers, consultants, installers, subcontractors and
              software providers.
            </p>
            <p>
              SpecSwap is not responsible for third-party acts, omissions,
              delays, warranties, product defects, misrepresentations or
              failures except to the extent required by law or expressly
              agreed in writing.
            </p>
            <p>
              Where appropriate, SpecSwap may assist you to communicate
              with suppliers or resolve issues, but supplier warranties and
              obligations remain subject to supplier terms and applicable
              law.
            </p>
          </LegalSection>

          <LegalSection number={27} title="Intellectual property">
            <p>
              All SpecSwap branding, website content, report formats,
              templates, processes, copy, layouts, graphics, documents and
              materials are owned by or licensed to SpecSwap.
            </p>
            <p>
              You may use SpecSwap reports, quotes and documents for the
              relevant project only. You must not copy, reproduce, resell,
              adapt or use SpecSwap materials for competing business
              purposes without written permission.
            </p>
            <p>You retain ownership of your Uploaded Documents.</p>
          </LegalSection>

          <LegalSection number={28} title="Website use">
            <p>You must not use our website to:</p>
            <LegalList
              items={[
                "upload unlawful, harmful, misleading or infringing material",
                "interfere with website operation",
                "attempt unauthorised access",
                "submit false information",
                "scrape, copy or misuse content",
                "transmit viruses or malicious code",
                "breach any law or third-party rights",
              ]}
            />
            <p>
              We may restrict or block access to our website where we
              consider it necessary.
            </p>
          </LegalSection>

          <LegalSection number={29} title="Privacy">
            <p>
              SpecSwap handles personal information in accordance with our{" "}
              <Link href="/privacy" className="font-medium text-coral-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              By using our website or Services, you agree that we may
              collect, use, store and disclose information in accordance
              with our Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection number={30} title="Non-solicitation">
            <p>
              During a project and for 12 months after completion, you must
              not knowingly solicit, engage or bypass SpecSwap to directly
              engage suppliers, consultants, installers, subcontractors or
              support providers introduced by SpecSwap for the same
              project, except with our written consent.
            </p>
            <p>
              This clause does not prevent you from dealing with suppliers
              you already had a genuine prior relationship with.
            </p>
          </LegalSection>

          <LegalSection number={31} title="Force majeure">
            <p>
              SpecSwap is not liable for delay or failure to perform caused
              by events outside our reasonable control, including supplier
              delays, freight delays, customs delays, industrial action,
              natural disasters, pandemics, government restrictions, war,
              cyber incidents, power outages, material shortages, extreme
              weather or other force majeure events.
            </p>
          </LegalSection>

          <LegalSection number={32} title="Disputes">
            <p>
              If a dispute arises, the parties must first attempt to
              resolve it in good faith by negotiation.
            </p>
            <p>
              Either party may give written notice of the dispute, setting
              out the issue and desired outcome.
            </p>
            <p>
              The parties should meet or communicate within 10 business
              days of the notice to try to resolve the dispute.
            </p>
            <p>
              Nothing prevents either party from seeking urgent injunctive
              relief or taking action to recover unpaid amounts.
            </p>
          </LegalSection>

          <LegalSection number={33} title="Termination">
            <p>SpecSwap may suspend or terminate Services if:</p>
            <LegalList
              items={[
                "you fail to pay invoices",
                "you provide inaccurate or misleading information",
                "you fail to provide required approvals",
                "you materially breach these Terms",
                "continuing the Services becomes impractical, unsafe, unlawful or commercially unreasonable",
                "suppliers withdraw or materially change availability",
                "there is a breakdown in the working relationship",
              ]}
            />
            <p>
              If Services are terminated, you remain liable for work
              performed, Products ordered, supplier charges, cancellation
              fees, administration fees, delivery fees, storage fees and
              other costs incurred before termination.
            </p>
          </LegalSection>

          <LegalSection number={34} title="Changes to these Terms">
            <p>SpecSwap may update these Terms from time to time.</p>
            <p>
              The latest version will be published on our website with the
              effective date shown at the top.
            </p>
            <p>
              The Terms in effect at the time you accept a Proposal or
              engage SpecSwap will apply to that engagement, unless
              otherwise agreed.
            </p>
          </LegalSection>

          <LegalSection number={35} title="Governing law">
            <p>These Terms are governed by the laws of Victoria, Australia.</p>
            <p>
              The parties submit to the non-exclusive jurisdiction of the
              courts of Victoria and the Commonwealth courts of Australia.
            </p>
          </LegalSection>

          <LegalSection number={36} title="Contact">
            <p>For questions about these Terms, contact:</p>
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
          </LegalSection>
        </div>
      </Container>
    </div>
  );
}
