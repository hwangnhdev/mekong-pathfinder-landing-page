import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeedbackPage } from "@/components/feedback-page"

export const metadata = {
  title: "Góp ý - Mekong Pathfinder",
  description: "Gửi góp ý, báo lỗi hoặc ý tưởng cho Mekong Pathfinder. Mỗi đóng góp của bạn đều quan trọng với chúng tôi."
}

export default function Page() {
  return (
    <>
      <Navbar />
      <FeedbackPage />
      <Footer />
    </>
  )
}
