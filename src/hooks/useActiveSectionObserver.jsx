// ==================== 3rd-party Imports ====================
import { useEffect } from "react";

// ==================== Context ====================
import { useActiveSection } from "../context/ActiveSectionContext";

// ==================== Section IDs ====================
// List of section IDs to observe for active state
const SECTION_IDS = ["about", "features", "demo", "pricing"];

// ==================== Custom Hook ====================
// Observes which section is visible and updates active section context
export const useActiveSectionObserver = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length === 0) {
          setActiveSection("");
          return;
        }

        // Sort by how much of the section is visible
        const mostVisible = visibleSections.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        setActiveSection(mostVisible.target.id);
      },
      {
        threshold: 0.3, // when 30% of the section is visible
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);
};
