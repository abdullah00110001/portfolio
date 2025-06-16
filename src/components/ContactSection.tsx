// 
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Send, Github, Linkedin, Mail } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// 
// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const { toast } = useToast();
// 
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     
//     toast({
//       title: "Message Sent!",
//       description: "Thanks for reaching out. I'll get back to you soon!, In sha allah."
//     });
//     
//     setFormData({ name: '', email: '', message: '' });
//   };
// 
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
// 
//   return (
//     <section id="contact" className="section-padding">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
//             Send a <span className="gradient-text">Message</span>
//           </h2>
//         </div>
// 
//         <div className="max-w-lg mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                 Your Name
//               </label>
//               <Input
//                 id="name"
//                 type="text"
//                 name="name"
//                 placeholder="write your name..."
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full"
//               />
//             </div>
//             
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                 Your Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="write your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full"
//               />
//             </div>
//             
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                 Your Message
//               </label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Hello, I'd like to talk about..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 className="w-full resize-none"
//               />
//             </div>
//             
//             <Button 
//               type="submit"
//               size="lg"
//               className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
//             >
//               Send Message
//               <Send className="w-4 h-4 ml-2" />
//             </Button>
//           </form>
// 
//           {/* Social Links */}
//           <div className="flex justify-center space-x-6 mt-12">
//             <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
//               <Github className="w-5 h-5 text-muted-foreground" />
//             </a>
//             <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
//               <Linkedin className="w-5 h-5 text-muted-foreground" />
//             </a>
//             <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
//               <Mail className="w-5 h-5 text-muted-foreground" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// 
// export default ContactSection;
// 


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: '16a5d863-a626-4146-842f-e696168b127a',
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    const result = await response.json();
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!, In sha Allah."
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: "Error",
        description: result.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
     <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>

          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">Available for freelance projects</span>
            </div>
          </div>
        </div>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Send a <span className="gradient-text">Message</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="write your name..."
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="write your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Hello, I'd like to talk about..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
           {/*
            <a href="https://github.com/abdullah00110001" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/md-abdullah-486138307/" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="mailto:abdullahusimin1@gmail.com?subject=Hello&body=Write%20your%20message%20here" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"><Mail className="w-5 h-5 text-muted-foreground" /></a>*/}
            <a
  href="https://github.com/abdullah00110001"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-zinc-900 transition-all duration-300 hover:bg-zinc-800 hover:shadow-[0_0_12px_#f4f4f5,0_0_24px_#f4f4f5]"
>
  <Github className="w-5 h-5 text-white" />
</a>

<a
  href="https://www.linkedin.com/in/md-abdullah-486138307/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-sky-600 transition-all duration-300 hover:bg-sky-500 hover:shadow-[0_0_12px_#0ea5e9,0_0_24px_#0ea5e9]"
>
  <Linkedin className="w-5 h-5 text-white" />
</a>

<a
  href="mailto:abdullahusimin1@gmail.com?subject=Hello&body=Write%20your%20message%20here"
  className="p-3 rounded-full bg-rose-600 transition-all duration-300 hover:bg-rose-500 hover:shadow-[0_0_12px_#f43f5e,0_0_24px_#f43f5e]"
>
  <Mail className="w-5 h-5 text-white" />
</a>
<a
  href="https://wa.me/8801996598924?text=Hello%2C%20write%20your%20message%20here"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-green-600 transition-all duration-300 hover:bg-green-500 hover:shadow-[0_0_12px_#22c55e,0_0_24px_#22c55e]"
>
  <MessageCircle className="w-5 h-5 text-white" />
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;










