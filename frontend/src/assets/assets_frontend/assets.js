import appointment_img from './appointment_imgs.png'
import header_img from './HeaderDoctor.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doct1.jpg'
import doc2 from './doct2.png'
import doc3 from './doct3.jpg'
import doc4 from './doct4.jpg'
import doc5 from './doct5.jpg'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]
export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Gupta',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Rajesh is known for his expertise in preventive healthcare and primary treatment for common illnesses.',
        fees: 500,
        address: {
            line1: 'Sector 12, Dwarka',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neha Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Neha specializes in women’s health, ensuring compassionate care for all her patients.',
        fees: 600,
        address: {
            line1: 'Hauz Khas',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Amit Desai',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '5 Years',
        about: 'Dr. Amit provides treatments for a variety of skin conditions, ensuring holistic dermatological care.',
        fees: 400,
        address: {
            line1: 'MG Road',
            line2: 'Mumbai'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Sneha Menon',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '6 Years',
        about: 'Dr. Sneha is committed to children’s healthcare, providing comprehensive care from birth through adolescence.',
        fees: 550,
        address: {
            line1: 'Koramangala',
            line2: 'Bengaluru'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Rahul Singh',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '12 Years',
        about: 'Dr. Rahul is highly skilled in treating neurological disorders with a focus on patient-centered care.',
        fees: 800,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Kavita Patil',
        image: doc6,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Kavita is dedicated to promoting women’s health, especially maternal and reproductive well-being.',
        fees: 650,
        address: {
            line1: 'Koregaon Park',
            line2: 'Pune'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Anand Mehta',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '9 Years',
        about: 'Dr. Anand believes in a holistic approach to health and wellness, treating patients with empathy.',
        fees: 500,
        address: {
            line1: 'Banjara Hills',
            line2: 'Hyderabad'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Priya Verma',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '3 Years',
        about: 'Dr. Priya offers advanced treatments for skin issues, prioritizing patient comfort and care.',
        fees: 450,
        address: {
            line1: 'Vasant Vihar',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Sameer Khan',
        image: doc9,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '8 Years',
        about: 'Dr. Sameer provides gentle and personalized care for children’s health and well-being.',
        fees: 550,
        address: {
            line1: 'Navi Mumbai',
            line2: 'Mumbai'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Megha Kapoor',
        image: doc10,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD (Gastroenterology)',
        experience: '11 Years',
        about: 'Dr. Megha is specialized in digestive health, offering effective treatments for gastrointestinal issues.',
        fees: 700,
        address: {
            line1: 'Bandra West',
            line2: 'Mumbai'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Rajiv Gupta',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '10 Years',
        about: 'Dr. Rajiv offers specialized care for neurological disorders, including epilepsy and stroke.',
        fees: 850,
        address: {
            line1: 'South Extension',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Shalini Tripathi',
        image: doc12,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Shalini focuses on preventive care, ensuring early detection and treatment of common illnesses.',
        fees: 500,
        address: {
            line1: 'Jayanagar',
            line2: 'Bengaluru'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Vikram Deshmukh',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD (Gastroenterology)',
        experience: '9 Years',
        about: 'Dr. Vikram specializes in treating digestive issues and liver disorders.',
        fees: 750,
        address: {
            line1: 'Salt Lake',
            line2: 'Kolkata'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ananya Roy',
        image: doc14,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '4 Years',
        about: 'Dr. Ananya offers personalized skincare treatments, focusing on both aesthetic and medical dermatology.',
        fees: 400,
        address: {
            line1: 'Connaught Place',
            line2: 'New Delhi'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Ramesh Pillai',
        image: doc15,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '7 Years',
        about: 'Dr. Ramesh is a compassionate pediatrician who provides excellent care for infants and young children.',
        fees: 550,
        address: {
            line1: 'Fort Kochi',
            line2: 'Kochi'
        }
    },
];
