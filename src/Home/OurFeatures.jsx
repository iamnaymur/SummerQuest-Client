import React from "react";
import { Slide } from "react-awesome-reveal";
import {
  FaDesktop,
  FaEdit,
  FaProjectDiagram,
  FaNetworkWired,
  FaRegFolderOpen,
  FaCheck,
} from "react-icons/fa";

const OurFeatures = () => {
  return (
    <div className="mt-10">
      <Slide className="text-2xl font-displayTwo text-center bold">
        Our Features
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 divide-x divide-orange-300">
        <div className="flex flex-col items-center p-5 md:p-10">
          <FaDesktop className="text-5xl mb-2" />
          <p className="text-xl text-center">Online Learning Resources</p>
          <p className="text-xs">
            Discover a vast array of engaging online learning resources,
            including interactive tutorials, multimedia lectures, and self-paced
            courses, providing an enriching and flexible educational experience.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 md:p-10">
          <FaEdit className="text-5xl mb-2" />
          <p className="text-xl text-center">
            Post-processing and Editing Classes
          </p>
          <p className="text-xs">
            Join our expert-led post-processing and editing classes, where
            you'll master the latest techniques in digital media manipulation,
            enhancing your creative skills to produce captivating content.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 md:p-10">
          <FaProjectDiagram className="text-5xl mb-2" />
          <p className="text-xl text-center">
            Access to Professional Equipment
          </p>
          <p className="text-xs">
            Get hands-on experience with top-of-the-line professional equipment,
            empowering you to unleash your artistic potential and produce
            high-quality projects during your time at our summer school.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 md:p-10">
          <FaNetworkWired className="text-5xl mb-2" />
          <p className="text-xl text-center">Small Class Sizes</p>
          <p className="text-xs">
            Experience personalized attention and a supportive learning
            environment with our small class sizes, fostering close interactions
            with instructors and fellow students to maximize your learning
            outcomes.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 md:p-10">
          <FaRegFolderOpen className="text-5xl mb-2" />
          <p className="text-xl text-center">Showcase Student Work</p>
          <p className="text-xs">
            Celebrate the talent and creativity of our students by showcasing
            their remarkable works through exhibitions and online galleries,
            inspiring others and creating a sense of achievement.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 md:p-10">
          <FaCheck className="text-5xl mb-2" />
          <p className="text-xl text-center">Social Activities</p>
          <p className="text-xs">
            Beyond the classroom, indulge in exciting social activities,
            fostering a vibrant community where you can forge lasting
            friendships and enjoy unforgettable summer experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
