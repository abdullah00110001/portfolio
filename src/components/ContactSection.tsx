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
            <a href="https://github.com/abdullah00110001" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="#" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="abdullahusimin1@gmail.com" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <Mail className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;