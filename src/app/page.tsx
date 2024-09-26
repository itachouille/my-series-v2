"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tv, ListChecks, Share2, ArrowRight } from "lucide-react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/20 to-white">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Never Forget What to Watch Next
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Keep track of your favorite movies and TV shows. Organize your
                  watchlist and never miss a must-see again.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="animate-pulse">
                  <LoginLink className="flex items-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </LoginLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: ListChecks,
                  title: "Organize Your Watchlist",
                  description:
                    "Easily add and categorize movies and TV shows you want to watch.",
                },
                {
                  icon: Tv,
                  title: "Track TV Shows",
                  description:
                    "Keep up with your favorite series and never miss an episode.",
                },
                {
                  icon: Share2,
                  title: "Share Recommendations",
                  description:
                    "Share your favorite picks with friends and discover new content.",
                },
              ].map((feature, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <feature.icon className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Sign Up",
                  description: "Create your free account in seconds.",
                },
                {
                  step: 2,
                  title: "Add Content",
                  description: "Add movies and shows to your watchlist.",
                },
                {
                  step: 3,
                  title: "Start Watching",
                  description: "Enjoy your organized viewing experience.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 text-center"
                >
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  quote:
                    "WatchTracker has completely changed how I manage my TV and movie watching. It's so easy to use!",
                  author: "Sarah M.",
                },
                {
                  quote:
                    "I love being able to share recommendations with my friends. This app is a game-changer!",
                  author: "Mike T.",
                },
                {
                  quote:
                    "Finally, an app that helps me keep track of all the shows I want to watch. Highly recommended!",
                  author: "Emily R.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="flex flex-col justify-between h-full p-6">
                    <p className="text-muted-foreground italic mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="font-bold text-right">
                      - {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-primary/20 to-secondary">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Tracking?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of happy users and start organizing your
                  watchlist today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full">
                  <RegisterLink className="w-full">Register Now</RegisterLink>
                </Button>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background">
        <div className="flex flex-col sm:flex-row py-6 space-y-4 sm:space-y-0 items-center px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © 2024 My Series. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
