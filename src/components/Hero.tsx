import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Take Control of Your Money with{' '}
              <span className="text-blue-200">TecxSpend</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Track your expenses, manage cards, and stay financially aware — all in one secure app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium">Total Balance</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Active</span>
                  </div>
                  <div className="text-3xl font-bold mb-6">$24,850.00</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-blue-100">Income</div>
                      <div className="text-lg font-semibold">+$8,200</div>
                    </div>
                    <div>
                      <div className="text-xs text-blue-100">Expenses</div>
                      <div className="text-lg font-semibold">-$3,450</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
