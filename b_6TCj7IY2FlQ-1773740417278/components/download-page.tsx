"use client"

import { motion } from "framer-motion"
import { Download, Shield, Clock, Users, ChevronRight, Smartphone, Check, HardDrive, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"

// Hero Section
function DownloadHeroSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Ứng dụng dành cho</span>
            <br />
            <span className="text-gradient">những người không muốn bị mắc kẹt</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tải Mekong Pathfinder ngay hôm nay và bắt đầu di chuyển an toàn hơn
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Download Section
function DownloadSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12 glow text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8">
            <Download className="h-10 w-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Tải ứng dụng Android
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Phiên bản APK cho Android. iOS sẽ sớm ra mắt.
          </p>
          
          <Button size="lg" className="glow-sm hover:glow transition-all duration-300 px-8 py-6 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Tải APK ngay
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              <span>Version 1.2.0</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4" />
              <span>25 MB</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Android 8.0+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Installation Guide
const installSteps = [
  {
    step: 1,
    title: "Tải file APK",
    description: "Nhấn nút tải ở trên để tải file APK về điện thoại"
  },
  {
    step: 2,
    title: "Cho phép cài đặt",
    description: "Vào Cài đặt > Bảo mật > Cho phép cài đặt từ nguồn không xác định"
  },
  {
    step: 3,
    title: "Cài đặt ứng dụng",
    description: "Mở file APK đã tải và làm theo hướng dẫn để cài đặt"
  },
  {
    step: 4,
    title: "Mở app và bắt đầu",
    description: "Mở Mekong Pathfinder và cho phép quyền truy cập vị trí để sử dụng"
  }
]

function InstallGuideSection() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hướng dẫn cài đặt
          </h2>
          <p className="text-muted-foreground text-lg">
            4 bước đơn giản để bắt đầu sử dụng
          </p>
        </motion.div>

        <div className="space-y-4">
          {installSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 glass-hover flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">{item.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {index < installSteps.length - 1 && (
                <ChevronRight className="h-5 w-5 text-muted-foreground/50 ml-auto flex-shrink-0 hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// App Preview Section
function AppPreviewSection() {
  const screenshots = [
    { title: "Bản đồ", description: "Xem đường tránh ngập trực quan" },
    { title: "Báo ngập", description: "Báo cáo điểm ngập dễ dàng" },
    { title: "Route", description: "Tìm đường an toàn tự động" },
    { title: "Cảnh báo", description: "Nhận thông báo kịp thời" }
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Xem trước ứng dụng
          </h2>
          <p className="text-muted-foreground text-lg">
            Giao diện trực quan, dễ sử dụng
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {screenshots.map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-64 flex-shrink-0"
              >
                <div className="glass rounded-3xl p-3 glow-sm">
                  <div className="bg-gradient-to-b from-primary/10 to-accent/10 rounded-2xl aspect-[9/16] flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{screen.title}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-foreground">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground">{screen.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Use Section
const benefits = [
  {
    icon: Shield,
    title: "Tránh ngập an toàn",
    description: "Tìm đường tự động tránh các tuyến đường đang ngập"
  },
  {
    icon: Clock,
    title: "Tiết kiệm thời gian",
    description: "Không mất thời gian quay đầu khi gặp đường ngập"
  },
  {
    icon: Users,
    title: "Đóng góp cộng đồng",
    description: "Báo cáo điểm ngập giúp người khác tránh được"
  }
]

function WhyUseSection() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tại sao nên dùng?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 glass-hover group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12 glow-sm"
        >
          <Check className="h-16 w-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Bạn không cần chờ thành phố thay đổi
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Bạn có thể bắt đầu từ <span className="text-gradient font-semibold">điện thoại của mình</span>
          </p>
          
          <Button size="lg" className="glow-sm hover:glow transition-all duration-300 px-8">
            <Download className="mr-2 h-5 w-5" />
            Tải ngay
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export function DownloadPage() {
  return (
    <main className="pt-16">
      <DownloadHeroSection />
      <DownloadSection />
      <InstallGuideSection />
      <AppPreviewSection />
      <WhyUseSection />
      <FinalCTASection />
    </main>
  )
}
