import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Avyron</title>
        <meta name="description" content="Avyron is an AI-native operating system for travel businesses. Learn about our mission and vision." />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gray-50">
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
                About Us
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The AI-Native Operating System<br />
                <span className="text-emerald-400">For Travel Businesses</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                We are building the infrastructure that allows tour operators to scale without breaking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Description */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-0 shadow-premium-xl bg-gradient-to-br from-gray-50 to-indigo-50/30">
                <CardContent className="p-10 md:p-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Avyron is an AI-native operating system designed specifically for travel businesses. 
                    We recognized that as tour operators grow, their operational complexity multiplies exponentially. 
                    Spreadsheets break, communication silos form, and the founder becomes the bottleneck.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We built Avyron to solve this exact problem. By combining structured operational workflows 
                    with intelligent AI agents, we provide the control layer that allows travel businesses to 
                    scale their operations, automate their execution, and deliver exceptional experiences without 
                    the proportional increase in headcount and stress.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card border-2 border-indigo-200 hover-lift">
                  <CardContent className="p-10">
                    <Target className="w-12 h-12 text-indigo-600 mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      To transform operational chaos into controlled execution for tour operators worldwide. 
                      We provide the infrastructure that turns complex travel operations into streamlined, 
                      predictable, and scalable systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card border-2 border-violet-200 hover-lift">
                  <CardContent className="p-10">
                    <Eye className="w-12 h-12 text-violet-600 mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      A world where travel businesses can scale infinitely without operational friction. 
                      We envision a future where AI handles the execution, allowing human teams to focus 
                      entirely on strategy, relationships, and crafting unforgettable travel experiences.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Belief Statement */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Heart className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
              <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Believe</h2>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  We believe that serious businesses deserve serious infrastructure.
                </p>
                <p>
                  We believe that founders should control their business, not be controlled by its daily operations.
                </p>
                <p>
                  We believe that the future of work in the travel industry is a seamless collaboration 
                  between human creativity and AI execution.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
