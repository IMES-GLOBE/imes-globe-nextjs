"use client"
import React, { useState } from 'react';
import HeadComponent from '@/dependencies/components/Head/HeadComponent'
import Image from 'next/image'
import styles from './styles.module.css'
import useWindowSize from '@/dependencies/windowsize';
import GradientCard from '@/dependencies/gradientCard'

export default function Home() {
  return (
    <main className={styles.container}>
      <HeadComponent />
      <HomeCard />
    </main>
  )
}

function HomeCard(params: any) {
  const size = useWindowSize();
  return (
    <div>
      {/* <div className={styles.container}>
      </div> */}
      <NewCourseForm />


    </div>
  )
}







const categories__ = ["Word Analysis", "Deliverance", "Growth", "Prayer", "Empowerment", "Development", "Category1", "Category2", "Category3", "Category4", "Category5", "Category6", "Category7", "Category8", "Category9", "Category10"];

const initialCredits = {
  instructor: "",
  courseCreator: "",
  contributors: [],
  references: []
};


const getNew_OTT = () => {
  const unid = Date.now() * 1000 + Math.random() * 1000;
  const uniqueID = unid.toString(16).replaceAll(/\./g, "").padEnd(14, "0");
  return uniqueID
}


const NewCourseForm = () => {
  const [common_, setCommon] = useState("");
  const [level, setLevel] = useState("1");
  const [type, setType] = useState("intermediate");
  const [requiredStatus, setRequiredStatus] = useState("Progressive");
  const [description, setDescription] = useState("");
  const [resolutionLabel, setResolutionLabel] = useState("4k");
  const [isHDR, setIsHDR] = useState(false);
  const [numberOfEpisodes, setNumberOfEpisodes] = useState(0);
  const [credits, setCredits] = useState(initialCredits);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleGenerateData = () => {
    // MODIFY THIS AFTER EVERY CHANGE
    const lastIndex = 133;
    const fs_names = "kl_";

    const common = common_.slice(3).replace(/_/g, " ");
    const initialCover = `product/subcribed/organized/${common_}/${fs_names}`;
    const initialUrl = `product/subcribed/organized/${common_}/${fs_names}vid_`;
    const initialPrimaryCover = `product/subcribed/organized/${common_}/primaryCover.jpg`;

    const newDataArray = Array.from({ length: numberOfEpisodes }, (_, index) => {
      const episodeNumber = index + 1;
      const cover = `${initialCover}${episodeNumber}.jpg`;
      const url = `${initialUrl}${episodeNumber}.mp4`;
      const title = `${common} ${episodeNumber}`;

      return {
        id: `${episodeNumber + lastIndex}`,
        idd: `${getNew_OTT()}${episodeNumber}`,
        title,
        common,
        duration: 1800,
        time: "2024-04-25T12:57:00Z",
        cover,
        level,
        url,
        primaryCover: initialPrimaryCover,
        category: JSON.stringify(selectedCategories),
        type,
        requiredStatus,
        description,
        reviews: "[]",
        credits: JSON.stringify(credits),
        isHDR,
        resolutionLabel,
        episodeNumber,
      };
    });

    console.log(newDataArray);
    const newDataArrayJson = JSON.stringify(newDataArray);

    // Copy newDataArrayJson to clipboard
    navigator.clipboard.writeText(newDataArrayJson)
      .then(() => {
        console.log("Data copied to clipboard successfully");
      })
      .catch((error) => {
        console.error("Error copying data to clipboard:", error);
      });
    // Send newDataArray to server-side for further processing
  };

  const { label } = styles;

  return (
    <div>
      <label className={label}>
        Common:
        <input type="text" value={common_} onChange={(e) => setCommon(e.target.value)} />
      </label>

      <label className={label}>
        Level:
        {/* <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} /> */}
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="CDC">CDC</option>
          <option value="IS">IS</option>
        </select>
      </label>

      <label className={label}>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <label className={label}>
        Required Status:
        <select value={requiredStatus} onChange={(e) => setRequiredStatus(e.target.value)}>
          <option value="Progressive">Progressive</option>
          <option value="Suggested">Suggested</option>
          <option value="Recommended">Recommended</option>
        </select>
      </label>

      <label className={label}>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <label className={label}>
        Resolution Label:
        <select value={resolutionLabel} onChange={(e) => setResolutionLabel(e.target.value)}>
          <option value="8k">8k</option>
          <option value="4k">4k</option>
          <option value="2k">2k</option>
          <option value="HD">HD</option>
          <option value="1080p">1080p</option>
          <option value="720p">720p</option>
          <option value="480p">480p</option>
          <option value="360p">360p</option>
          <option value="240p">240p</option>
        </select>
      </label>

      <label className={label}>
        Is HDR:
        <input type="checkbox" checked={isHDR} onChange={(e) => setIsHDR(e.target.checked)} />
      </label>

      <label className={label}>
        Number of Episodes:
        <input type="number" value={numberOfEpisodes} onChange={(e) => setNumberOfEpisodes(parseInt(e.target.value))} />
      </label>

      <div>
        <p>Select Categories:</p>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedCategories([...selectedCategories, category]);
                } else {
                  setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
                }
              }}
            />
            {category}
          </label>
        ))}
      </div>
      <button onClick={handleGenerateData}>Generate Data</button>
    </div>
  );
};





