import { useState, type FormEvent } from 'react';
import { CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/studioData';

interface ReviewsSectionProps {
  onRequestReferences: () => void;
}

export function ReviewsSection({ onRequestReferences }: ReviewsSectionProps) {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('');
  const [projectType, setProjectType] = useState('Bespoke Kitchen Design & Installation');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !feedback.trim()) {
      setError('Please enter your name and your feedback before submitting.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const mailtoFeedbackHref = `mailto:${BUSINESS_CONTACT.email}?subject=${encodeURIComponent(
    `Client Review – ${reviewerName} (${projectType})`
  )}&body=${encodeURIComponent(
    `Client Name: ${reviewerName}\nLocation: ${reviewerLocation || 'Not specified'}\nProject Type: ${projectType}\n\nReview:\n${feedback}`
  )}`;

  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-[#F3EDE2] text-[#162C4E] border-b border-[#162C4E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Client Review Policy & Reference Request */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6C34]">
              Customer Reviews
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.12] text-[#162C4E] text-balance">
              Verified Client Experiences &amp; Local References
            </h2>
            <p className="text-[15px] leading-[1.75] text-[#4B5970]">
              We believe trust is earned through transparency. Rather than
              publishing unverified or anonymous quotes, Belle &amp; Bow Kitchens
              provides prospective clients with genuine references and recent
              client feedback directly during consultation.
            </p>

            <div className="p-7 bg-[#FAF7F2] border border-[#162C4E]/12 space-y-4">
              <div className="flex items-start gap-3.5">
                <ShieldCheck
                  className="w-5 h-5 text-[#8C6C34] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-editorial text-xl font-medium text-[#162C4E]">
                    Request Local Client References
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.65] text-[#4B5970]">
                    Planning a kitchen, fitted bedroom, media wall, or Venetian
                    plaster project in Telford, Shropshire, Staffordshire, or
                    Birmingham? Ask us for verified client references relevant to
                    your scope.
                  </p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onRequestReferences}
                  className="px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors cursor-pointer"
                >
                  Request References
                </button>
                <a
                  href={`${BUSINESS_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    'Hello Belle & Bow Kitchens, I would like to request verified client references for an upcoming project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase border border-[#162C4E]/25 text-[#162C4E] hover:bg-[#162C4E]/5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ask via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Client Review Submission Card */}
          <div className="lg:col-span-6 bg-[#FAF7F2] border border-[#162C4E]/12 p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8C6C34] mb-2">
              Past Clients
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#162C4E] mb-2">
              Leave Your Verified Review
            </h3>
            <p className="text-sm text-[#4B5970] leading-relaxed mb-6">
              If we have recently completed a kitchen, bedroom, or interior
              finish in your home, we welcome your honest review.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#F3EDE2] border border-[#C5A267]/50 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#162C4E] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-editorial text-xl font-medium text-[#162C4E]">
                      Thank you, {reviewerName}
                    </p>
                    <p className="mt-1 text-sm text-[#4B5970]">
                      Your review has been prepared. Click below to send it
                      directly to our studio email so it can be verified and
                      archived.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={mailtoFeedbackHref}
                    className="px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors"
                  >
                    Send Review via Email
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setReviewerName('');
                      setReviewerLocation('');
                      setFeedback('');
                    }}
                    className="px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase border border-[#162C4E]/25 text-[#162C4E] hover:bg-[#162C4E]/5 transition-colors cursor-pointer"
                  >
                    Write Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4" noValidate>
                {error && (
                  <p
                    role="alert"
                    className="p-3 text-xs font-medium bg-[#162C4E]/5 border border-[#162C4E]/30 text-[#162C4E]"
                  >
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="review-name"
                      className="block text-xs font-medium text-[#162C4E] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder="Full name"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="review-location"
                      className="block text-xs font-medium text-[#162C4E] mb-1.5"
                    >
                      Town / Area
                    </label>
                    <input
                      id="review-location"
                      type="text"
                      value={reviewerLocation}
                      onChange={(e) => setReviewerLocation(e.target.value)}
                      placeholder="e.g. Telford, Shropshire"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="review-project"
                    className="block text-xs font-medium text-[#162C4E] mb-1.5"
                  >
                    Completed Service
                  </label>
                  <select
                    id="review-project"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] focus:outline-none focus:border-[#162C4E]"
                  >
                    <option>Bespoke Kitchen Design &amp; Installation</option>
                    <option>Kitchen Supply &amp; Fitting</option>
                    <option>Bedroom Design &amp; Installation</option>
                    <option>Media Walls</option>
                    <option>Decorative Wall Panelling</option>
                    <option>Venetian Plaster Finishes</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="review-feedback"
                    className="block text-xs font-medium text-[#162C4E] mb-1.5"
                  >
                    Your Experience *
                  </label>
                  <textarea
                    id="review-feedback"
                    rows={3}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share how your kitchen or interior installation went..."
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-semibold tracking-[0.14em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors cursor-pointer"
                >
                  Submit Client Review
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
