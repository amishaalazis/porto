import re

with open('components/Projects.tsx', 'r') as f:
    content = f.read()

translations = {
    # Categories
    '"Enterprise Internal Tool"': '{ en: "Enterprise Internal Tool", id: "Alat Internal Perusahaan" }',
    '"Booking Platform"': '{ en: "Booking Platform", id: "Platform Pemesanan" }',
    '"Community Education Platform"': '{ en: "Community Education Platform", id: "Platform Edukasi Komunitas" }',
    '"Corporate Website"': '{ en: "Corporate Website", id: "Situs Perusahaan" }',
    '"Enterprise Application"': '{ en: "Enterprise Application", id: "Aplikasi Enterprise" }',
    '"GIS Application"': '{ en: "GIS Application", id: "Aplikasi GIS" }',
    '"Public Information Website"': '{ en: "Public Information Website", id: "Situs Informasi Publik" }',
    '"Public Service Platform"': '{ en: "Public Service Platform", id: "Platform Layanan Publik" }',

    # Periods
    '"2025 - Present"': '{ en: "2025 - Present", id: "2025 - Sekarang" }',
    '"2024 - 2025"': '{ en: "2024 - 2025", id: "2024 - 2025" }',
    '"2025"': '{ en: "2025", id: "2025" }',
    '"2024"': '{ en: "2024", id: "2024" }',
    '"2023"': '{ en: "2023", id: "2023" }',

    # Roles
    '"Frontend Engineer"': '{ en: "Frontend Engineer", id: "Frontend Engineer" }',
    '"Full-Stack Developer"': '{ en: "Full-Stack Developer", id: "Full-Stack Developer" }',
    '"Freelance Web Developer"': '{ en: "Freelance Web Developer", id: "Freelance Web Developer" }',

    # Team Size
    '"2 Developers"': '{ en: "2 Developers", id: "2 Developer" }',
    '"1 Developer"': '{ en: "1 Developer", id: "1 Developer" }',
    '"1 Developers"': '{ en: "1 Developers", id: "1 Developer" }',
    '"3 Developers"': '{ en: "3 Developers", id: "3 Developer" }',
}

# Descriptions
descriptions = {
    '"An internal CRM and sales management platform designed to centralize business operations, sales activities, customer management, and revenue reporting across multiple teams."': '{ en: "An internal CRM and sales management platform designed to centralize business operations, sales activities, customer management, and revenue reporting across multiple teams.", id: "Platform CRM dan manajemen penjualan internal yang dirancang untuk memusatkan operasi bisnis, aktivitas penjualan, manajemen pelanggan, dan pelaporan pendapatan di berbagai tim." }',
    '"A booking and reservation platform developed to simplify villa reservations, add-on services, and administrative workflows."': '{ en: "A booking and reservation platform developed to simplify villa reservations, add-on services, and administrative workflows.", id: "Platform pemesanan dan reservasi yang dikembangkan untuk menyederhanakan pemesanan vila, layanan tambahan, dan alur kerja administratif." }',
    '"A community-driven educational platform developed to support literacy initiatives, educational activities, and knowledge sharing for local communities in Bandung."': '{ en: "A community-driven educational platform developed to support literacy initiatives, educational activities, and knowledge sharing for local communities in Bandung.", id: "Platform pendidikan berbasis komunitas yang dikembangkan untuk mendukung inisiatif literasi, kegiatan pendidikan, dan berbagi pengetahuan untuk komunitas lokal di Bandung." }',
    '"A corporate website and blog platform developed to improve digital presence and support content-driven marketing strategies."': '{ en: "A corporate website and blog platform developed to improve digital presence and support content-driven marketing strategies.", id: "Situs web perusahaan dan platform blog yang dikembangkan untuk meningkatkan kehadiran digital dan mendukung strategi pemasaran berbasis konten." }',
    '"A corporate profile and content platform developed with a strong focus on maintainability, scalability, and search engine visibility."': '{ en: "A corporate profile and content platform developed with a strong focus on maintainability, scalability, and search engine visibility.", id: "Profil perusahaan dan platform konten yang dikembangkan dengan fokus kuat pada kemudahan pemeliharaan, skalabilitas, dan visibilitas mesin pencari." }',
    '"An enterprise digital archive platform developed to support historical record management, document retrieval, certification tracking, and personnel information management."': '{ en: "An enterprise digital archive platform developed to support historical record management, document retrieval, certification tracking, and personnel information management.", id: "Platform arsip digital perusahaan yang dikembangkan untuk mendukung manajemen rekaman sejarah, pengambilan dokumen, pelacakan sertifikasi, dan manajemen informasi personel." }',
    '"A geospatial analytics platform developed to support operational monitoring through maps, weather information, heatmaps, and spatial visualization."': '{ en: "A geospatial analytics platform developed to support operational monitoring through maps, weather information, heatmaps, and spatial visualization.", id: "Platform analitik geospasial yang dikembangkan untuk mendukung pemantauan operasional melalui peta, informasi cuaca, peta panas (heatmap), dan visualisasi spasial." }',
    '"An interactive GIS platform integrating ArcGIS services to visualize zoning information and spatial planning data."': '{ en: "An interactive GIS platform integrating ArcGIS services to visualize zoning information and spatial planning data.", id: "Platform GIS interaktif yang mengintegrasikan layanan ArcGIS untuk memvisualisasikan informasi zonasi dan data tata ruang." }',
    '"A public-facing website developed to promote historical information, tourism activities, and educational content related to the Gunung Padang archaeological site."': '{ en: "A public-facing website developed to promote historical information, tourism activities, and educational content related to the Gunung Padang archaeological site.", id: "Situs web publik yang dikembangkan untuk mempromosikan informasi sejarah, kegiatan pariwisata, dan konten pendidikan terkait situs arkeologi Gunung Padang." }',
    '"A village information portal developed to provide public information, announcements, local news, and community activities."': '{ en: "A village information portal developed to provide public information, announcements, local news, and community activities.", id: "Portal informasi desa yang dikembangkan untuk menyediakan informasi publik, pengumuman, berita lokal, dan kegiatan masyarakat." }'
}

translations.update(descriptions)

# Replace scalar strings
for k, v in translations.items():
    content = content.replace(k, v)

# For highlights array, we can just do some regex replacements for the highlight arrays, 
# but they are multi-line. It's safer to just let me use multi_replace for those!
# Wait, let me just write the highlights manually since they are only 10 arrays.
# It is actually easier to just let Python write a new projectData section!

with open('components/Projects.tsx', 'w') as f:
    f.write(content)
