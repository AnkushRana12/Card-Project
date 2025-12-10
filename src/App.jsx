import React from 'react'
import Card from './components/card';

const App = () => {
  const jobsopenings = [
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?pid=Api&P=0&h=180",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?pid=Api&P=0&h=180",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.N1GrvXlrCBYRjuPKChowigHaEK?pid=Api&P=0&h=180",
    name: "Meta",
    datePosted: "10 weeks ago",
    post: "Data Scientist",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$72/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.lrkfCMOBIreoENsesW4_9AHaIJ?pid=Api&P=0&h=180",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.nFmxRohKXckqXMrh7uy3CgHaHa?pid=Api&P=0&h=180",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part time",
    tag2: "Junior level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.6vG35pC3pcMANHZIPAT0twHaHa?pid=Api&P=0&h=180",
    name: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Architect",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.QZRUtEA8SeOZrUtbE7XCegHaHa?pid=Api&P=0&h=180",
    name: "Tesla",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.rI0cbJLzV4gV5nhvPhyf-gHaEK?pid=Api&P=0&h=180",
    name: "Stripe",
    datePosted: "2 days ago",
    post: "Product Manager",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.WwDvKVy6R0Z4cX_YcM1T2AHaH-?pid=Api&P=0&h=180",
    name: "Airbnb",
    datePosted: "8 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.VgJY3LnVFP4_cCv6sirtEgHaHa?pid=Api&P=0&h=180",
    name: "Spotify",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Part time",
    tag2: "Senior level",
    pay: "$55/hr",
    location: "Mumbai, India"
  }
];
console.log(jobsopenings)

  return (
    <div className='parent'>
      {jobsopenings.map(function(elem,idx){
        return <div key={idx}>
           <Card key={idx} company={elem.name} post={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} logo={elem.brandLogo} postname={elem.post} pay={elem.pay}/>
        </div>
      })}
    </div>
  )
}

export default App
