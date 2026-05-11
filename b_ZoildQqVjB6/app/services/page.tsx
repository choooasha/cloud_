import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Palette,
  Code,
  Megaphone,
  LineChart,
  Smartphone,
  Cloud,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description:
      "Create a memorable brand identity that resonates with your audience and sets you apart from the competition.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable web applications using the latest technologies and best practices.",
    features: [
      "Custom Websites",
      "E-commerce",
      "Web Applications",
      "API Development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Develop intuitive mobile applications for iOS and Android that users love to use every day.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform",
      "App Maintenance",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Reach your target audience effectively with data-driven marketing strategies that deliver results.",
    features: ["SEO", "Content Marketing", "Social Media", "Email Campaigns"],
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description:
      "Make informed decisions with comprehensive analytics and actionable insights about your business.",
    features: [
      "Data Analysis",
      "Performance Tracking",
      "User Research",
      "A/B Testing",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scale your infrastructure effortlessly with reliable and secure cloud solutions tailored to your needs.",
    features: [
      "Cloud Migration",
      "Infrastructure",
      "DevOps",
      "Security",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-foreground">
              Our Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions designed to help your business grow and
              succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-border bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help transform your business with
              our comprehensive solutions.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
