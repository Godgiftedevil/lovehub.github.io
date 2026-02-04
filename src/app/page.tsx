"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Sparkles, Camera, Music, Link2, Share2, Check, ArrowRight, Wand2, Crown, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%",
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{ 
            y: "-10%",
            x: `${Math.random() * 100}%`
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>
      ))}
    </div>
  );
};

const pricingPlans = [
  {
    name: "Basic",
    price: "39",
    icon: Heart,
    features: [
      "3 photos",
      "Simple message page",
      "Basic theme"
    ],
    popular: false
  },
  {
    name: "Romantic",
    price: "69",
    icon: Star,
    features: [
      "Animated YES/NO buttons",
      "5 photos",
      "Background music",
      "Confetti celebration"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "169",
    icon: Crown,
    features: [
      "Memory gallery slideshow",
      "Beautiful animations",
      "Custom URL slug",
      "Premium romantic theme"
    ],
    popular: false
  }
];

const steps = [
  { icon: Heart, title: "Choose a plan", description: "Select the perfect package for your proposal" },
  { icon: Sparkles, title: "Make payment", description: "Secure payment via Razorpay or Stripe" },
  { icon: Wand2, title: "Write your proposal", description: "Write manually or generate with AI" },
  { icon: Camera, title: "Upload memories", description: "Add your favorite photos together" },
  { icon: Share2, title: "Share the magic", description: "Get your unique proposal link and share" }
];

export default function Home() {
  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      <FloatingHearts />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-heart" />
            <span className="text-2xl font-bold text-primary">LoveHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
            <Link href="/create">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Create Now
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/50 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Make Your Love Story Magical</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Create a Magical Proposal Website for Your Love{" "}
              <span className="text-primary">❤️</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Design a beautiful, personalized proposal page that will make your partner say YES! 
              With AI-generated messages, stunning themes, and magical celebrations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/create">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Heart className="w-5 h-5 mr-2 fill-white" />
                  Create My Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-primary/30 hover:bg-primary/10">
                  See How It Works
                </Button>
              </a>
            </div>
          </motion.div>
          
          {/* Preview Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm border border-white/50 shadow-2xl max-w-3xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-pink-200/50 to-primary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-20 h-20 text-primary fill-primary mx-auto mb-4 animate-pulse-heart" />
                  <p className="text-primary font-semibold text-xl">Your Magical Proposal Page</p>
                  <p className="text-foreground/60 text-sm mt-2">Beautifully crafted with love</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-white/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Create your perfect proposal page in just 5 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/60">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Select the package that makes your proposal unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary fill-primary' : 'text-primary'}`} />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                      <span className="text-foreground/60"> / proposal</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/checkout?plan=${plan.name.toLowerCase()}`}>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary'}`}
                        size="lg"
                      >
                        Choose {plan.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-24 px-4 bg-white/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Features That Make It Special
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wand2, title: "AI Message Generator", desc: "Generate heartfelt proposals with AI" },
              { icon: Camera, title: "Photo Memories", desc: "Upload your favorite moments together" },
              { icon: Music, title: "Background Music", desc: "Set the perfect romantic mood" },
              { icon: Sparkles, title: "Celebration Effects", desc: "Confetti & hearts on YES!" },
              { icon: Link2, title: "Shareable Link", desc: "Easy to share via WhatsApp" },
              { icon: Heart, title: "Animated YES/NO", desc: "Fun interactive buttons" },
              { icon: Star, title: "Premium Themes", desc: "Beautiful romantic designs" },
              { icon: Crown, title: "Custom URL", desc: "Personalize your proposal link" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-6 animate-pulse-heart" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Make Your Love Story Unforgettable?
            </h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Create a magical proposal page that your partner will remember forever. 
              Start now and make them say YES!
            </p>
            <Link href="/create">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Heart className="w-5 h-5 mr-2 fill-white" />
                Create My Proposal Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white/50 border-t border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-primary">LoveHub</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Made with ❤️ for lovers everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
