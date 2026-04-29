"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Eye, 
  Target, 
  Users, 
} from "lucide-react";
import Image from "next/image";

const missionVisionValues = [
  {
    key: "mission",
    title: "Our Mission",
    icon: <Target className="h-8 w-8" />,
    content: "To empower communities in Northern Ghana through sustainable programs in education, health awareness, and community service, creating pathways for young people to reach their full potential while strengthening the social fabric of rural communities."
  },
  {
    key: "vision",
    title: "Our Vision",
    icon: <Eye className="h-8 w-8" />,
    content: "A Northern Ghana where every young person has access to quality mentorship, communities are equipped with essential health knowledge, and no family lacks basic necessities. We envision thriving rural communities that serve as models of sustainable development and shared prosperity."
  },
  {
    key: "values",
    title: "Our Values",
    icon: <Heart className="h-8 w-8" />,
    content: "Compassion drives our service. Integrity guides our actions. Excellence defines our programs. Community remains at our center. We believe in the power of mentorship, the importance of health education, and the strength that comes from neighbors helping neighbors."
  }
];

const boardMembers = [
  {
    name: "John Doe",
    role: "Chairman",
    bio: "Experienced development professional with 15+ years in NGO management across West Africa. John brings strategic leadership and deep understanding of community development challenges and opportunities.",
    image: "/images/yeremallu-2.JPG"
  },
  {
    name: "Jane Smith",
    role: "Secretary",
    bio: "Healthcare advocate and former nurse with deep expertise in community health programs. Jane leads our health initiatives and ensures our diabetes outreach program maintains the highest standards of care.",
    image: "/images/yeremallu-3.JPG"
  },
  {
    name: "Michael Johnson",
    role: "Treasurer",
    bio: "Financial analyst specializing in non-profit accounting and donor fund management. Michael ensures transparent financial stewardship and sustainable program funding across all our initiatives.",
    image: "/images/yeremallu-4.JPG"
  },
  {
    name: "Dr. Amina Hassan",
    role: "Programs Director",
    bio: "Education specialist with PhD in Development Studies and extensive experience in youth mentorship programs. Dr. Hassan oversees our Northern Stars program and educational partnerships.",
    image: "/images/yeremallu-6.JPG"
  },
  {
    name: "Samuel Osei",
    role: "Community Liaison",
    bio: "Native of Northern Ghana with strong community connections and cultural insights. Samuel ensures our programs remain culturally appropriate and community-led.",
    image: "/images/yeremallu-7.JPG"
  },
  {
    name: "Sarah Williams",
    role: "International Relations",
    bio: "Former diplomat with expertise in international development and cross-cultural partnerships. Sarah manages our global mentor network and international collaborations.",
    image: "/images/yeremallu-8.JPG"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Story"
        subtitle="About Us"
        description="Born from a deep love for community and a vision to create lasting change in Northern Ghana"
        height="medium"
        textAlign="center"
      />

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
              Foundation Pillars
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Our mission, vision, and values guide every decision and shape every program we implement.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-light-gray">
                {missionVisionValues.map((item) => (
                  <TabsTrigger
                    key={item.key}
                    value={item.key}
                    className="data-[state=active]:bg-earthy-green data-[state=active]:text-white"
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {missionVisionValues.map((item) => (
                <TabsContent key={item.key} value={item.key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-6">
                          <div className="p-4 bg-earthy-green/10 rounded-full text-earthy-green">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-deep-charcoal mb-6">
                          {item.title}
                        </h3>
                        <p className="text-lg text-medium-gray leading-relaxed">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Founder's Full Story */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/yeremallu-28.JPG" 
                  alt="Yeremallu Foundation Founder Story" 
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-6 text-lg text-medium-gray leading-relaxed">
                <p>
                  Growing up in Northern Ghana, our founder witnessed firsthand the barriers that young 
                  people face in pursuing their dreams. Limited access to quality education, lack of 
                  mentorship opportunities, and inadequate healthcare resources created cycles that 
                  seemed impossible to break. Yet, through determination, community support, and the 
                  guidance of caring mentors, these barriers became stepping stones to success.
                </p>
                
                <p>
                  The name &quot;Yeremallu&quot; carries deep cultural significance, embodying the spirit of 
                  collective responsibility and mutual support that defines Northern Ghanaian communities. 
                  It represents the belief that when we lift each other up, entire communities rise together.
                </p>
                
                <p>
                  After years of international experience in development, healthcare, and education, 
                  our founder returned home with a clear mission: to create sustainable programs that 
                  would empower young people, strengthen families, and build healthier communities. 
                  The foundation officially launched with the Northern Stars mentorship program, 
                  connecting rural students with global mentors.
                </p>
                
                <p>
                  The tragic loss of beloved community members Charles and Juliet to diabetes-related 
                  complications became a catalyst for expanding our mission to include comprehensive 
                  health education. Their memory lives on through our J&C Diabetes Outreach program, 
                  which has since prevented countless similar tragedies through early detection and education.
                </p>
                
                <p>
                    Today, the Yeremallu Foundation stands as a testament to what&apos;s possible when 
                  compassion meets action. Every program we implement, every student we mentor, 
                  and every family we support reflects our founder&apos;s original vision: that every 
                  person deserves the opportunity to reach their full potential, regardless of 
                  where they start their journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
              Board of Directors
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Our board brings together diverse expertise in development, healthcare, education, and community leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-6">
                      {member.image ? (
                        <div
                          className="w-24 h-24 mx-auto rounded-full bg-cover bg-center border-4 border-earthy-green/20"
                          style={{ backgroundImage: `url(${member.image})` }}
                        />
                      ) : (
                        <div className="w-24 h-24 mx-auto rounded-full bg-earthy-green/10 flex items-center justify-center border-4 border-earthy-green/20">
                          <Users className="h-10 w-10 text-earthy-green" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-earthy-green font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-medium-gray text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-earthy-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Our Story
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Every chapter of our story is written by people like you who believe in the power of community and the potential of every young person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sunset-orange hover:bg-sunset-orange/90 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get Involved
              </motion.a>
              <motion.a
                href="/programmes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-earthy-green px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                Our Programs
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 