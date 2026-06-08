import { ViewMode } from '../types'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SkillsSection from '../components/sections/SkillsSection'
import SystemDesignSection from '../components/sections/SystemDesignSection'
import EngineeringProofSection from '../components/sections/EngineeringProofSection'

interface Props { viewMode: ViewMode }

export default function Home({ viewMode }: Props) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection viewMode={viewMode} />
      <SkillsSection />
      <SystemDesignSection />
      <EngineeringProofSection />
    </>
  )
}
