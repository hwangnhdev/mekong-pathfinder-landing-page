import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Nav
    'nav.home': 'Trang chủ',
    'nav.team': 'Đội ngũ',
    'nav.download': 'Tải ứng dụng',
    'nav.feedback': 'Góp ý',
    'nav.dashboard': 'Dashboard',

    // Home - Hero
    'hero.hook1': 'Khi thành phố chìm trong nước...',
    'hero.hook2': 'bạn sẽ đi đâu?',
    'hero.title': 'Mekong Pathfinder giúp bạn tìm đường an toàn',
    'hero.cta.primary': 'Tải ứng dụng ngay',
    'hero.cta.secondary': 'Xem cách hoạt động',

    // Home - Story
    'story.title': 'Một ngày mưa ở Cần Thơ',
    'story.p1': 'Người dân mắc kẹt, không có dữ liệu để quyết định.',
    'story.highlight': 'Chúng ta không thiếu đường... chúng ta thiếu thông tin',

    // Home - Problem
    'problem.title': 'Nỗi đau rõ ràng',
    'problem.1.title': 'Không biết đường nào ngập',
    'problem.2.title': 'Mất thời gian di chuyển',
    'problem.3.title': 'Thiếu dữ liệu quản lý',

    // Home - Solution
    'problem.solution.title': 'Chúng tôi biến dữ liệu thành con đường',
    'solution.title': 'Mekong Pathfinder giúp bạn tìm đường an toàn',
    'preview.subtitle': 'Chúng tôi biến dữ liệu thành con đường',
    'section.gallery': 'Truy tìm vấn đề',
    'solution.feature1': 'Smart Routing (Lộ trình thông minh)',
    'solution.feature2': 'Flood Reporting (Báo cáo ngập)',
    'solution.feature3': 'Data Analytics (Phân tích dữ liệu)',
    'app.features.ai': 'AI Điều hướng',
    'app.features.realtime': 'Dữ liệu thời gian thực',
    'app.features.community': 'Cộng đồng báo cáo',
    'app.features.weather': 'Cảnh báo thời tiết',
    'app.features.camera': 'Hệ thống Camera',
    'app.features.sos': 'Tín hiệu SOS',

    // Home - Impact
    'impact.title': 'Không chỉ là app',
    'impact.subtitle': 'Đây là cách chúng ta xây dựng thành phố thông minh hơn',
    'impact.p1': 'Người dân → an toàn hơn',
    'impact.p2': 'Chính quyền → quyết định tốt hơn',
    'impact.p3': 'Cộng đồng → kết nối hơn',

    // Home - CTA
    'home.cta.title': 'Bạn có thể bắt đầu ngay',
    'home.cta.desc': 'Một cú chạm thay đổi hành trình của bạn',

    // Team
    'team.hero': 'Chúng tôi không phải công ty lớn, chúng tôi là sinh viên nhưng có một mục tiêu lớn',
    'team.story.title': 'Tại sao là chúng tôi?',
    'team.story.p1': 'Chúng tôi sống ở đây, thấy vấn đề mỗi ngày và quyết định làm gì đó.',
    'team.vision': 'Không chỉ là Cần Thơ, mà là toàn bộ Đồng bằng Sông Cửu Long',

    // Download
    'download.hero': 'Ứng dụng dành cho những người không muốn bị mắc kẹt',
    'download.solution.title': 'Giải pháp cho vùng Mekong',
    'download.solution.desc': 'Hết lo lắng về ngập lụt và tắc đường. Mekong Pathfinder mang đến dữ liệu thời gian thực giúp bạn di chuyển an toàn và tối ưu hơn trong từng hành trình.',
    'download.features.deep.title': "Khám phá các tính năng 'Chủ lực'",
    'download.features.flood.title': 'Bản đồ cảnh báo ngập',
    'download.features.flood.desc': 'Theo dõi mực nước và các điểm ngập theo thời gian thực tại Cần Thơ và các tỉnh lân cận.',
    'download.features.community.title': 'Cộng đồng Pathfinder',
    'download.features.community.desc': 'Chia sẻ và nhận cảnh báo từ những người tham gia giao thông khác. Mỗi báo cáo của bạn là một sự hỗ trợ cho cộng đồng.',
    'download.features.report.title': 'Báo cáo ngay tại hiện trường',
    'download.features.report.desc': 'Dễ dàng chụp ảnh và gửi thông tin về các điểm ngập, giúp dữ liệu luôn được cập nhật từng giây.',
    'download.trust.title': 'An toàn & Miễn phí tuyệt đối',
    'download.trust.desc': 'Dự án phi lợi nhuận vì cộng đồng. Không quảng cáo, không theo dõi dữ liệu cá nhân, hoàn toàn miễn phí.',
    'download.stats.downloads': 'Lượt tải xuống',
    'download.stats.reports': 'Báo cáo cộng đồng',
    'download.stats.accuracy': 'Độ chính xác cảnh báo',
    'download.ai.core.title': 'Bộ não AI: Điều hướng thông minh & Tối ưu lộ trình',
    'download.ai.core.desc': 'Thuật toán AI độc quyền phân tích hàng triệu kịch bản giao thông để chọn ra lộ trình ngắn nhất, khô ráo nhất và an toàn nhất cho bạn.',
    'download.tech.title': 'Công nghệ cốt lõi',
    'download.cta': 'Bạn không cần chờ thành phố thay đổi, bạn có thể bắt đầu từ điện thoại của mình',

    // Feedback
    'feedback.hero': 'Ý kiến của bạn có thể cứu ai đó khỏi một con đường ngập',
    'feedback.type.bug': 'Báo lỗi',
    'feedback.type.idea': 'Ý tưởng',
    'feedback.type.flood': 'Báo ngập',
    'feedback.msg': 'Chúng tôi đọc từng góp ý, vì mỗi góp ý là một câu chuyện thật',

    // Achievements
    'achievements.hero': 'Dấu Ấn Phát Triển',
    'achievements.desc': 'Ghi dấu những bước chân từ ngày đầu ý tưởng đến khi đạt được những cột mốc rạng rỡ của Mekong Pathfinder.',
    'achievements.journey': 'Hành trình phát triển',
    'achievements.success': 'Thành tựu rạng rỡ',
    'achievements.gallery': 'Khoảnh Khắc Đội Ngũ',

    // Footer
    'footer.about': 'Mekong Pathfinder là dự án công nghệ nhằm hỗ trợ quản lý đô thị và phát triển bền vững tại khu vực miền Tây.',
    'footer.builtBy': 'Được thực hiện bởi sinh viên tại Cần Thơ',
    'footer.links.title': 'Liên kết nhanh',
    'footer.app.title': 'Ứng dụng',
    'footer.legal.title': 'Pháp lý',
    'footer.privacy': 'Chính sách bảo mật',
    'footer.terms': 'Điều khoản sử dụng',
    'footer.contact': 'Liên hệ hợp tác',
    'footer.vision': 'Tầm nhìn 2030',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.download': 'Download',
    'nav.feedback': 'Feedback',
    'nav.dashboard': 'Dashboard',

    // Home - Hero
    'hero.hook1': 'When the city is underwater...',
    'hero.hook2': 'where will you go?',
    'hero.title': 'Mekong Pathfinder helps you find safe paths',
    'hero.cta.primary': 'Download App Now',
    'hero.cta.secondary': 'See How It Works',

    // Home - Story
    'story.title': 'A rainy day in Can Tho',
    'story.p1': 'People are stuck, no data to make decisions.',
    'story.highlight': "We don't lack roads... we lack information",

    // Home - Problem
    'problem.title': 'Clear Pain Points',
    'problem.1.title': 'Unknown flooded roads',
    'problem.2.title': 'Lost travel time',
    'problem.3.title': 'Lack of management data',

    // Home - Solution
    'problem.solution.title': 'We turn data into paths',
    'solution.title': 'Mekong Pathfinder helps you find safe paths',
    'preview.subtitle': 'We turn data into paths',
    'section.gallery': 'Gallery',
    'solution.feature1': 'Smart Routing',
    'solution.feature2': 'Flood Reporting',
    'solution.feature3': 'Data Analytics',
    'app.features.ai': 'AI Navigation',
    'app.features.realtime': 'Real-time Data',
    'app.features.community': 'Community Reports',
    'app.features.weather': 'Weather Alerts',
    'app.features.camera': 'Camera System',
    'app.features.sos': 'SOS Signals',

    // Home - Impact
    'impact.title': 'More than an app',
    'impact.subtitle': 'This is how we build a smarter city',
    'impact.p1': 'Citizens → Safer',
    'impact.p2': 'Authorities → Better decisions',
    'impact.p3': 'Community → Better connection',

    // Home - CTA
    'home.cta.title': 'You can start right now',
    'home.cta.desc': 'One touch transform your journey',

    // Team
    'team.hero': "We aren't a big company, we are students but we have a big goal",
    'team.story.title': 'Why us?',
    'team.story.p1': 'We live here, see the problems every day, and decided to do something.',
    'team.vision': 'Not just Can Tho, but the entire Mekong Delta',

    // Download
    'download.hero': 'The app for those who don\'t want to get stuck',
    'download.solution.title': 'Solution for the Mekong Region',
    'download.solution.desc': 'No more worries about flooding and traffic jams. Mekong Pathfinder provides real-time data to help you travel safely and optimally on every journey.',
    'download.features.deep.title': 'Key Features Deep Dive',
    'download.features.flood.title': 'Flood Warning Map',
    'download.features.flood.desc': 'Monitor water levels and flooding points in real-time in Can Tho and neighboring provinces.',
    'download.features.community.title': 'Pathfinder Community',
    'download.features.community.desc': 'Share and receive warnings from other road users. Each of your reports is a support for the community.',
    'download.features.report.title': 'On-site Reporting',
    'download.features.report.desc': 'Easily take photos and send flood information, keeping data updated second by second.',
    'download.trust.title': 'Absolute Safety & Free',
    'download.trust.desc': 'Non-profit project for the community. No ads, no tracking of personal data, completely free.',
    'download.stats.downloads': 'Downloads',
    'download.stats.reports': 'Community Reports',
    'download.stats.accuracy': 'Warning Accuracy',
    'download.ai.core.title': 'AI Brain: Smart Navigation & Route Optimization',
    'download.ai.core.desc': 'Proprietary AI algorithms analyze millions of traffic scenarios to select the shortest, driest, and safest route for you.',
    'download.tech.title': 'Core Technologies',
    'download.cta': "You don't need to wait for the city to change, you can start from your phone",

    // Feedback
    'feedback.hero': 'Your feedback could save someone from a flooded road',
    'feedback.type.bug': 'Bug Report',
    'feedback.type.idea': 'Ideal/Suggestion',
    'feedback.type.flood': 'Flood Report',
    'feedback.msg': 'We read every single feedback, because each one is a real story',

    // Achievements
    'achievements.hero': 'Development Milestones',
    'achievements.desc': 'Marking the steps from the very first ideas to the brilliant milestones achieved by Mekong Pathfinder.',
    'achievements.journey': 'Development Journey',
    'achievements.success': 'Brilliant Achievements',
    'achievements.gallery': 'Team Moments',

    // Footer
    'footer.about': 'Mekong Pathfinder is a tech project for urban management and sustainable development in the Mekong region.',
    'footer.builtBy': 'Built by students in Can Tho',
    'footer.links.title': 'Quick Links',
    'footer.app.title': 'Application',
    'footer.legal.title': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Partnership',
    'footer.vision': 'Vision 2030',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
