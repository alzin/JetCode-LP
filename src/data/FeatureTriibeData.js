
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

const FeatureTriibeData = [
    {
        "FeatureTitle": "Elevating Employee Engagement",
        "FeatureContent": "In today's hybrid work , communication and engagement are more vital than ever. Triibe provides a platform where every voice is heard, every achievement recognized, and every connection is meaningful. ",
        "FeatureImg": Feed1,
        "FeatureNavbar": [
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "News Feed",
                "title": "Dynamic News Feed for meaningful connections",
                "content": "Real-time updates, right when you need them. Engage, interact, and stay in the loop with every heartbeat of your organization.",
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
        "FeatureTitle": "Nurturing Employee Wellness",
        "FeatureContent": "Cultivating a workplace that prioritizes the health and happiness of its members, Triibe is dedicated to providing tools that support personal growth and a vibrant office culture.  ",
        "FeatureImg": Wh,
        "FeatureNavbar": [
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Wellness Challenges",
                "title": "Wellness tracking for tailored well-being",
                "content": "Engage in friendly contests that boost health and team unity. Achieve together, earn accolades, and share in the triumphs. ",
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
        "FeatureTitle": "Fostering Data-Driven Leadership",
        "FeatureContent": "Enhance your leadership with Triibe's comprehensive analytics for informed, data-driven decisions and effective strategic planning. ",
        "FeatureImg": Feed3,
        "FeatureNavbar": [
            {
                "icon": <IoAnalytics className='icon' />,
                "navItem": "Analytics Dashboard",
                "title": "Analytics Dashboard for strategic oversight",
                "content": "Navigate your strategy with a dashboard that brings data to life, showing engagement and wellness trends for strategic planning ",
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


export default FeatureTriibeData