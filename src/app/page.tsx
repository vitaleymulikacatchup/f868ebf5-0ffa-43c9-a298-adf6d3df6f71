"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Dumbbell, Facebook, Flower2, Heart, Instagram, Linkedin, MapPin, Sparkles, Star, Twitter, UtensilsCrossed, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763548701952-yek7vvc4.jpg"
          logoAlt="Hotel Logo"
          brandName="Luxury Stay"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Your Dream Destination"
          description="Experience unparalleled luxury and comfort in our award-winning hotel. Discover world-class amenities, impeccable service, and unforgettable moments."
          tag="Luxury Hospitality"
          buttons={[
            {
              text: "Explore Rooms",
              href: "rooms"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763548703177-8htyx4ka.jpg"
          imageAlt="Luxury hotel exterior showcasing elegant architecture"
          frameStyle="browser"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Your Home Away From Home"
          description="Nestled in the heart of the city, our hotel offers a perfect blend of modern luxury and timeless elegance. With over 20 years of hospitality excellence, we pride ourselves on delivering exceptional service to every guest."
          tag="About Us"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763548712544-45smtvee.jpg"
          imageAlt="Hotel concierge providing exceptional service"
          textboxLayout="default"
          bulletPoints={[
            {
              title: "World-Class Service",
              description: "Our dedicated staff ensures every need is met with precision and warmth",
              icon: Star
            },
            {
              title: "Prime Location",
              description: "Perfectly positioned near shopping, dining, and cultural attractions",
              icon: MapPin
            },
            {
              title: "Luxury Amenities",
              description: "From spa to fitness center, every detail designed for your comfort",
              icon: Sparkles
            }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <FeatureCardTwo
          title="Our Amenities"
          description="Indulge in our collection of premium facilities designed to elevate your stay"
          tag="Guest Amenities"
          textboxLayout="default"
          features={[
            {
              title: "Luxury Spa",
              description: "Rejuvenate your mind and body with world-class spa treatments and wellness services",
              icon: Flower2
            },
            {
              title: "Fine Dining",
              description: "Experience culinary excellence in our award-winning restaurants and lounges",
              icon: UtensilsCrossed
            },
            {
              title: "Fitness Center",
              description: "State-of-the-art equipment and professional trainers for your wellness goals",
              icon: Dumbbell
            },
            {
              title: "Infinity Pool",
              description: "Take a refreshing dip in our stunning rooftop pool with panoramic city views",
              icon: Waves
            }
          ]}
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          carouselMode="buttons"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Read what our valued guests have to say about their stay"
          tag="Testimonials"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Blogger",
              testimonial: "Absolutely stunning hotel with impeccable service. Every detail was perfectly executed. I'll definitely be returning!",
              icon: Heart
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              testimonial: "The perfect blend of luxury and comfort. Great location, excellent food, and staff who truly care.",
              icon: Heart
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Honeymoon Traveler",
              testimonial: "Our honeymoon was unforgettable. The spa, the dining, the views - everything exceeded our expectations.",
              icon: Heart
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Guest",
              testimonial: "Professional facilities with a luxury touch. Perfect for business meetings and relaxation. Highly recommended.",
              icon: Heart
            },
            {
              id: "5",
              name: "Jessica Thompson",
              role: "Luxury Travel Enthusiast",
              testimonial: "Five-star experience all the way. The attention to detail is remarkable. This is my go-to hotel.",
              icon: Heart
            },
            {
              id: "6",
              name: "Robert Martinez",
              role: "Frequent Traveler",
              testimonial: "Outstanding hospitality! The team anticipated our needs before we even asked. Truly exceptional service.",
              icon: Heart
            }
          ]}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Our Room Types"
          description="Choose the perfect room for your stay"
          tag="Accommodation"
          textboxLayout="default"
          plans={[
            {
              id: "standard",
              price: "$199",
              name: "Standard Room",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  onClick: null
                }
              ],
              features: [
                "King size bed",
                "Flat-screen TV",
                "Air conditioning",
                "Free Wi-Fi",
                "24-hour room service"
              ]
            },
            {
              id: "deluxe",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$349",
              name: "Deluxe Suite",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  onClick: null
                }
              ],
              features: [
                "Spacious bedroom & living area",
                "Premium bedding",
                "Marble bathroom",
                "City view balcony",
                "Complimentary spa credit"
              ]
            },
            {
              id: "penthouse",
              price: "$799",
              name: "Presidential Penthouse",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  onClick: null
                }
              ],
              features: [
                "Panoramic city views",
                "Private rooftop access",
                "Concierge service",
                "Gourmet dining package",
                "Luxury car service"
              ]
            }
          ]}
          animationType="slide-up"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay"
          tag="Guest Information"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is available from 3:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability."
            },
            {
              id: "2",
              title: "Do you offer complimentary parking?",
              content: "Yes, we provide complimentary valet parking for all our guests. Self-parking is also available in our secure underground parking facility."
            },
            {
              id: "3",
              title: "Is there free Wi-Fi in the rooms?",
              content: "Absolutely! High-speed Wi-Fi is complimentary throughout the entire hotel, including all rooms and public areas."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "We offer multiple dining experiences including our signature restaurant, lounge bar, rooftop café, and 24-hour room service with extensive menu options."
            },
            {
              id: "5",
              title: "Do you have meeting and event facilities?",
              content: "Yes, we have state-of-the-art conference rooms and ballrooms perfect for meetings, weddings, and special events. Contact our events team for details."
            },
            {
              id: "6",
              title: "Can I cancel or modify my reservation?",
              content: "Cancellations must be made 48 hours before arrival for a full refund. Modifications can be made through our website or by contacting our reservations team."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Your Stay"
          title="Reserve Your Perfect Getaway"
          description="Join hundreds of satisfied guests who have experienced luxury hospitality at its finest. Contact our booking team to start planning your unforgettable stay."
          inputPlaceholder="Enter your email address"
          buttonText="Get Offers"
          termsText="We respect your privacy. Unsubscribe anytime. By submitting, you agree to our Terms and Privacy Policy."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Luxury Stay"
          copyrightText="© 2025 Luxury Stay Hotel. All rights reserved."
          columns={[
            {
              title: "Quick Links",
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQs", href: "faq" },
                { label: "Policies", href: "policies" },
                { label: "Booking Help", href: "help" }
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
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}