import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamPage } from "@/components/team-page"

export const metadata = {
  title: "Đội ngũ - Mekong Pathfinder",
  description: "Gặp gỡ đội ngũ sinh viên đứng sau Mekong Pathfinder - những người trẻ với đam mê công nghệ và trách nhiệm cộng đồng."
}

export default function Page() {
  return (
    <>
      <Navbar />
      <TeamPage />
      <Footer />
    </>
  )
}
