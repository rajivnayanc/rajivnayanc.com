import neuroface from './images/neuroface.jpg';
import imagetoascii from './images/imagetoascii.jpg';
import houseflix from './images/houseflix.png';
import threeDRayTracer from './images/3dRayTracer.png';

export const TagLines = [
    "I am a Computer Engineer",
    "I am a Developer",
    "I am a Coder",
    "I am a Learner",
]
export const aboutMeContent = {
    heading:'Computer Science Engineer by ❤',
    content:[
        'Hello Everyone! My name is Rajiv Nayan Choubey. I am an aspiring Computer Science Engineer and Researcher. The CPU clock cycle ticks me. I am inclined towards Web Development and Artificial Intelligence. I am also developing my interests in the field of Computer Graphics and other core CS areas. Building things from scratch interests me the most.',
        'Favourite Quoute:',
        '"What I cannot create, I cannot understand " - Richard Feynman'
    ]
};

export const skillSets = {
    'Languages':[
        'C/C++',
        'Python',
        'JavaScript',
        'Java'
    ],
    'Framework & Libraries':[
        'Node.js',
        'Django',
        'ReactJs',
        'PyTorch',
        'Tensorflow',
    ],
    'Database':[
        'SQL',
        'MongoDB'
    ],
    'Cloud Service':[
        'Google Cloud Platform',
    ],
    'Operating Systems':[
        'Linux',
        'Windows'
    ]
};

export const EducationData = [
    {
        degree:'B.Tech',
        major:'CSE',
        institute:'International Institute of Information Technology, Naya Raipur',
        time:{
            start:2017,
            end: 'present'
        },
        score: '9.5 CGPA'
    },
    {
        degree:'Intermediate',
        major:'PCM, C++',
        institute:'Glenhill School, Varanasi',
        time:{
            start:2016
        },
        score: '86.2 %'
    },
    {
        degree:'High School',
        institute:'Glenhill School, Varanasi',
        time:{
            start:2014
        },
        score: '10 CGPA'
    }
    
];

export const ExperienceData = [
    {
        role:'Summer Intern (SDE)',
        time:{
            start:{
                month:5,
                year:2020
            },
            end:{
                month:6,
                year:2020
            }
        },
        location: 'Goldman Sachs',
        description:'Worked on PoC of Digitization of documents',
        type:'professional'
    },
    {
        role:'Co-Founder and Technical Head',
        time:{
            start:{
                month:11,
                year:2018
            },
            end:{
                month:1,
                year:2021
            }
        },
        location: 'Campus Adda',
        description:'A small startup by a group of four members of IIIT-NR. We sold hoodies and T-shirts to college students. Our startup was recognized by MorRaipur and Raipur Mayor. Sold hundreds of merchandise of various types. Built website to take merchandise orders. The website was able to take 300-350 orders within the institute.',
        type:'professional'
    },
    {
        role:'Seasonal Intern (SDE)',
        time:{
            start:{
                month:1,
                year:2021
            },
            end:'Present'
        },
        location: 'Goldman Sachs',
        description:'Working on Digitization of documents',
        type:'professional'
    },
    {
        role:'Co-Founder',
        time:{
            start:{
                month:5,
                year:2018
            }
        },
        location: 'The Society of Coders, IIIT-Naya Raipur',
        description:'Co-Founded the first Coding Society of IIIT Naya Raipur. Organized and hosted various events under TSoC.',
        type:'volunteer'
    },
    {
        role:'Student Coordinator',
        time:{
            start:{
                month:2,
                year:2019
            }
        },
        location: 'SciNtfic, IIIT-Naya Raipur',
        description:'Organised two-day technology fest for school students under IIIT Naya Raipur. With the help of team, managed 400 school students from across the cities. Also, we built various technical galleries along with lectures for school students.',
        type:'volunteer'
    },
    {
        role:'Event Coordinator',
        time:{
            start:{
                month:3,
                year:2019
            }
        },
        location: 'Technovate\'19, IIIT-Naya Raipur',
        description:'Planned and Organized Coding+Puzzle Event \'Puzzle Express\' for techfest of the institute.',
        type:'volunteer'
    },
    {
        role:'Web Development Lead',
        time:{
            start:{
                month:10,
                year:2019
            },
            end:{
                month:3,
                year:2020
            }
        },
        location: 'Technovate\'20, IIIT-Naya Raipur',
        description:'Built, hosted, and maintained the website of Technovate\'20 technical festival of IIIT, Naya Raipur with a team of three members. The website was built using Django and was hosted from scratch on Linux Server provided by Institute. The admins were able to add, modify, and delete the contents of the website using CMS portals without developer intervention. Before corona hit, the website was able to serve a multitude of requests from all across India.',
        type:'volunteer'
    },
    

];


