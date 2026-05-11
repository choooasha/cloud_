import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Users, Award, Globe, Heart } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "50+" },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "We believe in putting people at the center of everything we do, creating meaningful connections and lasting relationships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project, pushing boundaries and exceeding expectations consistently.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Our work reaches across borders, making a positive impact on businesses and communities worldwide.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We&apos;re passionate about what we do, bringing enthusiasm and dedication to every challenge we face.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-foreground">
              About Us
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a team of passionate creators, innovators, and
              problem-solvers dedicated to transforming ideas into exceptional
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, Elevate began with a simple mission: to help
                  businesses thrive in the digital age. What started as a small
                  team of designers and developers has grown into a full-service
                  agency serving clients worldwide.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of working with
                  startups, Fortune 500 companies, and everything in between.
                  Each project has taught us something new and helped us refine
                  our craft.
                </p>
                <p>
                  Today, we continue to push the boundaries of what&apos;s
                  possible, combining creativity with technology to deliver
                  solutions that make a real difference.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-3xl md:text-4xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-foreground">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