const categories = [
  "Word Analysis",
  "Deliverance",
  "Growth",
  "Prayer",
  "Empowerment",
  "Development",
  "Healing",
  "Spirituality",
  "Leadership",
  "Meditation",
  "Transformation",
  "Relationships",
  "Self-Discovery",
  "Financial Wisdom",
  "Mindfulness",
  "Health and Wellness",
  "Personal Growth",
  "Creativity",
  "Success Strategies",
  "Motivation",
  "Inspiration",
  "Career Development",
  "Time Management",
  "Communication Skills",
  "Problem Solving",
  "Emotional Intelligence",
  "Resilience",
  "Goal Setting",
  "Stress Management",
  "Decision Making",
  "Team Building",
  "Innovation",
  "Entrepreneurship",
  "Positive Thinking",
  "Happiness",
  "Mindset",
  "Self-Care",
  "Confidence Building",
  "Productivity",
  "Work-Life Balance",
  "Learning Strategies",
  "Critical Thinking",
  "Creativity",
  "Adaptability",
  "Networking",
  "Leadership Development",
  "Public Speaking",
  "Integrity",
  "Ethics",
  "Empathy",
  "Generosity",
  "Courage",
  "Gratitude",
  "Forgiveness",
  "Humility",
  "Optimism",
  "Persistence",
  "Problem-Solving",
  "Respect",
  "Responsibility",
  "Teamwork",
  "Tolerance",
  "Trustworthiness",
  "Wisdom",
  "Theological Foundations",
  "Biblical Studies",
  "Doctrine and Belief",
  "Spiritual Formation",
  "Christian Living",
  "Mysteries of Faith",
  "Historical Theology",
  "Spiritual Growth and Transformation",
  "Spiritual Laws and Principles",
  "Freedom and Liberation",
  "Empowerment and Vitality",
  "Theology of the Holy Spirit",
  "Practical Spirituality",
  "Personal Development",
  "Productivity Hacks",
  "Time Management Strategies",
  "Goal Setting and Achievement",
  "Organization and Planning",
  "Self-discipline and Accountability",
  "Church Leadership and Administration",
  "Biblical Studies (Church Governance)",
  "Organizational Management",
  "Church Ministry and Operations",
  "Team Building and Collaboration",
  "Spiritual Formation (Leadership)",
  "Conflict Resolution and Mediation",
  "Psychology of Belief",
  "Cultural Studies",
  "Religious Studies",
  "Philosophy",
  "Sociology of Belief",
  "Cognitive Science",
  "Anthropology",
  "Ethics and Morality",
  "Spiritual Growth",
  "Transformation",
  "Biblical Studies",
  "Christian Living",
  "Spiritual Laws",
  "Spiritual Principles",
  "Financial Management",
  "Time Management",
  "Talent Management",
  "Environmental Stewardship",
  "Biblical Studies",
  "Spiritual Formation",
  "Christian Living",
  "Personal Growth",
  "Church Ministry",
  "Servant Leadership",
  "Scripture Application",
  "Discipleship Practices",
  "Biblical Studies",
  "Spiritual Growth",
  "Christian Living",
  "Kingdom Principles",
  "Faith Application",
  "Service and Ministry",
  "Community Engagement",
  "Transformational Living",
];


