import React from "react";
import Card from "./components/Card";


const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://www.technovaworld.com/Themes/Technova/Content/images/technova-logo-new.png",
      companyName: "TechNova",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: "$20/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://img.freepik.com/premium-vector/web-compan-logo_556848-50.jpg",
      companyName: "CodeCraft",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Senior-level",
      pay: "$35/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://a.storyblok.com/f/41541/326x209/f201a29e49/cloudsphere-2.jpg/m/filters:quality/(60/)",
      companyName: "CloudSphere",
      datePosted: "3 weeks ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$28/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://media.licdn.com/dms/image/v2/D560BAQHx0devGg1Rag/company-logo_200_200/company-logo_200_200/0/1690129661716?e=2147483647&v=beta&t=afcHbpWYtAOGN8xh3eVc83LRVCazo2z8_CMVre_xasI",
      companyName: "NextGen Solutions",
      datePosted: "10 days ago",
      post: "QA Tester",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: "$18/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://media.licdn.com/dms/image/v2/D5622AQEVdqyBsasgSg/feedshare-shrink_800/feedshare-shrink_800/0/1712203493400?e=2147483647&v=beta&t=29R0RpGvzeA3AMTfMqnWSRihDYceyn1gFC8SRxkWsik",
      companyName: "WebWorks",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$40/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://strapi-global-sites.s3.amazonaws.com/3a685450-0693-4229-890b-f4f709129047.png",
      companyName: "AppHive",
      datePosted: "2 weeks ago",
      post: "Android Developer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$30/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!7Ia4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffac33f40-9e59-43ea-a7c3-9aa1c2f44e3a_1294x765.png",
      companyName: "DataLab",
      datePosted: "6 days ago",
      post: "Data Analyst",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: "$22/hr",
      location: "Kolkata, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYZHsXAMQ6DRcnFMA-r03lmpFaUOXvSHoDA&s",
      companyName: "PixelPro",
      datePosted: "9 days ago",
      post: "Graphic Designer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$34/hr",
      location: "Ahmedabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvfdARCmYQSV1XyhzDzrJbLoUlWHuLCoGgA&s",
      companyName: "TechBridge",
      datePosted: "1 month ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$38/hr",
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICIDX8YyLt81uAn9bhnBum06zuPjlj6LJmw&s",
      companyName: "SoftMatrix",
      datePosted: "12 days ago",
      post: "Full Stack Developer",
      tag1: "Part-time",
      tag2: "Senior-level",
      pay: "$42/hr",
      location: "Nagpur, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (ele,idx) {
        console.log(idx);
        
        return <div key={idx}>
          <Card company={ele.companyName} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} datePosted={ele.datePosted} pay={ele.pay} location={ele.location} brandLogo={ele.brandLogo}/>
          </div>
      })}
    </div>
  );
};

export default App;
