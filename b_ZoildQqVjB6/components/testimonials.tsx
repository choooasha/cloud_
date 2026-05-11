import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with this team transformed our business. Their attention to detail and commitment to excellence exceeded all expectations.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures",
  },
  {
    quote:
      "The level of professionalism and creativity they brought to our project was remarkable. Highly recommend their services.",
    author: "James Chen",
    role: "Founder, Innovate Labs",
  },
  {
    quote:
      "They delivered beyond what we imagined. Our conversion rates increased by 200% within the first month of launch.",
    author: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our partners
            have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent/40 mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
