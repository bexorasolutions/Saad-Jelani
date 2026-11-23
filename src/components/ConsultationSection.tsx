import { useEffect, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  BUSINESS_CONTACT,
  STUDIO_SERVICES,
  type ServiceId,
} from '../data/studioData';

interface ConsultationSectionProps {
  preselectedService: ServiceId | null;
  prefillNote?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  services?: string;
}

export function ConsultationSection({
  preselectedService,
  prefillNote,
}: ConsultationSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Telford');
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>([
    'bespoke-kitchens',
  ]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedServices((prev) =>
        prev.includes(preselectedService) ? prev : [...prev, preselectedService]
      );
      setSubmitted(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefillNote) {
      setNotes(prefillNote);
      setSubmitted(false);
    }
  }, [prefillNote]);

  const toggleService = (id: ServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = phone.replace(/[^\d+]/g, '');
    if (digitsOnly.length < 7) {
      nextErrors.phone = 'Please enter a valid UK telephone number.';
    }
    if (selectedServices.length === 0) {
      nextErrors.services = 'Please select at least one service.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const selectedServiceNames = STUDIO_SERVICES.filter((s) =>
    selectedServices.includes(s.id)
  )
    .map((s) => s.title)
    .join(', ');

  const enquirySummaryText = `Hello Belle & Bow Kitchens,\n\nI would like to book a Free Design Consultation.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${area}\nServices of Interest: ${selectedServiceNames}\nProject Notes: ${notes || 'No additional notes provided'}`;

  const whatsappPrefilledHref = `${BUSINESS_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    enquirySummaryText
  )}`;

  const mailtoPrefilledHref = `mailto:${BUSINESS_CONTACT.email}?subject=${encodeURIComponent(
    `Design Consultation Enquiry – ${name} (${area})`
  )}&body=${encodeURIComponent(enquirySummaryText)}`;

  return (
    <section
      id="consultation"
      className="py-20 lg:py-28 bg-[#FAF7F2] text-[#162C4E]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Contact, Click-to-Call & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6C34] mb-3">
                Contact &amp; Free Consultation
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.9rem] font-medium leading-[1.12] text-[#162C4E] text-balance mb-5">
                Begin Your Interior Design Consultation
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#4B5970]">
                Arrange a complimentary, no-obligation consultation at your home
                across Telford, Shropshire, Staffordshire, or Birmingham. Speak
                with our studio directly or complete the enquiry form.
              </p>
            </div>

            {/* Primary Direct Contact Actions */}
            <div className="space-y-3">
              <a
                href={BUSINESS_CONTACT.phoneHref}
                className="flex items-center justify-between gap-4 p-5 bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <Phone
                    className="w-5 h-5 text-[#DFC99E] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#DFC99E]">
                      Click to Call Studio
                    </p>
                    <p className="font-editorial text-2xl font-medium tabular-nums">
                      {BUSINESS_CONTACT.phoneDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#DFC99E] group-hover:underline">
                  Call Now
                </span>
              </a>

              <a
                href={BUSINESS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-5 bg-[#F3EDE2] border border-[#162C4E]/15 text-[#162C4E] hover:border-[#C5A267] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle
                    className="w-5 h-5 text-[#8C6C34] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#8C6C34]">
                      Direct Messaging
                    </p>
                    <p className="font-editorial text-2xl font-medium">
                      WhatsApp Studio Chat
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#162C4E] group-hover:text-[#8C6C34]">
                  Message
                </span>
              </a>
            </div>

            {/* Studio Coordinates */}
            <div className="pt-6 border-t border-[#162C4E]/12 space-y-4 text-sm text-[#4B5970]">
              <div className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 text-[#8C6C34] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-[0.1em] text-[#8C6C34]">
                    Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_CONTACT.email}`}
                    className="text-[#162C4E] font-medium hover:underline underline-offset-4"
                  >
                    {BUSINESS_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-[#8C6C34] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs uppercase tracking-[0.1em] text-[#8C6C34]">
                    Studio &amp; Service Areas
                  </span>
                  <p className="text-[#162C4E] font-medium">
                    {BUSINESS_CONTACT.location}
                  </p>
                  <p className="text-xs mt-0.5 text-[#4B5970]">
                    Serving {BUSINESS_CONTACT.serviceAreas.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Consultation Booking Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#162C4E]/15 p-7 sm:p-10">
            {submitted ? (
              <div className="space-y-6 py-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="w-7 h-7 text-[#162C4E] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8C6C34] mb-1">
                      Consultation Request Ready
                    </p>
                    <h3 className="font-editorial text-3xl font-medium text-[#162C4E]">
                      Thank you, {name}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] text-[#4B5970]">
                      Your design consultation details have been prepared. Send
                      your enquiry directly via WhatsApp for an immediate studio
                      response, or dispatch it via your email client.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#F3EDE2] border border-[#162C4E]/10 text-sm space-y-2 text-[#162C4E]">
                  <p>
                    <span className="text-[#4B5970]">Area:</span> {area}
                  </p>
                  <p>
                    <span className="text-[#4B5970]">Services:</span>{' '}
                    {selectedServiceNames}
                  </p>
                  <p className="tabular-nums">
                    <span className="text-[#4B5970]">Contact:</span> {phone} ·{' '}
                    {email}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={whatsappPrefilledHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-semibold tracking-[0.14em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={mailtoPrefilledHref}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-semibold tracking-[0.14em] uppercase bg-[#C5A267] text-[#0F1F38] hover:bg-[#DFC99E] transition-colors text-center"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-medium text-[#4B5970] hover:text-[#162C4E] underline underline-offset-4 cursor-pointer"
                >
                  Edit enquiry details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="pb-4 border-b border-[#162C4E]/10">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#162C4E]">
                    Book a Free Design Consultation
                  </h3>
                  <p className="mt-1 text-xs text-[#4B5970]">
                    BiKBBI Registered · £5M Public Liability Insured · 10+ Years
                    Experience
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="consult-name"
                      className="block text-xs font-semibold tracking-[0.06em] uppercase text-[#162C4E] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="consult-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E]"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="consult-phone"
                      className="block text-xs font-semibold tracking-[0.06em] uppercase text-[#162C4E] mb-2"
                    >
                      Telephone Number *
                    </label>
                    <input
                      id="consult-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07880 495995"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E] tabular-nums"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="consult-email"
                      className="block text-xs font-semibold tracking-[0.06em] uppercase text-[#162C4E] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="consult-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.co.uk"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E]"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="consult-area"
                      className="block text-xs font-semibold tracking-[0.06em] uppercase text-[#162C4E] mb-2"
                    >
                      Location / Area
                    </label>
                    <select
                      id="consult-area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] focus:outline-none focus:border-[#162C4E]"
                    >
                      <option value="Telford">Telford</option>
                      <option value="Shropshire">Shropshire</option>
                      <option value="Staffordshire">Staffordshire</option>
                      <option value="Birmingham">Birmingham</option>
                      <option value="Surrounding West Midlands">
                        Surrounding West Midlands
                      </option>
                    </select>
                  </div>
                </div>

                {/* Multi-Select Services */}
                <fieldset>
                  <legend className="block text-xs font-semibold tracking-[0.06em] uppercase text-[#162C4E] mb-2.5">
                    Services of Interest *
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {STUDIO_SERVICES.map((service) => {
                      const active = selectedServices.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          aria-pressed={active}
                          className={`px-3.5 py-2.5 text-left text-xs font-medium border transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#162C4E] text-[#FAF7F2] border-[#162C4E]'
                              : 'bg-white text-[#162C4E] border-[#162C4E]/20 hover:border-[#C5A267]'
                          }`}
                        >
                          {service.title}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="mt-1.5 text-xs text-red-700" role="alert">
                      {errors.services}
                    </p>
                  )}
                </fieldset>

                <div>
                  <label
                    htmlFor="consult-notes"
                    className="block text-xs font-semibold tracking-[0.06em] uppercase text-[#162C4E] mb-2"
                  >
                    Project Details &amp; Preferred Times
                  </label>
                  <textarea
                    id="consult-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your room dimensions, desired timeframe, or preferred consultation days..."
                    className="w-full px-4 py-3 text-sm bg-white border border-[#162C4E]/20 text-[#162C4E] placeholder:text-[#4B5970]/60 focus:outline-none focus:border-[#162C4E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs font-semibold tracking-[0.14em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267]"
                >
                  Book a Free Design Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
