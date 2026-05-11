import { Lightbulb, Zap, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We bring fresh perspectives and cutting-edge approaches to every project we undertake.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience rapid delivery without compromising on quality or attention to detail.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your trust is our priority. We implement industry-leading security measures.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Every decision we make is focused on delivering measurable outcomes for your success.",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-foreground">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build exceptional products and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
