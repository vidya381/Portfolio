import Sidebar from '@/components/layout/Sidebar'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import OpenSource from '@/components/sections/OpenSource'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Fixed Left Sidebar */}
        <header className="lg:fixed lg:top-0 lg:flex lg:h-screen lg:w-[calc(40%-1rem)] lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
          <Sidebar />
        </header>

        {/* Scrollable Right Content */}
        <div className="lg:ml-[40%] lg:w-[60%]">
          <main className="lg:py-24">
            <About />
            <Experience />
            <Projects />
            <OpenSource />
          </main>
        </div>
      </div>
    </div>
  )
}
