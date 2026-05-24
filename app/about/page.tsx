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
    content: "To ensure children in rural and deprived communities across Ghana's Upper East Region have access to quality education through school supplies, uniforms, mentorship, and infrastructure support."
  },
  {
    key: "vision",
    title: "Our Vision",
    icon: <Eye className="h-8 w-8" />,
    content: "An Upper East Region where every child has the materials, mentorship, and safe school environments needed to learn and thrive — and where communities grow stronger through education, health awareness, and mutual support."
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
    image: "/images/wintima-2.jpg"
  },
  {
    name: "Jane Smith",
    role: "Secretary",
    bio: "Healthcare advocate and former nurse with deep expertise in community health programs. Jane leads our health initiatives and ensures our diabetes outreach program maintains the highest standards of care.",
    image: "/images/wintima-3.jpg"
  },
  {
    name: "Michael Johnson",
    role: "Treasurer",
    bio: "Financial analyst specializing in non-profit accounting and donor fund management. Michael ensures transparent financial stewardship and sustainable program funding across all our initiatives.",
    image: "/images/wintima-4.jpg"
  },
  {
    name: "Dr. Amina Hassan",
    role: "Programs Director",
    bio: "Education specialist with PhD in Development Studies and extensive experience in youth mentorship programs. Dr. Hassan oversees our Northern Stars program and educational partnerships.",
    image: "/images/wintima-6.jpg"
  },
  {
    name: "Samuel Osei",
    role: "Community Liaison",
    bio: "Native of the Upper East Region with strong community connections and cultural insights. Samuel ensures our programs remain culturally appropriate and community-led.",
    image: "/images/wintima-7.jpg"
  },
  {
    name: "Sarah Williams",
    role: "International Relations",
    bio: "Former diplomat with expertise in international development and cross-cultural partnerships. Sarah manages our global mentor network and international collaborations.",
    image: "/images/wintima-8.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Story"
        subtitle="About Us"
        description="Founded by Janet Zeylisa Dauda to restore smiles and impact lives through education in Ghana's Upper East Region"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
              Foundation Pillars
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Our mission, vision, and values guide every decision and shape every program we implement.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-wintima-light">
                {missionVisionValues.map((item) => (
                  <TabsTrigger
                    key={item.key}
                    value={item.key}
                    className="data-[state=active]:bg-wintima-maroon data-[state=active]:text-white"
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
                          <div className="p-4 bg-wintima-maroon/10 rounded-full text-wintima-maroon">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-wintima-charcoal mb-6">
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
      <section className="py-16 lg:py-24 bg-wintima-light">
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
                  src="/images/founder.jpg" 
                  alt="Janet Zeylisa Dauda, Founder of Wintima Foundation" 
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-6 text-lg text-medium-gray leading-relaxed">
                <p>
                  Janet Zeylisa Dauda founded Wintima Foundation in 2015 after witnessing how children in
                  rural and deprived communities across Ghana&apos;s Upper East Region struggled without basic
                  school supplies, uniforms, or supportive mentorship. She saw pupils sitting on floors,
                  sharing worn textbooks, and losing hope long before they could discover their potential.
                </p>

                <p>
                  What started as grassroots support for local schools evolved into a sustained mission:
                  ensuring every child has the materials, guidance, and dignity needed to stay in school
                  and succeed. Wintima was formally registered as a Company Limited by Guarantee in 2021,
                  strengthening its capacity to partner with communities, donors, and volunteers.
                </p>

                <p>
                  Our work spans educational materials, school uniforms, mentorship programmes, and
                  infrastructure projects — including school refurbishments that repair classrooms, desks,
                  windows, and roofs so learning can happen in safe, dignified spaces.
                </p>

                <p>
                  Beyond education, Wintima Foundation continues community health and giving initiatives
                  such as the J&amp;C Diabetes Outreach and Northern Stars mentorship programme — honouring
                  lives lost while expanding opportunities for the next generation.
                </p>

                <p>
                  Today, Wintima Foundation stands as a testament to what is possible when compassion meets
                  action. Every desk supplied, every uniform delivered, and every mentor paired with a
                  student reflects Janet&apos;s founding vision: that geography should never determine destiny.
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wintima-charcoal mb-6">
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
                          className="w-24 h-24 mx-auto rounded-full bg-cover bg-center border-4 border-wintima-maroon/20"
                          style={{ backgroundImage: `url(${member.image})` }}
                        />
                      ) : (
                        <div className="w-24 h-24 mx-auto rounded-full bg-wintima-maroon/10 flex items-center justify-center border-4 border-wintima-maroon/20">
                          <Users className="h-10 w-10 text-wintima-maroon" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-wintima-charcoal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-wintima-maroon font-medium mb-4">
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
      <section className="py-16 lg:py-24 bg-wintima-maroon text-white">
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
                className="bg-wintima-maroon hover:bg-wintima-maroon/90 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get Involved
              </motion.a>
              <motion.a
                href="/programmes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-wintima-maroon px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
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