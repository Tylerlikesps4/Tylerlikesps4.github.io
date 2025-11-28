import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { Home, Mail, Briefcase, Palette, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
      const templateId = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard
      const publicKey = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Anu, The Sky Father',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Divine message received! The Sky Father will review your petition.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("The celestial channels are disrupted. Please try again or contact via social media.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <Home className="w-4 h-4" />
              Return to Temple
            </Button>
          </Link>
          <img src="/assets/anu_logo_main.png" alt="Anu Logo" className="w-12 h-12" />
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/stream_schedule_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-foreground drop-shadow-2xl">
            DIVINE CONTACT
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold tracking-wide">
            Send Your Petition to the Sky Father
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/80 backdrop-blur border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">Business Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Sponsorships, collaborations, and partnership opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">Fan Art</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your artistic tributes to the divine pantheon
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">General Contact</h3>
                <p className="text-sm text-muted-foreground">
                  Questions, suggestions, or messages for the Sky Father
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur border-accent/30">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Submit Your Petition</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is your petition about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share your message with the Sky Father..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending to the Heavens..." : "Send Divine Message"}
                </Button>
              </form>
              
              <p className="text-center mt-6 text-sm text-muted-foreground italic">
                The Sky Father reviews all petitions. Response times may vary based on divine priorities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container text-center">
          <Link href="/">
            <Button variant="outline" className="gap-2 border-accent/50 hover:bg-accent/10">
              <Home className="w-4 h-4" />
              Return to Main Temple
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
