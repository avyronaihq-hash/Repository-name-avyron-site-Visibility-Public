import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Bot, 
  Calculator, 
  ArrowRight, 
  Zap, 
  Shield, 
  Brain, 
  Layers, 
  MessageSquare, 
  CreditCard, 
  Database, 
  BarChart,
  Target
} from 'lucide-react';

const PricingPage = () => {
  const tiers = [
    {
      name: 'STRUCTURE',
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      price: '₹29,999',
      period: '/month',
      problem: 'You are running on Excel and WhatsApp. Things are falling through the cracks.',
      description: 'Escape the spreadsheets. Establish basic operational sanity.',
      features: [
        'Core Command Board',
        'Basic Lifecycle Enforcement',
        'Standard Payment Tracking',
        'Up to 5 Team Members',
        'Email Support'
      ],
      changes: 'Chaos becomes process. You stop missing payments and deadlines.',
      idealFor: 'Teams of 2-5 handling 20-50 bookings/month.',
      cta: 'Start Structuring',
      color: 'border-blue-200 hover:border-blue-500',
      bg: 'bg-blue-50/50',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'CONTROL',
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      price: '₹59,999',
      period: '/month',
      problem: 'You have process, but it requires constant manual enforcement and micromanagement.',
      description: 'Automate workflows and gain total visibility.',
      features: [
        'Everything in Structure',
        'Advanced Automation Engine',
        'Vendor Reliability Memory',
        'Team Load Heatmap',
        'Daily Founder WhatsApp Feed',
        'Up to 15 Team Members'
      ],
      changes: 'The system enforces the process. You manage exceptions, not the routine.',
      idealFor: 'Teams of 5-15 handling 50-150 bookings/month.',
      cta: 'Take Control',
      color: 'border-indigo-500 shadow-xl shadow-indigo-500/20 scale-105 z-10',
      bg: 'bg-indigo-50',
      gradient: 'from-indigo-600 to-violet-600',
      popular: true
    },
    {
      name: 'INTELLIGENCE',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      price: 'Custom',
      period: '',
      problem: 'You are scaling fast and need predictive insights to prevent bottlenecks.',
      description: 'Predictive operations for enterprise scale.',
      features: [
        'Everything in Control',
        'Predictive Risk Detection',
        'Custom AI Training',
        'Unlimited Team Members',
        'Dedicated Success Manager',
        'SLA Guarantees'
      ],
      changes: 'The system anticipates problems before they happen.',
      idealFor: 'Teams of 15+ handling 150+ bookings/month.',
      cta: 'Activate Intelligence',
      color: 'border-purple-200 hover:border-purple-500',
      bg: 'bg-purple-50/50',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI AGENTS',
      icon: <Bot className="w-8 h-8 text-emerald-500" />,
      price: '+ ₹39,999',
      period: '/month',
      problem: 'Your team is drowning in repetitive customer queries and slow lead responses.',
      description: 'Deploy digital executives for 24/7 sales and support.',
      features: [
        'AI Pre-Sales Executive',
        'AI Customer Support Executive',
        'Deep operational integration',
        'Instant lead qualification',
        'Automated itinerary suggestions',
        '24/7 availability'
      ],
      changes: 'You scale revenue and support without scaling headcount.',
      idealFor: 'Any team losing leads to slow response times.',
      cta: 'Deploy AI Agents',
      color: 'border-emerald-200 hover:border-emerald-500',
      bg: 'bg-emerald-50/50',
      gradient: 'from-emerald-500 to-teal-500',
      isAddon: true
    }
  ];

  const integrations = [
    { name: 'WhatsApp Business API', icon: MessageSquare, color: 'text-green-500' },
    { name: 'Razorpay', icon: CreditCard, color: 'text-blue-600' },
    { name: 'Google Sheets', icon: Database, color: 'text-emerald-600' },
    { name: 'Tally', icon: BarChart, color: 'text-indigo-600' },
    { name: 'Zoho CRM', icon: Layers, color: 'text-red-500' },
    { name: 'HubSpot', icon: Zap, color: 'text-orange-500' },
    { name: 'Pipedrive', icon: Target, color: 'text-green-600' },
  ];

  const addons = [
    { title: 'Additional Team Members', price: '₹2,000/user/mo', desc: 'Scale your team seamlessly as you grow.' },
    { title: 'White-label Client Portal', price: '₹10,000/mo', desc: 'Give your clients a branded self-service experience.' },
    { title: 'Custom API Access', price: '₹15,000/mo', desc: 'Connect Avyron to your proprietary internal tools.' },
    { title: 'Priority Support SLA', price: '₹20,000/mo', desc: '1-hour response times and dedicated phone support.' },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Avyron Operational Control Infrastructure</title>
        <meta name="description" content="Avyron pricing. Choose your operational stage: Structure, Control, or Intelligence. Scale without chaos." />
      </Helmet>

      <div className="min-h-screen pt-24 bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200 px-4 py-2 text-sm">
                Pricing & Plans
              </Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Not Cheap Software.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Operational Control Infrastructure.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                You don't upgrade tools. You upgrade execution maturity. <br className="hidden md:block" />
                Choose your operational stage. Scale without chaos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 hover:from-indigo-700 hover:via-violet-700 hover:to-blue-600 text-white px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-transform rounded-xl border-0">
                    Talk to Sales
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-lg font-semibold rounded-xl bg-white">
                    Design My Plan
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Choose Your Operational Stage */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Operational Stage</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our pricing is designed to match your operational maturity. Start where you are, scale when you're ready.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
              {tiers.map((tier, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative h-full ${tier.popular ? 'lg:-mt-4' : ''}`}
                >
                  <Card className={`h-full flex flex-col border-2 transition-all duration-300 bg-white rounded-2xl overflow-hidden ${tier.color}`}>
                    {tier.popular && (
                      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center py-1.5 text-xs font-bold tracking-widest uppercase">
                        MOST POPULAR
                      </div>
                    )}
                    {tier.isAddon && (
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-1.5 text-xs font-bold tracking-widest uppercase">
                        OPTIONAL ADD-ON
                      </div>
                    )}
                    
                    <CardHeader className={`${tier.bg} pb-6 border-b border-gray-100`}>
                      <div className="mb-4">{tier.icon}</div>
                      <CardTitle className="text-xl font-bold text-gray-900 tracking-wide">{tier.name}</CardTitle>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                        <span className="text-gray-500 ml-1 font-medium">{tier.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-4 font-medium">{tier.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-6 flex-grow flex flex-col">
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-sm text-gray-700 italic border-l-2 border-gray-200 pl-3 py-1">{tier.problem}</p>
                      </div>

                      <div className="mb-6 flex-grow">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What You Get</h4>
                        <ul className="space-y-3">
                          {tier.features.map((f, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700 font-medium">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">What Changes</h4>
                        <p className="text-sm text-gray-800 font-medium">{tier.changes}</p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Ideal For</h4>
                        <p className="text-sm text-gray-600">{tier.idealFor}</p>
                      </div>

                      <Link to="/contact" className="mt-auto">
                        <Button className={`w-full py-6 text-base font-bold rounded-xl text-white bg-gradient-to-r ${tier.gradient} hover:shadow-lg hover:scale-[1.02] transition-all border-0`}>
                          {tier.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extensible System */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Integrations</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EXTENSIBLE SYSTEM</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Avyron doesn't replace your tools; it orchestrates them. Connect with the software you already use.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {integrations.map((integration, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-2xl hover:shadow-md hover:border-indigo-200 transition-all cursor-default"
                >
                  <integration.icon className={`w-6 h-6 ${integration.color}`} />
                  <span className="font-semibold text-gray-800">{integration.name}</span>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: integrations.length * 0.05 }}
                className="flex items-center space-x-3 bg-indigo-50 border border-indigo-100 px-6 py-4 rounded-2xl text-indigo-700 font-semibold"
              >
                <span>+ Custom APIs</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ADD-ONS</h2>
              <p className="text-xl text-gray-600">Customize your infrastructure with powerful extensions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {addons.map((addon, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                    <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{addon.title}</h4>
                        <p className="text-sm text-gray-500">{addon.desc}</p>
                      </div>
                      <div className="flex-shrink-0 bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100">
                        <span className="text-indigo-700 font-bold whitespace-nowrap">{addon.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Anchor */}
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-violet-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-dense opacity-20"></div>
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-white/20">
                <Calculator className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">The Math of Manual Operations</h2>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-left mb-10">
                <p className="text-xl md:text-2xl text-indigo-100 mb-6 leading-relaxed font-medium">
                  A single operational mistake—a missed vendor payment, a lost lead, or a double-booked resource—costs more than a year of Avyron.
                </p>
                <p className="text-lg text-gray-300">
                  Infrastructure isn't an expense; it's the protection of your profit margins. When you stop paying for chaos with your time, you start paying for scale with systems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Power Close */}
        <section className="py-32 bg-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                If you're still managing through WhatsApp threads and memory… <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  You're operating below your potential.
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Stop firefighting. Start controlling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/book-demo">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 hover:from-indigo-700 hover:via-violet-700 hover:to-blue-600 text-white px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-transform rounded-xl border-0 w-full sm:w-auto">
                    Book Strategy Call
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-lg font-semibold rounded-xl bg-white w-full sm:w-auto">
                    Design My Custom Plan
                  </Button>
                </Link>
                <Link to="/product">
                  <Button size="lg" variant="ghost" className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-8 py-6 text-lg font-medium rounded-xl w-full sm:w-auto">
                    Explore Features First
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
