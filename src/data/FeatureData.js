
// images
import Feed1 from "../assets/images/feed-1.png"
import Feed3 from "../assets/images/feed-3.png"
import Wh from "../assets/images/Wh.png"



// videos
import Newsfeed from "../assets/videos/newsfeed.webm"
import Feedback from "../assets/videos/feedback.webm"
import Profiles from "../assets/videos/profiles.webm"
import Recognition from "../assets/videos/recognition.webm"
import AnalyticsDashboard from "../assets/videos/analytics_dashboard.webm"
import RealtimeAnalytics from "../assets/videos/realtime_analytics.webm"
import WellnessChallenges from "../assets/videos/wellness_challenges.webm"
import WellnessTracking from "../assets/videos/wellness_tracking.webm"

// icons





import { IoAnalytics } from "react-icons/io5"

const FeaturesData = [
    {
        "id": 0,
        "indicatorWidth": 200,
        "FeatureTitle": "Instantly Transform Your Ideas into Code with Our AI-Powered Tool",
        "FeatureContent": "Gone are the days of sifting through countless forums and documentation to find coding solutions. Input your system requirements, whether for web, mobile, or any platform, and our AI will deliver step-by-step code implementation tailored to your needs. ",
        "FeatureImg": Feed1,
        "FeatureNavbar": [
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "News Feed",
                "title": "",
                "content": "Imagine being able to materialize your project ideas into executable code within minutes. Our AI analyzes your requirements and crafts precise, efficient, and ready-to-use code snippets. It's like having an expert developer at your fingertips, ready to tackle any challenge you throw at it.",
                "video": Newsfeed,
                "isActive": true,
                "id": 0
            },
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Recognition",
                "title": "Recognitions for a motivated workforce",
                "content": "Elevate workplace morale. Celebrate wins, big or small, and foster an environment of appreciation. ",
                "video": Recognition,
                "isActive": false,
                "id": 1

            }, {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Feedback",
                "title": "Feedback for actionable insights",
                "content": "Harness the power of prompt surveys and anonymous feedback to capture genuine employee sentiments and guide strategic decisions effectively. ",
                "video": Feedback,
                "isActive": false,
                "id": 2

            }, {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Profiles",
                "title": "Employee profiles for enhanced connectivity",
                "content": "Explore beyond names; uncover colleagues' skills, backgrounds, and interests, fostering stronger, more personal bonds in your organization. ",
                "video": Profiles,
                "isActive": false,
                "id": 3

            },
        ],
    },

    {
        "id": 1,
        "indicatorWidth": 300,
        "FeatureTitle": "Accelerate Your Project Timeline from Months to Days",
        "FeatureContent": "Speed up your development process dramatically. With our tool, you eliminate the bottleneck of research and troubleshooting, allowing you to focus on creativity and innovation.",
        "FeatureImg": Wh,
        "FeatureNavbar": [
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Wellness Challenges",
                "title": "",
                "content": "Projects that used to take months of back-and-forth, debugging, and consulting various resources can now be streamlined into a matter of days. Our AI's intuitive understanding of your needs translates into faster development cycles and quicker market entry. ",
                "video": WellnessChallenges,
                "isActive": true,
                "id": 0
            },
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Wellness Tracking",
                "title": "Wellness tracking for tailored well-being",
                "content": "Track your well-being journey effortlessly. Every step, every sip, every stat—mapped out for your health milestones. ",
                "video": WellnessTracking,
                "isActive": false,
                "id": 1

            }
        ],
    }, {
        "id": 2,
        "indicatorWidth": 300,
        "FeatureTitle": "Empower Your Team with AI-Driven Efficiency",
        "FeatureContent": "Enable your team to do more with less. Our tool is designed to augment the capabilities of your developers, allowing them to produce more while reducing the risk of burnout.",
        "FeatureImg": Feed3,
        "FeatureNavbar": [
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Analytics Dashboard",
                "title": "",
                "content": " By automating the tedious part of programming, your team can focus on strategic tasks. This not only boosts productivity but also morale, as developers can see their work come to life faster and spend more time on creative aspects of project development.",
                "video": AnalyticsDashboard,
                "isActive": true,
                "id": 0
            },
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Real-Time Metrics ",
                "title": "Real-Time Metrics for attuned decision-making",
                "content": "Stay updated with current metrics to understand your organization's dynamics, ensuring decisions align with your team's needs.  ",
                "video": RealtimeAnalytics,
                "isActive": false,
                "id": 1

            }
        ],
    },

]


export default FeaturesData