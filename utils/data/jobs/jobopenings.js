import { getFirestore, doc, getDoc, collection } from "firebase/firestore";


const openings = [

    {
        id: 1,
        name: 'Email Marketing Specialist',
        positions: '20',
        location: 'Remote',
        experience: '1 - 2 Years',
        jobType: 'Full Time',
        isCurrent: false,
        information: {
            title: "Email Marketing Specialist",
            jobDescription: "Your primary responsibility would be to generate leads for IT and digital marketing services from USA/Canada market.",

            requirements: ["Email Marketing Knowledge", "Analytical Skills", "Content Creation", "Segmentation and Targeting", "Automation", "Communication Skills", "Technical Skills"],

            responsibility: ["Lead Generation for SEO Services", "Lead Generation for Website development"],

            otherInformation: "At least 6 months of experience in email marketing and lead generation in the international market."
        }
    },
    {
        id: 2,
        name: 'Search Engine Optimization Executive',
        positions: '5',
        location: 'Remote',
        experience: '1 - 2 Years',
        jobType: 'Full Time',
        isCurrent: false,
        information: {
            title: "Search Engine Optimization Executive",
            jobDescription: "We are looking for SEO specialists who can handle end-to-end SEO projects.",

            requirements: ["Technical SEO", "Link Building:", "Analytics and Reporting", "Local SEO", "exercitation ullamco laboris", "Ethical Practices"],

            responsibility: ["Creating quality backlinks", "WordPress Website Updation", "On-Page SEO", "Off-Page SEO", "Conduct keyword research and competitive analysis", "Optimize website content for search engines.", "Collaborate with cross-functional teams to achieve SEO goals."],

            otherInformation: "We look forward to receiving your application and exploring the exciting possibilities of working together to achieve digital excellence."
        }
    }
]


export const getJobs = async () => {
    const events = await firebase.firestore().collection('job-postings')
    events.get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
        // console.log(tempDoc)
    })
}

export default openings;