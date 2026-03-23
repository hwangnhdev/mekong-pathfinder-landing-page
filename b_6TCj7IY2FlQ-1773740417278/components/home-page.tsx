"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Map, Droplets, BarChart3, Shield, Users, Globe, Download, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Hero Section
function HeroSection() {
  const [showSecondText, setShowSecondText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondText(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Animated blue glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Khi thành phố chìm trong nước...</span>
            <br />
            <span className="text-gradient">bạn sẽ đi đâu?</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showSecondText ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            <span className="text-primary font-semibold">Mekong Pathfinder</span> giúp bạn tìm đường an toàn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button asChild size="lg" className="glow-sm hover:glow transition-all duration-300">
            <Link href="/download">
              <Download className="mr-2 h-5 w-5" />
              Tải ứng dụng ngay
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="glass glass-hover">
            <Link href="#solution">
              Xem cách hoạt động
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

// Story Section
function StorySection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">
            Đây không phải chuyện của riêng ai
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Một ngày mưa ở Cần Thơ...
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Người dân mắc kẹt trên đường...
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Không có dữ liệu để quyết định đi đâu...
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 glass rounded-2xl p-8 glow-sm"
          >
            <p className="text-xl sm:text-2xl font-medium text-foreground">
              &ldquo;Chúng ta không thiếu đường...
              <br />
              <span className="text-gradient">chúng ta thiếu thông tin&rdquo;</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: Map,
      title: "Không biết đường nào ngập",
      description: "Thông tin ngập lụt không được cập nhật kịp thời, khiến người dân gặp rủi ro"
    },
    {
      icon: Shield,
      title: "Mất thời gian di chuyển",
      description: "Đi vào đường ngập mất thời gian quay đầu, gây tắc nghẽn giao thông"
    },
    {
      icon: BarChart3,
      title: "Thiếu dữ liệu cho quản lý",
      description: "Chính quyền thiếu dữ liệu thực tế để đưa ra quyết định phù hợp"
    }
  ]

  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nỗi đau rõ ràng
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mỗi mùa mưa, hàng triệu người dân Đồng bằng Sông Cửu Long phải đối mặt với những vấn đề này
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 glass-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <problem.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solution Section
function SolutionSection() {
  const features = [
    {
      icon: Map,
      title: "Smart Routing",
      description: "Tìm đường thông minh, tự động tránh các tuyến đường ngập lụt"
    },
    {
      icon: Droplets,
      title: "Flood Reporting",
      description: "Báo cáo điểm ngập theo thời gian thực từ cộng đồng"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Phân tích dữ liệu ngập lụt cho chính quyền và nghiên cứu"
    }
  ]

  return (
    <section id="solution" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Chúng tôi biến dữ liệu thành <span className="text-gradient">con đường</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mekong Pathfinder kết hợp công nghệ và cộng đồng để tạo ra giải pháp thực sự
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 glass-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-sm">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo Section
function DemoSection() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tin vì thấy
          </h2>
          <p className="text-muted-foreground text-lg">
            Giao diện trực quan, dễ sử dụng cho mọi người
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          {/* Phone mockup */}
          <div className="relative glass rounded-[3rem] p-4 glow">
            <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19] flex flex-col">
              {/* Status bar */}
              <div className="h-12 bg-secondary/50 flex items-center justify-center">
                <div className="w-24 h-6 bg-background rounded-full" />
              </div>
              
              {/* Map area */}
              <div className="flex-1 bg-gradient-to-b from-primary/10 to-accent/10 relative">
                {/* Route visualization */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <motion.path
                    d="M20,80 Q30,60 40,50 T60,30 T80,20"
                    fill="none"
                    stroke="oklch(0.65 0.18 220)"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <circle cx="20" cy="80" r="3" fill="oklch(0.55 0.2 190)" />
                  <circle cx="80" cy="20" r="3" fill="oklch(0.65 0.18 220)" />
                  
                  {/* Flood zones */}
                  <circle cx="50" cy="60" r="8" fill="oklch(0.577 0.245 27.325 / 0.3)" />
                  <circle cx="70" cy="45" r="6" fill="oklch(0.577 0.245 27.325 / 0.3)" />
                </svg>
                
                {/* Labels */}
                <div className="absolute top-4 left-4 glass rounded-lg px-3 py-1.5 text-xs text-foreground">
                  Route recalculating...
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3">
                  <p className="text-xs text-muted-foreground">Đang tránh</p>
                  <p className="text-sm font-medium text-foreground">2 điểm ngập</p>
                </div>
              </div>
              
              {/* Bottom nav */}
              <div className="h-16 bg-secondary/50 flex items-center justify-around px-6">
                <div className="w-6 h-6 rounded-full bg-primary/30" />
                <div className="w-6 h-6 rounded-full bg-muted" />
                <div className="w-6 h-6 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Impact Section
function ImpactSection() {
  const impacts = [
    {
      icon: Users,
      title: "Người dân",
      description: "Di chuyển an toàn hơn mỗi ngày"
    },
    {
      icon: Shield,
      title: "Chính quyền",
      description: "Đưa ra quyết định tốt hơn"
    },
    {
      icon: Globe,
      title: "Cộng đồng",
      description: "Kết nối và hỗ trợ lẫn nhau"
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Không chỉ là app
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Đây là cách chúng ta xây dựng <span className="text-gradient font-semibold">thành phố thông minh hơn</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <impact.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {impact.title}
              </h3>
              <p className="text-muted-foreground">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bạn có thể bắt đầu ngay
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Một cú chạm thay đổi hành trình của bạn
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glow hover:glow transition-all duration-300 px-8">
              <Link href="/download">
                <Download className="mr-2 h-5 w-5" />
                Tải ứng dụng
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass glass-hover px-8">
              <Link href="/feedback">
                <MessageSquare className="mr-2 h-5 w-5" />
                Góp ý
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <ImpactSection />
      <CTASection />
    </main>
  )
}
