import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitch, Youtube, Twitter, Calendar, Gamepad2, Crown, Sparkles, Smile, Zap, Eye, Star, Frown, Ghost, Heart, Play, BookOpen, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/hero_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        
        <div className="container relative z-10 text-center space-y-8">
          <img 
            src="/assets/anu_logo_main.png" 
            alt="Anu Logo" 
            className="mx-auto w-32 h-32 md:w-48 md:h-48 animate-pulse-slow"
          />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-foreground drop-shadow-2xl">
            ANU
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold tracking-wide">
            THE SKY FATHER
          </p>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed px-4">
            They call me Anu. I am the sky, the king, the ancestor. Now, I am a VTuber. 
            From my celestial perch, I descend to master the digital worlds of PC and PS4.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://twitch.tv/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
                <Twitch className="w-5 h-5" />
                Watch on Twitch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-accent/50 hover:bg-accent/10" asChild>
              <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full p-1">
            <div className="w-1 h-3 bg-accent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/assets/about_section_icon.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center justify-center mb-12">
            <img src="/assets/about_section_icon.png" alt="Divine Star" className="w-16 h-16 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">The Divine Decree</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am <span className="text-accent font-semibold">Anu</span>, the ancient Mesopotamian god of the sky, 
                king of the gods, and ancestor of many deities. For millennia, I have watched over the mortal realm 
                from my celestial throne.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Now, I have descended into the digital realm to test my might against the challenges of 
                <span className="text-accent font-semibold"> PlayStation 4</span> and 
                <span className="text-accent font-semibold"> PC gaming</span>. 
                My will is law, my victory is fate.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-accent">
                  <Crown className="w-5 h-5" />
                  <span className="font-semibold">King of the Gods</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Celestial Authority</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Gamepad2 className="w-5 h-5" />
                  <span className="font-semibold">Digital Conqueror</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                <img 
                  src="/assets/anu_model_main.png" 
                  alt="Anu VTuber Model" 
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Schedule Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(/assets/stream_schedule_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="container relative z-10">
          <div className="flex items-center justify-center mb-12">
            <Calendar className="w-12 h-12 mr-4 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">Divine Schedule</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/80 backdrop-blur border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-2xl font-bold text-accent">Monday</div>
                <div className="text-lg">8:00 PM EST</div>
                <div className="text-muted-foreground">Skyrim: Divine Conquest</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-2xl font-bold text-accent">Wednesday</div>
                <div className="text-lg">8:00 PM EST</div>
                <div className="text-muted-foreground">PC Gaming: Mortal Challenges</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur border-accent/30 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-2xl font-bold text-accent">Saturday</div>
                <div className="text-lg">7:00 PM EST</div>
                <div className="text-muted-foreground">PS4 Adventures</div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-8 text-muted-foreground italic">
            Do not keep a god waiting. Mark your calendars, mortals.
          </p>
        </div>
      </section>

      {/* Divine Emotes Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <Smile className="w-12 h-12 mr-4 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">Divine Emotes</h2>
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Express your devotion with these sacred emotes. Each one channels a fragment of divine power.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuHype</h3>
                <p className="text-sm text-muted-foreground">
                  Channel divine excitement! Use when the Sky Father achieves victory or witnesses greatness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Crown className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuDecree</h3>
                <p className="text-sm text-muted-foreground">
                  A divine proclamation! Use when Anu makes an important decision or declares his will.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuSmite</h3>
                <p className="text-sm text-muted-foreground">
                  Divine wrath unleashed! For moments when enemies fall before celestial power.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuGaze</h3>
                <p className="text-sm text-muted-foreground">
                  The all-seeing eye of judgment. Use when observing mortal foolishness or suspicious behavior.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Star className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuFate</h3>
                <p className="text-sm text-muted-foreground">
                  Destiny manifests! For moments when fate itself bends to divine will.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Frown className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuPout</h3>
                <p className="text-sm text-muted-foreground">
                  Even gods can be displeased. Use when things don't go according to divine plan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Ghost className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuLurk</h3>
                <p className="text-sm text-muted-foreground">
                  Silent observation from the celestial realm. For followers watching from the shadows.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">anuPat</h3>
                <p className="text-sm text-muted-foreground">
                  A rare gesture of divine approval. The Sky Father acknowledges worthy mortals.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-12 text-muted-foreground italic">
            These emotes will be available to all members of the Pantheon on Twitch.
          </p>
        </div>
      </section>

      {/* Clip Gallery Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/assets/about_section_icon.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center justify-center mb-12">
            <Play className="w-12 h-12 mr-4 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">Divine Conquests</h2>
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Witness the Sky Father's greatest victories and most epic moments.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Example YouTube Embed - Replace VIDEO_ID with your actual YouTube video ID */}
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent transition-all duration-300 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                  title="Epic Skyrim Victory"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-accent mb-2">Epic Skyrim Victory</h3>
                <p className="text-sm text-muted-foreground">The Sky Father defeats Alduin with divine thunder</p>
              </CardContent>
            </Card>
            
            {/* Example Twitch Clip Embed - Replace CLIP_ID with your actual Twitch clip ID */}
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent transition-all duration-300 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://clips.twitch.tv/embed?clip=YOUR_CLIP_ID_1&parent=YOUR_DOMAIN"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-accent mb-2">Divine Judgment</h3>
                <p className="text-sm text-muted-foreground">Anu passes judgment on mortal foolishness</p>
              </CardContent>
            </Card>
            
            {/* Example YouTube Embed - Replace VIDEO_ID with your actual YouTube video ID */}
            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent transition-all duration-300 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                  title="Celestial Mastery"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-accent mb-2">Celestial Mastery</h3>
                <p className="text-sm text-muted-foreground">Perfect execution of divine strategy</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-12 text-muted-foreground italic">
            More clips will be added as the divine conquests continue. Subscribe to witness them all.
          </p>
        </div>
      </section>

      {/* Join the Pantheon Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Join the Pantheon</h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Subscribe and witness divinity at play. Follow my divine journey across social platforms 
            and become part of my celestial court.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center pt-4">
            <Button size="lg" variant="outline" className="gap-2 border-accent/50 hover:bg-accent/10" asChild>
              <a href="https://twitch.tv/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
                <Twitch className="w-5 h-5" />
                Twitch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-accent/50 hover:bg-accent/10" asChild>
              <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-accent/50 hover:bg-accent/10" asChild>
              <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                Twitter/X
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Link href="/lore">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <BookOpen className="w-5 h-5" />
                Explore Divine Lore
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2 border-accent/50 hover:bg-accent/10">
                <Mail className="w-5 h-5" />
                Contact the Sky Father
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Anu, The Sky Father. All divine rights reserved.</p>
          <p className="mt-2 text-xs">King of the Gods | Ancient Mesopotamian Deity | VTuber</p>
        </div>
      </footer>
    </div>
  );
}
