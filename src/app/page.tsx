"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BarChart3, Building2, Facebook, Home, Instagram, Linkedin, Mail, Phone, TrendingUp, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667218690-8pob19dp.jpg"
          logoAlt="Jake Young's Estate Logo"
          brandName="Jake Young's Estate"
          button={{
            text: "Schedule Viewing",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Jake Young's Estate"
          description="Premium luxury real estate showcasing the finest properties and exceptional service in your area"
          buttons={[
            {
              text: "Browse Properties",
              href: "properties"
            },
            {
              text: "Contact Us",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667219290-gr3p367a.jpg"
          imageAlt="Luxury modern home exterior"
          showDimOverlay={true}
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardOne
          title="Featured Properties"
          description="Explore our curated selection of premium luxury properties"
          products={[
            {
              id: "prop-1",
              name: "Modern Lakeside Estate",
              price: "$2,450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667219967-7m6ypysv.jpg",
              imageAlt: "Modern lakeside luxury estate"
            },
            {
              id: "prop-2",
              name: "Contemporary Urban Penthouse",
              price: "$1,890,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667220720-x8fal5p0.jpg",
              imageAlt: "Contemporary urban penthouse"
            },
            {
              id: "prop-3",
              name: "Historic Manor House",
              price: "$3,200,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667221536-8np4o93r.jpg",
              imageAlt: "Historic luxury manor property"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="services" data-section="services">
        <SplitAbout
          title="Our Real Estate Services"
          description="We provide comprehensive real estate solutions tailored to your needs, whether you're buying, selling, or investing"
          bulletPoints={[
            {
              title: "Property Sales",
              description: "Expert guidance in buying and selling luxury properties with market knowledge and strategic pricing",
              icon: Home
            },
            {
              title: "Investment Guidance",
              description: "Strategic advice for real estate investments with strong ROI potential and market analysis",
              icon: TrendingUp
            },
            {
              title: "Market Analysis",
              description: "Detailed market reports and property valuations to ensure informed decision-making",
              icon: BarChart3
            },
            {
              title: "Property Management",
              description: "Professional management services for your rental properties and tenant relations",
              icon: Building2
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667222830-w33b1llj.jpg"
          imageAlt="Real estate agents meeting with clients"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Agents"
          description="Our dedicated team of professional real estate agents committed to your success"
          members={[
            {
              id: "agent-1",
              name: "Jake Young",
              role: "Founder & Principal Agent",
              description: "25+ years of real estate excellence with proven track record in luxury property sales and market leadership",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764686020469-oyogjn9a.jpg",
              imageAlt: "Jake Young, Founder",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Mail,
                  url: "mailto:jake@example.com"
                }
              ]
            },
            {
              id: "agent-2",
              name: "Sarah Mitchell",
              role: "Senior Real Estate Agent",
              description: "Specializing in residential properties with exceptional client service and negotiation expertise",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764686020354-bq96mu4r.jpg",
              imageAlt: "Sarah Mitchell, Senior Agent",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Phone,
                  url: "tel:+1234567890"
                }
              ]
            },
            {
              id: "agent-3",
              name: "Michael Chen",
              role: "Commercial Properties Specialist",
              description: "Expert in commercial real estate with deep knowledge of investment properties and market trends",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764686020621-l5uuioi1.jpg",
              imageAlt: "Michael Chen, Commercial Specialist",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "agent-4",
              name: "Emma Rodriguez",
              role: "Client Relations Manager",
              description: "Dedicated to ensuring seamless transactions and exceptional experiences for every client",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764686020775-xw908pzb.jpg",
              imageAlt: "Emma Rodriguez, Client Relations",
              socialLinks: [
                {
                  icon: Mail,
                  url: "mailto:emma@example.com"
                },
                {
                  icon: Phone,
                  url: "tel:+1234567890"
                }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Testimonials"
          description="Hear from our satisfied clients about their experience with Jake Young's Estate"
          testimonials={[
            {
              id: "test-1",
              name: "David Johnson",
              role: "Home Buyer",
              testimonial: "Jake Young's team made the entire home buying process smooth and stress-free. Their expertise and attention to detail were exceptional. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667226115-pokr7b4s.jpg",
              imageAlt: "David Johnson testimonial"
            },
            {
              id: "test-2",
              name: "Jennifer Lee",
              role: "Property Seller",
              testimonial: "We sold our property in record time with an excellent price. The marketing strategy and professional handling were outstanding. Thank you!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667226908-hacsoubv.jpg",
              imageAlt: "Jennifer Lee testimonial"
            },
            {
              id: "test-3",
              name: "Robert Martinez",
              role: "Real Estate Investor",
              testimonial: "As an investor, I appreciate their market analysis and investment guidance. They helped me build a profitable real estate portfolio.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667227761-7aerkkqq.jpg",
              imageAlt: "Robert Martinez testimonial"
            },
            {
              id: "test-4",
              name: "Amanda Foster",
              role: "Property Owner",
              testimonial: "Their property management services are top-notch. Professional, responsive, and reliable. My investment properties are in excellent hands.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667228491-c7rd164x.jpg",
              imageAlt: "Amanda Foster testimonial"
            },
            {
              id: "test-5",
              name: "Christopher Williams",
              role: "First-Time Buyer",
              testimonial: "As a first-time buyer, I was nervous about the process. Jake's team walked me through everything with patience and expertise. Best decision ever!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667229144-f4awhyyf.jpg",
              imageAlt: "Christopher Williams testimonial"
            },
            {
              id: "test-6",
              name: "Victoria Park",
              role: "Luxury Home Buyer",
              testimonial: "The level of sophistication and service for luxury properties is unmatched. They truly understand the high-end market and deliver results.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667229589-zw3f1qum.jpg",
              imageAlt: "Victoria Park testimonial"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our services and the real estate process"
          faqs={[
            {
              id: "faq-1",
              title: "How much does it cost to sell my property?",
              content: "Our commission structure is competitive and negotiable based on property type and market conditions. We offer transparent pricing with no hidden fees. Contact us for a personalized quote."
            },
            {
              id: "faq-2",
              title: "What is the average time to sell a property?",
              content: "Average selling time varies by market conditions and property type, typically ranging from 30-90 days. Our strategic marketing approach and expert pricing help properties sell faster."
            },
            {
              id: "faq-3",
              title: "Do you handle rental properties?",
              content: "Yes, we provide comprehensive property management services including tenant screening, maintenance coordination, rent collection, and financial reporting."
            },
            {
              id: "faq-4",
              title: "Can you help with investment property analysis?",
              content: "Absolutely. We provide detailed market analysis, ROI projections, and investment guidance to help you build a profitable real estate portfolio."
            },
            {
              id: "faq-5",
              title: "What makes Jake Young's Estate different?",
              content: "Our team combines decades of experience with personalized service, market expertise, and a commitment to client satisfaction. We treat every transaction with care and professionalism."
            },
            {
              id: "faq-6",
              title: "How do I schedule a property viewing?",
              content: "You can schedule a viewing through our website contact form, call us directly, or email our team. We accommodate your schedule and arrange convenient viewing times."
            }
          ]}
          textPosition="left"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated on New Listings"
          description="Subscribe to receive exclusive updates on premium properties, market insights, and real estate tips delivered directly to your inbox"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764667230402-byfg0d9n.jpg"
          imageAlt="Modern real estate office workspace"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. We only send relevant real estate updates and market insights."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Jake Young's Estate"
          copyrightText="© Jake Young's Estate, All Rights Reserved 2025"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Services",
                  href: "services"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Properties",
              items: [
                {
                  label: "Featured Listings",
                  href: "properties"
                },
                {
                  label: "Property Search",
                  href: "search"
                },
                {
                  label: "New Listings",
                  href: "new"
                },
                {
                  label: "Investment Properties",
                  href: "investment"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Market Analysis",
                  href: "market"
                },
                {
                  label: "Buyer's Guide",
                  href: "buyers-guide"
                },
                {
                  label: "Seller's Guide",
                  href: "sellers-guide"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Disclaimer",
                  href: "disclaimer"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Mail,
              href: "mailto:info@jakeyoungestate.com",
              ariaLabel: "Email"
            },
            {
              icon: Phone,
              href: "tel:+1234567890",
              ariaLabel: "Phone"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}