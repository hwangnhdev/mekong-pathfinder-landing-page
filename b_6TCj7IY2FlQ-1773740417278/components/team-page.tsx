"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Globe, Sparkles, MapPin } from "lucide-react"
import Image from "next/image"

// Hero Section
function TeamHeroSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Chúng tôi không phải công ty lớn</span>
            <br />
            <span className="text-gradient">chúng tôi là sinh viên</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nhưng có một mục tiêu lớn: xây dựng công nghệ giúp cộng đồng an toàn hơn
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Story Section
function TeamStorySection() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-12 glow-sm"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Câu chuyện của chúng tôi
              </h2>
              <p className="text-muted-foreground">Từ vấn đề thực tế đến giải pháp</p>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Chúng tôi <span className="text-foreground font-medium">sống ở đây</span> — 
              ngay tại Đồng bằng Sông Cửu Long.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Chúng tôi <span className="text-foreground font-medium">thấy vấn đề mỗi ngày</span> — 
              đường ngập, xe kẹt, người dân loay hoay không biết đi đâu.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Và chúng tôi quyết định <span className="text-gradient font-semibold">làm gì đó</span>.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Team Members
const teamMembers = [
  {
    name: "Nguyễn Văn A",
    role: "Team Lead & Backend Developer",
    avatar: "/team/member-1.jpg",
    quote: "Tôi muốn dùng công nghệ để giải quyết vấn đề thật"
  },
  {
    name: "Trần Thị B",
    role: "Mobile Developer",
    avatar: "/team/member-2.jpg",
    quote: "Mỗi dòng code là một bước đến thành phố thông minh hơn"
  },
  {
    name: "Lê Văn C",
    role: "AI & Data Engineer",
    avatar: "/team/member-3.jpg",
    quote: "Dữ liệu không chỉ là số, đó là câu chuyện của cộng đồng"
  },
  {
    name: "Phạm Thị D",
    role: "UI/UX Designer",
    avatar: "/team/member-4.jpg",
    quote: "Công nghệ tốt nhất là công nghệ ai cũng dùng được"
  }
]

function TeamMembersSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Đội ngũ
          </h2>
          <p className="text-muted-foreground text-lg">
            Những người trẻ với đam mê công nghệ và trách nhiệm cộng đồng
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover group text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-full h-full rounded-full bg-secondary overflow-hidden border-2 border-border">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e3a5f&color=fff&size=96`
                    }}
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary mb-4">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground italic">
                &ldquo;{member.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Tech Stack
const techStack = [
  {
    category: "Backend",
    icon: Database,
    items: ["FastAPI", "PostgreSQL", "Redis"]
  },
  {
    category: "AI & Data",
    icon: Sparkles,
    items: ["TensorFlow", "OpenCV", "Pandas"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Maps SDK"]
  },
  {
    category: "Web",
    icon: Code,
    items: ["Next.js", "TypeScript", "Tailwind CSS"]
  }
]

function TechStackSection() {
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
            Công nghệ
          </h2>
          <p className="text-muted-foreground text-lg">
            Stack hiện đại, tối ưu cho performance và trải nghiệm người dùng
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <stack.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {stack.category}
              </h3>
              
              <ul className="space-y-2">
                {stack.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Vision Section
function VisionSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8 glow">
            <Globe className="h-10 w-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Tầm nhìn
          </h2>
          
          <p className="text-xl text-muted-foreground mb-4">
            Không chỉ là <span className="text-foreground font-medium">Cần Thơ</span>
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gradient">
            mà là toàn bộ Đồng bằng Sông Cửu Long
          </p>
          
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Chúng tôi mơ về một ngày mà mọi người dân miền Tây đều có thể di chuyển an toàn,
            bất kể thời tiết. Đó là mục tiêu mà chúng tôi đang từng bước xây dựng.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function TeamPage() {
  return (
    <main className="pt-16">
      <TeamHeroSection />
      <TeamStorySection />
      <TeamMembersSection />
      <TechStackSection />
      <VisionSection />
    </main>
  )
}
