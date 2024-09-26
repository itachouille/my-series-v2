"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tv, ListChecks, Share2 } from "lucide-react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Never Forget What to Watch Next
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Keep track of your favorite movies and TV shows. Organize your
                  watchlist and never miss a must-see again.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  <LoginLink className="w-full">Get Started</LoginLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <ListChecks className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Organize Your Watchlist</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Easily add and categorize movies and TV shows you want to
                  watch.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Tv className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Track TV Shows</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Keep up with your favorite series and never miss an episode.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Share2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Share Recommendations</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Share your favorite picks with friends and discover new
                  content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Create your free account in seconds.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Add Content</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Add movies and shows to your watchlist.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Start Watching</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Enjoy your organized viewing experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Users Say
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white dark:bg-gray-950">
                <p className="text-gray-500 dark:text-gray-400 text-center italic">
                  "WatchTracker has completely changed how I manage my TV and
                  movie watching. It's so easy to use!"
                </p>
                <p className="font-bold">- Sarah M.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white dark:bg-gray-950">
                <p className="text-gray-500 dark:text-gray-400 text-center italic">
                  "I love being able to share recommendations with my friends.
                  This app is a game-changer!"
                </p>
                <p className="font-bold">- Mike T.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white dark:bg-gray-950">
                <p className="text-gray-500 dark:text-gray-400 text-center italic">
                  "Finally, an app that helps me keep track of all the shows I
                  want to watch. Highly recommended!"
                </p>
                <p className="font-bold">- Emily R.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Tracking?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of happy users and start organizing your
                  watchlist today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button>
                  <RegisterLink className="w-full">Register</RegisterLink>
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 My Series. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
