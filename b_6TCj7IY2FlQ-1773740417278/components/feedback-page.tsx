"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Bug, Lightbulb, Droplets, Send, User, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// Hero Section
function FeedbackHeroSection() {
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
            <span className="text-foreground">Ý kiến của bạn</span>
            <br />
            <span className="text-gradient">có thể cứu ai đó</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khỏi một con đường ngập. Mỗi góp ý đều quan trọng với chúng tôi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Feedback Types
const feedbackTypes = [
  {
    id: "bug",
    icon: Bug,
    label: "Báo lỗi",
    description: "App gặp sự cố"
  },
  {
    id: "idea",
    icon: Lightbulb,
    label: "Ý tưởng",
    description: "Đề xuất tính năng"
  },
  {
    id: "flood",
    icon: Droplets,
    label: "Báo ngập",
    description: "Thông tin ngập lụt"
  }
]

// Form Section
function FeedbackFormSection() {
  const [selectedType, setSelectedType] = useState<string>("idea")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-10 glow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Gửi góp ý</h2>
              <p className="text-muted-foreground text-sm">Chọn loại và viết nội dung</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Feedback Type Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Loại góp ý
              </label>
              <div className="grid grid-cols-3 gap-3">
                {feedbackTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={cn(
                      "p-4 rounded-xl border transition-all duration-200 text-center",
                      selectedType === type.id
                        ? "border-primary bg-primary/10 glow-sm"
                        : "border-border bg-secondary/30 hover:bg-secondary/50"
                    )}
                  >
                    <type.icon className={cn(
                      "h-6 w-6 mx-auto mb-2",
                      selectedType === type.id ? "text-primary" : "text-muted-foreground"
                    )} />
                    <p className={cn(
                      "text-sm font-medium",
                      selectedType === type.id ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {type.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tên của bạn
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 bg-input border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-input border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nội dung
              </label>
              <Textarea
                placeholder={
                  selectedType === "bug" 
                    ? "Mô tả lỗi bạn gặp phải..."
                    : selectedType === "flood"
                    ? "Mô tả địa điểm và mức độ ngập..."
                    : "Ý tưởng hoặc đề xuất của bạn..."
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-32 bg-input border-border focus:border-primary focus:ring-primary resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full glow-sm hover:glow transition-all duration-300"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  Đang gửi...
                </>
              ) : isSubmitted ? (
                <>
                  <Heart className="mr-2 h-5 w-5" />
                  Cảm ơn bạn!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Gửi góp ý
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

// Community Feedback Section
const recentFeedback = [
  {
    name: "Minh Tuấn",
    type: "flood",
    message: "Đường Nguyễn Văn Linh đoạn gần cầu Cái Răng ngập khoảng 30cm",
    time: "2 giờ trước"
  },
  {
    name: "Hồng Nhung",
    type: "idea",
    message: "Nên thêm tính năng chia sẻ route cho bạn bè qua Zalo",
    time: "5 giờ trước"
  },
  {
    name: "Văn Hùng",
    type: "bug",
    message: "App bị crash khi mở ở chế độ offline",
    time: "1 ngày trước"
  },
  {
    name: "Thu Hà",
    type: "flood",
    message: "Khu vực chợ Xuân Khánh ngập nặng sau trận mưa chiều",
    time: "1 ngày trước"
  }
]

function CommunityFeedbackSection() {
  const getTypeInfo = (type: string) => {
    switch (type) {
      case "bug":
        return { icon: Bug, label: "Báo lỗi", color: "text-destructive" }
      case "idea":
        return { icon: Lightbulb, label: "Ý tưởng", color: "text-chart-4" }
      case "flood":
        return { icon: Droplets, label: "Báo ngập", color: "text-primary" }
      default:
        return { icon: MessageSquare, label: "Góp ý", color: "text-muted-foreground" }
    }
  }

  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Góp ý từ cộng đồng
          </h2>
          <p className="text-muted-foreground text-lg">
            Những đóng góp gần đây từ người dùng
          </p>
        </motion.div>

        <div className="space-y-4">
          {recentFeedback.map((item, index) => {
            const typeInfo = getTypeInfo(item.type)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-5 glass-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <typeInfo.icon className={cn("h-5 w-5", typeInfo.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full bg-secondary", typeInfo.color)}>
                        {typeInfo.label}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.message}</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">{item.time}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Message Section
function MessageSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12 glow-sm"
        >
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Chúng tôi đọc từng góp ý
          </h2>
          <p className="text-xl text-muted-foreground">
            Vì mỗi góp ý là một <span className="text-gradient font-semibold">câu chuyện thật</span>
          </p>
          
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Từ một báo cáo ngập, chúng tôi có thể cập nhật bản đồ để giúp hàng trăm người khác tránh được.
            Từ một ý tưởng nhỏ, chúng tôi có thể xây dựng tính năng mới cho cả cộng đồng.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function FeedbackPage() {
  return (
    <main className="pt-16">
      <FeedbackHeroSection />
      <FeedbackFormSection />
      <CommunityFeedbackSection />
      <MessageSection />
    </main>
  )
}
