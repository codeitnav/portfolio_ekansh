import { FocusCards } from "@/components/ui/focus-cards";
import stanford from "../../public/stanford.png";
import yale from "../../public/yaleImg.jpg";

const CertificationsSection = () => {
  const cards = [
    {
      title: "Introduction to Statistics",
      desc: "Stanford Online",
      src: stanford,
      link: "https://coursera.org/share/f4b54efd128721c2f874bf3859bf7305"
    },
    {
      title: "Financial Market",
      desc: "Yale Online [Ongoing]",
      src: yale,
    },
    {
      title: "Machine Learning",
      desc: "Stanford Online [Ongoing]",
      src: stanford,
    },
  ];

  return (
    <div> 
      <section className="text-black dark:text-white" id="certifications">
        <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-8">
          <div className="text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Certifications
            </h2>
          </div>
        </div>
      </section>
      <FocusCards cards={cards} />
    </div>
  );
}

export default CertificationsSection;