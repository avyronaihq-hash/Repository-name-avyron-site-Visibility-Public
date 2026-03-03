import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Shield, CheckCircle2, Sparkles } from 'lucide-react';

const BookDemoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bookingsPerMonth: '',
    teamSize: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    toast({
      title: "Demo Request Received!",
      description: "We'll contact you within 24 hours to schedule your private walkthrough.",
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Demo Requested - Avyron</title>
          <meta name="description" content="Your demo request has been received. We'll contact you soon." />
        </Helmet>

        <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <Card className="max-w-2xl mx-auto glass-card shadow-premium-xl">
              <CardContent className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Demo Request <span className="text-gradient-indigo">Received!</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Thank you for your interest in Avyron. Our team will contact you within 24 hours to schedule your private walkthrough.
                </p>

                <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    {[
                      'We\'ll email you to confirm your preferred time slot',
                      'You\'ll receive a calendar invite with meeting details',
                      'Our team will prepare a customized demo based on your needs',
                      'We\'ll answer all your questions during the walkthrough'
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Check your email for confirmation. If you don't hear from us within 24 hours, please contact us at{' '}
                  <a href="mailto:hello@avyron.com" className="text-indigo-600 hover:underline">hello@avyron.com</a>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book a Demo - Avyron Operational Control Platform</title>
        <meta name="description" content="Schedule a private walkthrough of Avyron. See how we transform operational chaos into controlled execution." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-violet-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-dense opacity-20"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Private Walkthrough
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Book Your <span className="text-emerald-400">Private Demo</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                See how Avyron transforms operational chaos into controlled execution. 
                Personalized walkthrough tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-card shadow-premium-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Demo</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-900">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="mt-2 bg-white text-gray-900"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="john@company.com"
                          required
                          className="mt-2 bg-white text-gray-900"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-gray-900">Company Name *</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Your Tour Company"
                          required
                          className="mt-2 bg-white text-gray-900"
                        />
                      </div>

                      <div>
                        <Label htmlFor="bookings" className="text-gray-900">Bookings per Month</Label>
                        <Select value={formData.bookingsPerMonth} onValueChange={(value) => handleChange('bookingsPerMonth', value)}>
                          <SelectTrigger className="mt-2 bg-white text-gray-900">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-20">0-20</SelectItem>
                            <SelectItem value="20-50">20-50</SelectItem>
                            <SelectItem value="50-100">50-100</SelectItem>
                            <SelectItem value="100-200">100-200</SelectItem>
                            <SelectItem value="200+">200+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="teamSize" className="text-gray-900">Team Size</Label>
                        <Select value={formData.teamSize} onValueChange={(value) => handleChange('teamSize', value)}>
                          <SelectTrigger className="mt-2 bg-white text-gray-900">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 people</SelectItem>
                            <SelectItem value="6-10">6-10 people</SelectItem>
                            <SelectItem value="11-25">11-25 people</SelectItem>
                            <SelectItem value="25+">25+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-900">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your specific needs or challenges..."
                          rows={4}
                          className="mt-2 bg-white text-gray-900"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 hover:from-indigo-700 hover:via-violet-700 hover:to-blue-600 text-white font-semibold"
                      >
                        Request Demo
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Use.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Calendar,
                        title: '30-Minute Walkthrough',
                        desc: 'Personalized demo tailored to your business needs'
                      },
                      {
                        icon: Clock,
                        title: 'Response Within 24 Hours',
                        desc: 'We\'ll contact you to schedule at your convenience'
                      },
                      {
                        icon: Shield,
                        title: 'No Pressure, No Commitment',
                        desc: 'Just a friendly conversation about your operations'
                      },
                    ].map((item, index) => (
                      <Card key={index} className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-200">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">During the Demo</h3>
                    <ul className="space-y-3">
                      {[
                        'See the Command Board in action',
                        'Explore payment intelligence features',
                        'Watch AI agents handle inquiries',
                        'Review vendor tracking capabilities',
                        'Ask questions specific to your business',
                        'Discuss pricing and implementation'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Trusted by Tour Operators</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-emerald-400 mb-1">99.9%</div>
                        <div className="text-sm text-gray-300">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-300">Support</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-emerald-400 mb-1">SOC 2</div>
                        <div className="text-sm text-gray-300">Compliant</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-emerald-400 mb-1">GDPR</div>
                        <div className="text-sm text-gray-300">Ready</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookDemoPage;
