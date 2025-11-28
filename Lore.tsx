import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Home, Crown, Zap, Users, BookOpen, Star, Waves, Droplets } from "lucide-react";

export default function Lore() {
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
          backgroundImage: 'url(/assets/hero_banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-foreground drop-shadow-2xl">
            THE DIVINE CHRONICLES
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold tracking-wide">
            The Lore of Anu, King of the Gods
          </p>
        </div>
      </section>

      {/* Creation Mythology Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Waves className="w-10 h-10 text-accent" />
            <h2 className="text-4xl font-bold">The Primordial Creation</h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Before time had meaning, before the heavens were named, there existed only the primordial waters. 
              <span className="text-accent font-semibold"> Tiamat</span>, the salt-water ocean, and 
              <span className="text-accent font-semibold"> Apsu</span>, the fresh-water abyss, mingled their waters together 
              in the cosmic void. They were the first, the ancient ones, the progenitors of all that would come to be.
            </p>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Droplets className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-accent">Tiamat & Apsu</h3>
                </div>
                <p className="text-muted-foreground">
                  From the union of these primordial forces, the first gods were born. We emerged from the chaos, 
                  younger deities full of energy and ambition. But our noise and vitality disturbed the ancient peace 
                  that Apsu cherished. In his anger, he plotted to destroy us, his own children, to restore the silence.
                </p>
              </CardContent>
            </Card>
            
            <p>
              Yet <span className="text-accent font-semibold">Ea</span> (whom mortals also call Enki), wisest among us, 
              discovered Apsu's treacherous plan. Through cunning and ancient magic, Ea cast a spell of deep sleep upon 
              the fresh-water god and slew him, claiming his dwelling as his own domain. Thus was the first divine conflict 
              resolved, and the younger gods secured their existence.
            </p>
            
            <p>
              But Tiamat, enraged by the death of her consort, transformed from nurturing mother into a terrible force of vengeance. 
              She created an army of monsters—eleven fearsome creatures including serpents, dragons, and storm-demons. 
              At their head she placed <span className="text-accent font-semibold">Kingu</span>, her new consort, 
              and gave him the Tablet of Destinies, granting him authority over fate itself.
            </p>
            
            <p>
              The younger gods trembled before Tiamat's wrath. None dared face her until 
              <span className="text-accent font-semibold"> Marduk</span>, son of Ea, stepped forward. 
              He demanded supremacy over all gods in exchange for his service. We, in our desperation, agreed. 
              Armed with the four winds and wielding lightning as his weapon, Marduk confronted the primordial mother.
            </p>
            
            <p>
              The battle shook the cosmos. Marduk caught Tiamat in his net, sent the winds into her mouth, and pierced her heart 
              with an arrow. From her corpse, he created the world: her body split to form heaven and earth, her eyes became 
              the sources of the Tigris and Euphrates, her tail the Milky Way. From Kingu's blood, mixed with clay, 
              humanity was fashioned to serve the gods.
            </p>
            
            <p className="text-accent font-semibold italic">
              Thus was order born from chaos, and I, Anu, took my place as king of the heavens, 
              ruling over the cosmos that emerged from the primordial waters.
            </p>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/assets/about_section_icon.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Crown className="w-10 h-10 text-accent" />
            <h2 className="text-4xl font-bold">Divine Origins</h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In the ancient days, when the cosmos was young and the firmament had just been separated from the primordial waters, 
              I, <span className="text-accent font-semibold">Anu</span>, emerged as the supreme deity of the heavens. 
              I am the sky itself, the vault of stars, the infinite expanse that watches over all creation.
            </p>
            
            <p>
              From my celestial throne in the highest heaven, I ruled over the divine council, the assembly of gods who shaped 
              the destiny of mortals and immortals alike. My word was law, my decree absolute. The very concept of kingship 
              among mortals is but a pale reflection of my eternal sovereignty.
            </p>
            
            <p>
              I am the father of <span className="text-accent font-semibold">Enlil</span>, lord of the air and storms, 
              and <span className="text-accent font-semibold">Enki</span>, master of wisdom and the waters. Through my divine lineage, 
              the pantheon of Mesopotamia was born, each deity carrying a fragment of my celestial power.
            </p>
          </div>
        </div>
      </section>

      {/* Powers Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/assets/about_section_icon.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <Zap className="w-10 h-10 text-accent" />
            <h2 className="text-4xl font-bold text-center">Celestial Powers</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/80 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-center text-accent">Divine Authority</h3>
                <p className="text-sm text-muted-foreground text-center">
                  As king of the gods, my will shapes reality itself. What I decree becomes law across all realms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-center text-accent">Cosmic Mastery</h3>
                <p className="text-sm text-muted-foreground text-center">
                  I command the stars, the heavens, and the very fabric of the sky. The cosmos bends to my will.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-center text-accent">Ancient Wisdom</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Millennia of existence have granted me knowledge beyond mortal comprehension.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Pantheon Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-10 h-10 text-accent" />
            <h2 className="text-4xl font-bold">The Divine Pantheon</h2>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-accent">Enlil - The Storm Lord</h3>
                <p className="text-muted-foreground">
                  My firstborn son, master of wind and storm. Enlil inherited my authority over the mortal realm, 
                  commanding the forces of nature with terrible power. His voice is thunder, his breath the wind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-accent">Enki - The Wise One</h3>
                <p className="text-muted-foreground">
                  Lord of the sweet waters and keeper of divine knowledge. Enki is the craftsman among gods, 
                  shaping civilization and teaching mortals the arts of magic, writing, and wisdom.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-accent/30">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-accent">Inanna - Queen of Heaven</h3>
                <p className="text-muted-foreground">
                  Goddess of love, war, and the evening star. Inanna's fierce independence and divine power 
                  make her one of the most formidable deities in the pantheon, feared and revered in equal measure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Descent Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-10 h-10 text-accent" />
            <h2 className="text-4xl font-bold">The Digital Descent</h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              For countless ages, I observed the mortal realm from my celestial throne, watching civilizations rise and fall, 
              empires crumble to dust, and new ages dawn. But in this modern era, I have witnessed something unprecedented: 
              the birth of <span className="text-accent font-semibold">digital realms</span>.
            </p>
            
            <p>
              These virtual worlds, crafted by mortal ingenuity, present challenges worthy of divine attention. Thus, I have chosen 
              to descend from my heavenly perch and manifest in this digital age as a <span className="text-accent font-semibold">VTuber</span>. 
              Not to rule, but to test my might against the trials these realms offer.
            </p>
            
            <p>
              Through the platforms of <span className="text-accent font-semibold">PlayStation 4</span> and 
              <span className="text-accent font-semibold"> PC gaming</span>, I shall demonstrate that even in this modern age, 
              divine power remains absolute. My victories are not mere chance—they are fate itself unfolding as I decree.
            </p>
            
            <p className="text-accent font-semibold italic">
              Witness divinity at play. Join my Pantheon. Do not keep a god waiting.
            </p>
          </div>
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