export const ProjectList = [
    {
        title : '3D Rendering Engine',
        githubLink : "https://github.com/rajivnayanc/3D-rendering-engine-js",
        hostedLink : "https://rajivnayanc.github.io/3D-rendering-engine-js/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'This is a software rendering engine for web browsers. Built Software Ray Tracer from scratch. Planning to implement Software Rasterizer.',
        featured:true,
        image:threeDRayTracer
    }, 
    {
        title : 'HouseFlix',
        githubLink : "https://github.com/rajivnayanc/3D-rendering-engine-js",
        techstack : ['JavaScript', 'React.js', 'Node.js'],
        desc: 'This is a media streaming service to serve videos over a network. Installed this in home network connected with local NAS.',
        featured:true,
        image:houseflix
    },
    {
        title : 'NeuroFace',
        githubLink : "https://github.com/rajivnayanc/Deep_Learning_Projects/tree/master/Facial_Keypoints_Detection",
        reportLink : "https://github.com/rajivnayanc/Deep_Learning_Projects/blob/master/Facial_Keypoints_Detection/NeuroFace__Facial_Keypoints_Detection_using_Deep_Learning.pdf",
        techstack : ['Python 3', 'PyTorch', 'OpenCV'],
        desc: 'NeuroFace is a Deep Learning based Facial Keypoint detection application. It is an OpenCV based desktop application which uses Convolutional Neural Networks to detect 15 Facial keypoints of the face with high accuracy.',
        featured:true,
        image:neuroface
    }, 
    {
        title : 'Image to ASCII Converter',
        githubLink : "https://github.com/rajivnayanc/image_to_ascii_image",
        hostedLink : "https://rajivnayanc.github.io/image_to_ascii_image/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'This Project converts an RGB image to set of ASCII characters. It uses intensity of each pixel of the grayscaled images and convert them to a corresponding ASCII character. This way, whole image can be represented as ASCII characters. Go try them out and use them in your own terminals, or anywhere you want. 😉',
        featured:true,
        image:imagetoascii
    }, 
    {
        title : 'Image to ASCII Converter',
        githubLink : "https://github.com/rajivnayanc/image_to_ascii_image",
        hostedLink : "https://rajivnayanc.github.io/image_to_ascii_image/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'This Project converts an RGB image to set of ASCII characters. It uses light intensity of each pixxels of the grayscaled images and convert them to a corresponding ASCII character. This way, whole image can be represented as ASCII characters. Go try them out and use them in your own terminals, or anywhere you want. 😉',
        featured:false,
        image:null
    },
    {
        title : 'Image to ASCII Converter',
        githubLink : "https://github.com/rajivnayanc/image_to_ascii_image",
        hostedLink : "https://rajivnayanc.github.io/image_to_ascii_image/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'This Project converts an RGB image to set of ASCII characters. Go try them out and use them in your own terminals, or anywhere you want. 😉',
        featured:false,
        image:null
    }, 
    
];

export const PublicationData = [
    {
        title:'Internet Traffic Classifier Using Artificial Neural Network and 1D-CNN',
        link:'https://ieeexplore.ieee.org/document/9031882',
        year:2019,
        type:'conference',
        publisher:'IEEE',
        conference:'International Conference on Information Technology (ICIT)' ,
        authors:[
            {
                name:'Rajiv Nayan Choubey',
                profile:'https://www.linkedin.com/in/rajivnayanc/'
            },
            {
                name:'Loveleen Amar',
                profile:'https://www.linkedin.com/in/loveleen-amar/'
            },
            {
                name:'Sanchita Khare',
                profile:'https://www.linkedin.com/in/sanchita-khare/'
            },
            {
                name:'Venkanna U',
                profile:'https://www.linkedin.com/in/venkanna-uduthalapally-1749a6143/'
            },
        ]
    }
];