// export default NewCourseForm;












// {
//   "id": "1",
//   "idd": "14y4fhfedef",
//   "title": "FONDEMENT DE LA FOI 1",
//   "duration": 1800,
//   "common": "FONDEMENT DE LA FOI",
//   "time": "2024-02-11T15:30:00Z",
//   "cover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "level": "1",
//   "url": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/VTS_01_1.VOB",
//   "primaryCover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "category": "[\"empowerment\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 1
// },
// {
//   "id": "2",
//   "idd": "14y4fhfedef2",
//   "title": "FONDEMENT DE LA FOI 2",
//   "duration": 1800,
//   "common": "FONDEMENT DE LA FOI",
//   "time": "2024-02-11T15:30:00Z",
//   "cover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "level": "1",
//   "url": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/VTS_02_1.VOB",
//   "primaryCover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "category": "[\"empowerment\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 2
// },
// {
//   "id": "3",
//   "idd": "14y4fhfedef3",
//   "title": "FONDEMENT DE LA FOI 3",
//   "duration": 1800,
//   "common": "FONDEMENT DE LA FOI",
//   "time": "2024-02-12T15:30:00Z",
//   "cover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "level": "1",
//   "url": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/VTS_03_1.VOB",
//   "primaryCover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "category": "[\"empowerment\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 3
// },
// {
//   "id": "4",
//   "idd": "14y4fhfedef4",
//   "title": "FONDEMENT DE LA FOI 4",
//   "duration": 1800,
//   "common": "FONDEMENT DE LA FOI",
//   "time": "2024-02-13T15:30:00Z",
//   "cover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "level": "1",
//   "url": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/VTS_04_1.VOB",
//   "primaryCover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "category": "[\"empowerment\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 4
// },
// {
//   "id": "5",
//   "idd": "14y4fhfedef5",
//   "title": "FONDEMENT DE LA FOI 5",
//   "duration": 1800,
//   "common": "FONDEMENT DE LA FOI",
//   "time": "2024-02-14T15:30:00Z",
//   "cover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "level": "1",
//   "url": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/VTS_05_1.VOB",
//   "primaryCover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "category": "[\"empowerment\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 5
// },
// {
//   "id": "6",
//   "idd": "14y4fhfedef6",
//   "title": "FONDEMENT DE LA FOI 6",
//   "duration": 1800,
//   "common": "FONDEMENT DE LA FOI",
//   "time": "2024-02-14T15:30:00Z",
//   "cover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "level": "1",
//   "url": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/VTS_06_1.VOB",
//   "primaryCover": "product/subcribed/inventory/A1_FONDEMENT_DE_LA_FOI/FONDEMENT_DE_LA_FOI.png",
//   "category": "[\"empowerment\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 6
// },
// {
//   "id": "16",
//   "idd": "14y4ffrhfef16",
//   "title": "d",
//   "duration": 6,
//   "common": "g",
//   "time": "2024-02-15T15:30:00Z",
//   "cover": "coverImages/elora-allen-jdo8YcZwohk-unsplash.jpg",
//   "level": "2",
//   "url": "product/subcribed/organized/A1_WORD_FOUNDATION/wf_vid_1.mp4",
//   "primaryCover": "product/subcribed/organized/A1_WORD_FOUNDATION/word_foundation_primaryCover.png",
//   "category": "[\"growth\", \"learning\", \"development\"]",
//   "type": "intermediate",
//   "requiredStatus": "progressive",
//   "description": "This course is going to be a blessing to your lives, foolow to the brim and you lives would never remain the same",
//   "reviews": "[]",
//   "credits": "[]",
//   "isHDR": false,
//   "resolutionLabel": "1080p",
//   "episodeNumber": 1
// }