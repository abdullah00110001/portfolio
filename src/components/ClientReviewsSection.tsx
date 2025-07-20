
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
//   {
//     id: 1,
//     name: "Michael Johnson",
//     position: "Director of AlphaStream Technologies",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//     review: "Collaborating with Abdullah was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abdullah's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abdullah is the ideal partner."
//   },
  {
    id: 2,
    name: "Arafat Sunny",
    position: "Cyber Security Expert & Learner",
  //   avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    review: "Working with Abdullah exceeded all expectations. His technical expertise and creative problem-solving approach helped us deliver a project that not only met but surpassed our goals. The attention to detail and commitment to quality is remarkable."
  }
 //  {
//     id: 3,
//     name: "David Chen",
//     position: "Product Manager at InnovateHub",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//     review: "Abdullah's  bility to translate complex requirements into elegant solutions is impressive. The project was delivered on time and exceeded our performance expectations. His communication throughout the development process was exceptional."
//   },
//   {
//     id: 4,
//     name: "Emily Rodriguez",
//     position: "CTO of StartupFlow",
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//     review: "Abdullah brought fresh perspectives to our development challenges. His innovative solutions and dedication to clean, maintainable code made our collaboration seamless and productive."
//   },
//   {
//     id: 5,
//     name: "Alex Thompson",
//     position: "Lead Developer at CodeCraft",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
//     review: "The level of professionalism and technical skill Abdullah demonstrates is outstanding. Our project was completed ahead of schedule with exceptional quality standards."
//   }
];

const ClientReviewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-24 px-6 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kind words from <span className="gradient-text">satisfied clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="group bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-3xl hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  "{review.review}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More/Less Button */}
        {reviews.length > 3 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  See More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Technology logos section */}

      </div>
    </section>
  );
};

export default ClientReviewsSection;
