import { useEffect } from "react";

import { useActiveSection } from "../context/ActiveSectionContext";

// Visible section names
const SECTION_IDS = ["about", "features", "demo", "pricing"];

// Creating custom hook for section observer
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

        // Sort by how of the section is visible
        const mostVisible = visibleSections.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        setActiveSection(mostVisible.target.id);
      },
      {
        threshold: 0.9, //when the 90% of the section is visible
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
