import { MapPin, Github, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">
                Mekong <span className="text-gradient">Pathfinder</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Ứng dụng giúp người dân Đồng bằng Sông Cửu Long tìm đường an toàn trong mùa ngập. 
              Được xây dựng bởi sinh viên với mục tiêu xây dựng thành phố thông minh hơn.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Đội ngũ
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tải ứng dụng
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Góp ý
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@mekongpathfinder.vn" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@mekongpathfinder.vn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/mekong-pathfinder" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Mekong Pathfinder. Made with love in Vietnam.
          </p>
          <p className="text-sm text-muted-foreground">
            Vì một Đồng bằng Sông Cửu Long an toàn hơn.
          </p>
        </div>
      </div>
    </footer>
  )
}
