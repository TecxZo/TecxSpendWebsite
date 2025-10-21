import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Testimonials from '../components/Testimonials';
import {
  Shield,
  Sparkles,
  LayoutDashboard,
  CreditCard,
  Wallet,
  TrendingUp,
  Globe,
  Lock,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const whyChooseFeatures = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data stays only on your device. We never access or share your financial information.',
    },
    {
      icon: Sparkles,
      title: 'Simple & Smart',
      description: 'Manage your money effortlessly with an intuitive interface designed for everyone.',
    },
    {
      icon: LayoutDashboard,
      title: 'All-in-One Dashboard',
      description: 'View accounts, cards, and spending insights in one beautifully organized place.',
    },
  ];

  const features = [
    {
      icon: Wallet,
      title: 'Bank Account Management',
      description: 'Connect and manage multiple bank accounts with ease. Track balances and transactions in real-time.',
    },
    {
      icon: CreditCard,
      title: 'Card Management',
      description: 'Keep all your cards organized. Monitor spending limits and get alerts for unusual activity.',
    },
    {
      icon: TrendingUp,
      title: 'Expense & Income Tracking',
      description: 'Categorize transactions automatically and understand where your money goes each month.',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Overview',
      description: 'Get a complete picture of your financial health with interactive charts and insights.',
    },
    {
      icon: Globe,
      title: 'Localized Experience',
      description: 'Support for multiple currencies and languages to serve users around the world.',
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'Advanced encryption and security measures to keep your financial data safe.',
    },
  ];

  return (
    <div>
      <Hero />

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TecxSpend?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience financial management that puts you in control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smarter Spending
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to take control of your finances in one secure platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

    

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Managing Your Finances Smarter with TecxSpend Today
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already taken control of their financial future. Download the app and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Download App</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Join the Waitlist
            </button>
          </div>
          <p className="mt-8 text-blue-200">
            Questions? Contact us at{' '}
            <a href="mailto:support@tecxspend.app" className="underline hover:text-white">
              support@tecxspend.app
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
