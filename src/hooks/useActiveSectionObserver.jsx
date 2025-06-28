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
        threshold: 0.6, //when the 60% of the section is visible
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

// import { useEffect } from "react";
// import { useActiveSection } from "../context/ActiveSectionContext";

// const SECTIONS = [
//   { id: "about", threshold: 0.6 },
//   { id: "features", threshold: 0.5 },
//   { id: "demo", threshold: 0.7 },
//   { id: "pricing", threshold: 0.4 },
// ];

// export const useActiveSectionObserver = () => {
//   const { setActiveSection } = useActiveSection();

//   useEffect(() => {
//     const observers = [];

//     SECTIONS.forEach(({ id, threshold }) => {
//       const section = document.getElementById(id);
//       if (!section) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveSection(id);
//           }
//         },
//         { threshold }
//       );

//       observer.observe(section);
//       observers.push({ observer, section });
//     });

//     return () => {
//       observers.forEach(({ observer, section }) => {
//         observer.unobserve(section);
//       });
//     };
//   }, [setActiveSection]);
// };
