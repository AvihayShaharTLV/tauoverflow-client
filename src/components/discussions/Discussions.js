import Discussion from "./Discussion";
import DiscussionsList from './DiscussionsList'
import { useState } from "react";

const discussions = [
    {
        id: 0,
        user: {
            name: "sara avny",
        },
        title: "אחת שתיים בדיקה?",
        text: "שלוש ארבע רות עבור?",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3', 'user4'],
        replies: [
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello2',
                user: {
                    name: "tony stark",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello3',
                user: {
                    name: "dudidu",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 1,
        user: {
            name: "donkie shot",
        },
        title: "האם כדור הארץ משולש?",
        text: "ראיתי באינטרנט תיאוריה על כך שכדור הארץ משולש וזה נשמע לי הגיוני מאוד. מה עושים?",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3'],
        replies: [
            {
                text: 'abcde f u and your mom and yoursister',
                user: {
                    name: "mi mi the sheep",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: "what's up nigggggggas?",
                user: {
                    name: "unknown",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 2,
        user: {
            name: "sara avny",
        },
        title: "המחשב שלי לא זז וזה כואב לי לראות את זה?",
        text: "מוכר אותו לילד קטן שלא מבין כלום מבחשבים",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3', 'user4'],
        replies: [
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello2',
                user: {
                    name: "tony stark",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello3',
                user: {
                    name: "dudidu",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 3,
        user: {
            name: "donkie shot",
        },
        title: "האם זה קל?",
        text: "גיליתי שזה ממש ממש קל ואתה בעצם כל כך נוב שאתה לא יודע לפתור את זה",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3'],
        replies: [
            {
                text: 'abcde f u and your mom and yoursister',
                user: {
                    name: "mi mi the sheep",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: "what's up nigggggggas?",
                user: {
                    name: "unknown",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 4,
        user: {
            name: "sara avny",
        },
        title: "מה קורה ?",
        text: "אנחנו כבר לא מדברים כמו שדיברנו פעםםםםםםםםםםםםםםםםםםםםם!",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3', 'user4'],
        replies: [
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello2',
                user: {
                    name: "tony stark",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello3',
                user: {
                    name: "dudidu",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 5,
        user: {
            name: "donkie shot",
        },
        title: "לא נראה לי שזה קורס אמיתי",
        text: "יש דיבור על זה שזה קורס פיקטיבי והוא לא באמת קיים. מישהו יכול לאשר את זה?",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3'],
        replies: []
    },
    {
        id: 6,
        user: {
            name: "sara avny",
        },
        title: " איזה יום היום?",
        text: "",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3', 'user4'],
        replies: [
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello1',
                user: {
                    name: "mika pika",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello2',
                user: {
                    name: "tony stark",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'hello3',
                user: {
                    name: "dudidu",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 7,
        user: {
            name: "ziv hausler",
        },
        title: "השותף שלי לפרויקט לא משתף פעולה יותר מדי.",
        text: "איך אומרים לו שאני רוצה לעשות עם שירה?",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3', 'user4'],
        replies: [
            {
                text: 'פשוט תגיד לו שהוא אפס',
                user: {
                    name: "shay",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'תאסוף חתימות ותגיש לראש החוג',
                user: {
                    name: "matan signatures",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'סליחה יש לי שיאילה',
                user: {
                    name: "muhamad zuabi",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: 'אחינו... מה יהיה?',
                user: {
                    name: "tamir shwartz",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
    {
        id: 8,
        user: {
            name: "donkie shot",
        },
        title: "אחד המבחנים הקלים אברררררררררררררר",
        text: "מסכים",
        date: new Date().toUTCString().replace('GMT', ""),
        likes: ['user1', 'user2', 'user3'],
        replies: [
            {
                text: 'abcde f u and your mom and yoursister',
                user: {
                    name: "mi mi the sheep",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
            {
                text: "what's up nigggggggas?",
                user: {
                    name: "unknown",
                },
                date: new Date().toUTCString().replace('GMT', ""),
                likes: ['user1', 'user2', 'user3'],
            },
        ]
    },
]

const Discussions = () => {
    const [selectedDiscussion, setSelectedDiscussion] = useState(null);
    
    return (
        <div className="flex flex-col h-screen-1/2 md:flex-row p-3">
            <div className="flex sm:flex-auto m-2 md:w-1 shadow dark:bg-gray-800 rounded-lg">
                <DiscussionsList discussions={discussions} setSelectedDiscussion={setSelectedDiscussion} />
            </div>
            {selectedDiscussion && <div className="flex sm:flex-auto dark:bg-gray-800 m-2 md:w-80 rounded-lg shadow">
                <Discussion selectedDiscussion={selectedDiscussion} setSelectedDiscussion={setSelectedDiscussion} selectedDiscussion={selectedDiscussion} />
            </div>}
        </div>
    )
}
export default Discussions