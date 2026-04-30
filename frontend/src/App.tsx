import { SlideTabs } from "@/components/ui/slide-tabs"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sparkles, PlayCircle, Search, Plus, Bookmark, User, Video, ArrowRight, Zap, BrainCircuit, Play, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="h-screen w-full bg-background font-sans text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/70 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] transition-colors duration-500">
        <div className="flex items-center gap-2 text-foreground font-extrabold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span>Clario.</span>
        </div>
        
        {/* Animated SlideTabs Navigation */}
        <div className="hidden md:block">
          <SlideTabs />
        </div>

        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Log in</button>
          <button className="text-sm font-medium bg-foreground text-background px-5 py-2.5 rounded-full hover:bg-foreground/90 transition-all shadow-md flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <ScrollArea className="h-full w-full">
        {/* Hero Section */}
      <main id="hero" className="relative pt-40 pb-24 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/15 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000" />

        {/* Left Content */}
        <div className="flex flex-col gap-8 items-start lg:col-span-7 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-muted-foreground text-xs font-semibold shadow-sm tracking-wide uppercase transition-colors duration-500"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Clario MVP v0.1
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl lg:text-[5.5rem] font-bold tracking-tighter text-foreground leading-[1.05]"
          >
            Turn lectures into <br />
            <span className="relative">
              <span 
                className="relative z-10 text-transparent bg-clip-text pr-2 pb-2"
                style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))' }}
              >
                scrollable study reels
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/10 -z-10 transform -rotate-1 transition-colors duration-500"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Paste a YouTube URL and our AI instantly transcribes, extracts core concepts, and generates an optimized vertical learning feed designed for maximum retention.
          </motion.p>

          <div className="w-full max-w-xl mt-4 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-card border border-border rounded-full p-2 shadow-xl transition-all focus-within:ring-4 focus-within:ring-primary/20">
              <div className="bg-red-500/10 p-2 rounded-full ml-2 shrink-0">
                <PlayCircle className="w-5 h-5 text-red-500" />
              </div>
              <input 
                type="url" 
                placeholder="Paste YouTube lecture URL..." 
                className="w-full px-4 py-3 bg-transparent outline-none text-foreground font-medium placeholder:text-muted-foreground"
              />
              <button className="shrink-0 bg-foreground text-background px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Generate
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
             <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs overflow-hidden`}>
                     <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="Avatar" />
                  </div>
                ))}
             </div>
             <p>Joined by 10,000+ students this week</p>
          </div>
        </div>

        {/* Right Visuals (Premium Phone Mockup) */}
        <div className="relative flex justify-center items-center lg:col-span-5 h-[700px] w-full perspective-[2000px]">
          
          {/* Decorative background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/5 rounded-[4rem] transform rotate-3 -z-10 border border-border shadow-2xl transition-colors duration-1000" />
          
          {/* Phone Container */}
          <div className="relative z-10 w-[320px] h-[650px] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl shadow-primary/30 transform rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 hover:scale-105 transition-all duration-700 ease-out border-[1px] border-zinc-700/50">
            {/* Inner screen wrapper */}
            <div className="w-full h-full bg-zinc-950 rounded-[2.25rem] overflow-hidden relative flex flex-col border border-zinc-800">
               
               {/* Dynamic Island Notch */}
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex justify-center items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 shadow-inner mr-8" />
               </div>

               {/* App Header */}
               <div className="pt-12 pb-4 px-6 flex justify-between items-center text-white/80 border-b border-white/5 z-10 bg-gradient-to-b from-black/80 to-transparent absolute top-0 w-full">
                  <span className="font-bold tracking-tight">Biology 101</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  </div>
               </div>

               {/* Video Content Area */}
               <div className="flex-1 bg-gradient-to-b from-zinc-900 to-black flex flex-col items-center justify-center text-zinc-500 gap-4 relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 z-10 cursor-pointer hover:bg-white/20 transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                 </div>
               </div>

               {/* Video Overlay Info */}
               <div className="absolute bottom-20 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="inline-block px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase rounded mb-2">Key Concept</div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">The Mitochondria</h3>
                  <p className="text-white/60 text-sm line-clamp-2">The powerhouse of the cell, responsible for generating most of the cell's supply of ATP.</p>
               </div>

               {/* Bottom Nav */}
               <div className="h-20 bg-black/80 backdrop-blur-lg border-t border-white/10 flex justify-around items-center text-white/50 pb-2 absolute bottom-0 w-full z-20">
                  <Search className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                  <div className="w-12 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                     <Plus className="w-5 h-5" />
                  </div>
                  <Bookmark className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                  <User className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
               </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <div className="absolute top-1/4 -right-12 z-30 bg-card/90 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-4 flex items-center gap-4 animate-[bounce_4s_infinite]">
             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
               <CheckCircle2 className="w-5 h-5 text-green-600" />
             </div>
             <div>
               <p className="font-bold text-foreground text-sm">Transcription Done</p>
               <p className="text-xs text-muted-foreground">1.2 seconds</p>
             </div>
          </div>

          <div className="absolute bottom-1/4 -left-16 z-30 bg-card/90 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-4 flex items-center gap-4 animate-[bounce_5s_infinite_0.5s]">
             <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
               <BrainCircuit className="w-5 h-5 text-primary" />
             </div>
             <div>
               <p className="font-bold text-foreground text-sm">7 Concepts Extracted</p>
               <p className="text-xs text-muted-foreground">Ready to review</p>
             </div>
          </div>

        </div>
      </main>

      {/* Modern Bento Box Features */}
      <section id="how-it-works" className="py-32 bg-background relative transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">System Architecture</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">How the engine processes content.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-background rounded-2xl shadow-sm border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Video className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">1. Ingestion</h4>
              <p className="text-muted-foreground leading-relaxed">Paste any public YouTube URL. Our backend seamlessly downloads the audio track in seconds.</p>
            </div>
            
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-background rounded-2xl shadow-sm border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <BrainCircuit className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">2. Processing</h4>
              <p className="text-muted-foreground leading-relaxed">Whisper transcribes the audio, and Groq analyzes the text to extract standalone, meaningful concepts.</p>
            </div>

            <div className="bg-foreground rounded-3xl p-8 border border-foreground hover:shadow-2xl transition-all duration-300 group text-background">
              <div className="w-14 h-14 bg-background/10 rounded-2xl shadow-inner border border-background/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Delivery</h4>
              <p className="text-background/70 leading-relaxed">Concepts are mapped to video timestamps and delivered in a highly engaging, sequential learning interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-32 bg-muted/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Optimized for Focus</h2>
                 <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Accelerate <br/>Comprehension.</h3>
                 <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Traditional lecture videos are passive. Clario breaks down complex material into focused, digestible vertical cards, allowing you to review exactly what you need, exactly when you need it.</p>
                 
                 <ul className="space-y-4">
                    {['Timestamp-synced video clips', 'AI-generated concise summaries', 'Swipeable interactive flashcards', 'Dark mode optimized'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="relative h-[500px] bg-muted rounded-3xl overflow-hidden shadow-inner border border-border flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80"></div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-background/90 to-background/10"></div>
                 <div className="relative z-10 bg-card/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-sm text-center border border-border">
                    <p className="font-bold text-xl mb-2 text-foreground">"Incredible retention rate."</p>
                    <p className="text-muted-foreground text-sm">- Medical Student, Johns Hopkins</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-32 bg-background text-center relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-1000" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-foreground tracking-tight mb-6">Scale your learning efficiency.</h2>
          <p className="text-xl text-muted-foreground mb-10">Join thousands of professionals and students mastering complex topics in half the time.</p>
          <button 
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-xl hover:scale-105"
          >
            Back to Top
          </button>
          <p className="mt-6 text-sm text-muted-foreground">No credit card required. Enterprise plans available.</p>
        </div>
      </section>
      </ScrollArea>

      <ThemeSwitcher />
    </div>
  )
}
