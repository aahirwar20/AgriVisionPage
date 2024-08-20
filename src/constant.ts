// data.ts

import profile from './assests/mentorProfile.png';
import linkedin from './assests/linkedin.png';
import twitter from './assests/twitter.png';
import youtube from './assests/youtube.png';
import facebook from './assests/facebook.png';
import { MentorData, Feedback, TopMentor, CourseType } from './interfaces';

// Mentor Data
export const mentorData: MentorData = {
  name: "Chatur Ramlingam",
  rate: 4.1,
  about: "Lorem ipsum is simply dummy text of the crinting and typesetting industry. Lorem psum has been the industry's shandord dummy text ever",
  profile: profile,
  social: [
    {
      name: "youtube",
      icon: youtube,
      link: ''
    },
    {
      name: "facebook",
      icon: facebook,
      link: ''
    },
    {
      name: "twitter",
      icon: twitter,
      link: ''
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: ''
    },
  ]
};

// About Text
export const AboutText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

// Mentorship Feedback
export const MentorshipFeedback: Feedback[] = [
  {
    name: "Raju Rashtogi",
    profile: profile,
    rate: 4.8,
    monthPassed: 4,
    feedbackText: "Lorem ipsum is simply dummy text of the crinting and typesetting industry. Lorem psum has been the industry's shandord dummy text ever since the 1500s, when con unimeamprinter to a galley of type and acrambled to make at",
  },
  {
    name: "Raju Rashtogi",
    profile: profile,
    rate: 4.8,
    monthPassed: 4,
    feedbackText: "Lorem ipsum is simply dummy text of the crinting and typesetting industry. Lorem psum has been the industry's shandord dummy text ever since the 1500s, when con unimeamprinter to a galley of type and acrambled to make at",
  },
  {
    name: "Raju Rashtogi",
    profile: profile,
    rate: 4.8,
    monthPassed: 4,
    feedbackText: "Lorem ipsum is simply dummy text of the crinting and typesetting industry. Lorem psum has been the industry's shandord dummy text ever since the 1500s, when con unimeamprinter to a galley of type and acrambled to make at",
  },
];

// Top Mentors Data
export const topMentorsData: TopMentor[] = [
  {
    name: "Chatur Ramlingam",
    department: "FSSAI",
    profile: profile,
    exprience: 10,
    topVoice: true,
    color: 'bg-purple-100',
  },
  {
    name: "Chatur Ramlingam",
    department: "FSSAI",
    profile: profile,
    exprience: 10,
    topVoice: true,
    color: 'bg-green-100',
  },
  {
    name: "Chatur Ramlingam",
    department: "FSSAI",
    profile: profile,
    exprience: 10,
    topVoice: true,
    color: 'bg-yellow-100',
  },
  {
    name: "Chatur Ramlingam",
    department: "FSSAI",
    profile: profile,
    exprience: 10,
    topVoice: true,
    color: "bg-pink-100",
  }
];

// Courses Data
export const coursesData: CourseType[] = [
  {
    name: "Agiculture",
    duration: 49,
    price: 1000,
    discount: 40,
    bookingPrice: 600,
    color: "bg-pink-200",
  },
  {
    name: "Career Membership",
    duration: 49,
    price: 1000,
    discount: 40,
    bookingPrice: 600,
    color: "bg-green-200",
  },
  {
    name: "Research",
    duration: 49,
    price: 1000,
    discount: 40,
    bookingPrice: 600,
    color: "bg-indigo-200",
  },
];
