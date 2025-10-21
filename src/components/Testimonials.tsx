import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'TecxSpend has transformed how I manage my business finances. The expense tracking is intuitive and saves me hours every week.',
    avatar: 'SJ',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    content: 'Finally, an app that respects my privacy while helping me stay on top of my spending. The dashboard is beautifully designed.',
    avatar: 'MC',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    content: 'The card management feature is a game-changer. I can track all my cards in one place and get instant insights into my spending patterns.',
    avatar: 'ER',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands of Users
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our users have to say about their experience with TecxSpend
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
