import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, ArrowRight, CheckCircle2, XCircle, Zap, 
  Shield, TrendingUp, BarChart3, Lock
} from 'lucide-react';

const AIAgentsPage = () => {
  const [comparisonView, setComparisonView] = useState('ai');

  return (
    <>
      <Helmet>
        <title>AI Agents - Avyron</title>
        <meta name="description" content="Hire AI that actually executes. Operationally integrated digital executives for your travel business." />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-dense opacity-20"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 backdrop-blur-sm px-4 py-2 text-sm">
                <Bot className="w-4 h-4 mr-2" />
                Digital Executives
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Hire AI That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Actually Executes</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                Not just chatbots. Operationally integrated digital executives that handle sales, support, and team automation 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-0">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 px-8 py-6 md:py-6 text-base md:text-lg font-bold rounded-xl min-h-[56px]">
                    Request AI Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What This Really Is */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">What This Really Is</h2>
            </motion.div>

            <Tabs value={comparisonView} onValueChange={setComparisonView} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-gray-100 rounded-xl">
                <TabsTrigger value="chatbot" className="py-3 text-sm md:text-base rounded-lg whitespace-normal h-full">Standard Chatbot</TabsTrigger>
                <TabsTrigger value="ai" className="py-3 text-sm md:text-base rounded-lg whitespace-normal h-full">Avyron AI Executive</TabsTrigger>
              </TabsList>
              
              <TabsContent value="chatbot" className="mt-0">
                <Card className="border-2 border-gray-200 rounded-2xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4 md:space-y-5">
                      {[
                        'Only answers FAQs',
                        'No access to live booking data',
                        'Cannot process payments or updates',
                        'Frustrates customers with generic replies',
                        'Requires human intervention for real work'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-base md:text-lg leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ai" className="mt-0">
                <Card className="border-2 border-indigo-500 shadow-premium-xl rounded-2xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4 md:space-y-5">
                      {[
                        'Deeply integrated with your operational data',
                        'Knows exact booking status, payment history, and vendor updates',
                        'Executes workflows (sends quotes, confirms payments)',
                        'Learns your specific business rules and tone',
                        'Actually reduces human workload'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-900 font-medium text-base md:text-lg leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* AI Pre-Sales Executive */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Badge className="mb-4 bg-blue-100 text-blue-700 px-3 py-1 text-sm">Sales Engine</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">AI Pre-Sales Executive</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">Never lose a lead to slow response times again.</p>
                <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-base md:text-lg leading-relaxed">Instant lead qualification 24/7</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-base md:text-lg leading-relaxed">Automated itinerary suggestions based on budget</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-base md:text-lg leading-relaxed">Smart follow-ups that actually convert</span></li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="glass-card shadow-xl border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-5 md:p-6 bg-white">
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm md:text-base text-gray-800 leading-relaxed">Hi, I need a 5-day trip to Bali for 2 people next month. Budget is $2000.</div>
                      <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-sm md:text-base leading-relaxed shadow-md">Hello! I can certainly help. For $2000, I can arrange a premium 5-day package including flights, a 4-star villa in Seminyak, and daily tours. Would you prefer a focus on relaxation or adventure?</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Customer Support Executive */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto flex-row-reverse">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2">
                <Badge className="mb-4 bg-emerald-100 text-emerald-700 px-3 py-1 text-sm">Support Engine</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">AI Customer Support Executive</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">Resolve 80% of queries without human touch.</p>
                <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-base md:text-lg leading-relaxed">Real-time booking status updates</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-base md:text-lg leading-relaxed">Automated payment confirmations & receipts</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-base md:text-lg leading-relaxed">Travel document delivery and reminders</span></li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
                <Card className="glass-card shadow-xl border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-5 md:p-6 bg-white">
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm md:text-base text-gray-800 leading-relaxed">Did you receive my final payment for booking #AV-992?</div>
                      <div className="bg-emerald-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-sm md:text-base leading-relaxed shadow-md">Yes! We received your payment of $1,500 today. Your booking #AV-992 is now fully paid. I have emailed your final hotel vouchers and itinerary. Have a great trip!</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Automation Layer & Execution Control Engine */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6 md:p-8">
                    <Zap className="w-10 h-10 text-amber-500 mb-5 md:mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Team Automation Layer</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">AI doesn't just talk to customers; it manages your team's workflow.</p>
                    <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                      <li className="flex items-start"><span className="mr-2 text-amber-500">•</span> Auto-assigns tasks based on team load</li>
                      <li className="flex items-start"><span className="mr-2 text-amber-500">•</span> Flags overdue vendor confirmations</li>
                      <li className="flex items-start"><span className="mr-2 text-amber-500">•</span> Drafts internal handover notes</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card className="h-full border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6 md:p-8">
                    <Shield className="w-10 h-10 text-indigo-500 mb-5 md:mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Execution Control Engine</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">The brain that ensures nothing falls through the cracks.</p>
                    <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                      <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Enforces lifecycle stages strictly</li>
                      <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Blocks progression if payments are missing</li>
                      <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span> Generates daily founder risk briefings</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Human vs AI Executive Table */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Human vs AI Executive</h2>
            </motion.div>
            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="p-4 md:p-5 font-semibold text-gray-900 text-sm md:text-base">Capability</th>
                        <th className="p-4 md:p-5 font-semibold text-gray-900 text-sm md:text-base">Human Employee</th>
                        <th className="p-4 md:p-5 font-semibold text-indigo-600 text-sm md:text-base">Avyron AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 md:p-5 text-gray-700 text-sm md:text-base">Availability</td>
                        <td className="p-4 md:p-5 text-gray-600 text-sm md:text-base">8 hours / 5 days</td>
                        <td className="p-4 md:p-5 text-indigo-600 font-medium text-sm md:text-base">24/7/365</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 md:p-5 text-gray-700 text-sm md:text-base">Response Time</td>
                        <td className="p-4 md:p-5 text-gray-600 text-sm md:text-base">Minutes to Hours</td>
                        <td className="p-4 md:p-5 text-indigo-600 font-medium text-sm md:text-base">&lt; 5 Seconds</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 md:p-5 text-gray-700 text-sm md:text-base">Data Recall</td>
                        <td className="p-4 md:p-5 text-gray-600 text-sm md:text-base">Requires searching CRM</td>
                        <td className="p-4 md:p-5 text-indigo-600 font-medium text-sm md:text-base">Instant perfect recall</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 md:p-5 text-gray-700 text-sm md:text-base">Scalability</td>
                        <td className="p-4 md:p-5 text-gray-600 text-sm md:text-base">Requires hiring & training</td>
                        <td className="p-4 md:p-5 text-indigo-600 font-medium text-sm md:text-base">Infinite instant scale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Cost Efficiency & Workload */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 mb-4 md:mb-5" />
                <h3 className="text-xl md:text-2xl font-bold mb-3">Cost Efficiency</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">Operate at the capacity of a 10-person team with the overhead of 3. Drastically reduce CAC and operational costs.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4 md:mb-5" />
                <h3 className="text-xl md:text-2xl font-bold mb-3">AI + Workload Intelligence</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">AI monitors human team bandwidth and routes complex escalations only to available, unburdened staff.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Lock className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mb-4 md:mb-5" />
                <h3 className="text-xl md:text-2xl font-bold mb-3">Security & Control</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">You set the boundaries. AI executes within strict operational guardrails. It never goes rogue.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Who This Is For</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-left">
                <Card className="bg-gray-50 border-0 rounded-2xl"><CardContent className="p-6"><p className="text-base md:text-lg text-gray-800 leading-relaxed">Operators drowning in repetitive customer queries.</p></CardContent></Card>
                <Card className="bg-gray-50 border-0 rounded-2xl"><CardContent className="p-6"><p className="text-base md:text-lg text-gray-800 leading-relaxed">Founders who want to scale revenue without scaling headcount.</p></CardContent></Card>
                <Card className="bg-gray-50 border-0 rounded-2xl"><CardContent className="p-6"><p className="text-base md:text-lg text-gray-800 leading-relaxed">Teams losing leads because they can't reply fast enough.</p></CardContent></Card>
                <Card className="bg-gray-50 border-0 rounded-2xl"><CardContent className="p-6"><p className="text-base md:text-lg text-gray-800 leading-relaxed">Businesses ready to transition from manual to automated execution.</p></CardContent></Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 pb-24 md:pb-32 bg-gradient-to-br from-indigo-600 to-violet-700 text-white text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">Ready to Deploy Your Digital Executives?</h2>
            <p className="text-lg md:text-xl mb-8 md:mb-10 text-indigo-100 max-w-2xl mx-auto leading-relaxed">Stop hiring for repetitive tasks. Start scaling with AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-0">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-700 hover:bg-gray-100 px-6 md:px-8 py-6 md:py-6 text-base md:text-lg font-bold rounded-xl shadow-xl min-h-[56px]">
                  Schedule AI Implementation Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAgentsPage;
