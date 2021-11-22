import neuroface from './images/neuroface.jpg';
import imagetoascii from './images/imagetoascii.jpg';
import houseflix from './images/houseflix.jpg';
import threeDRayTracer from './images/3dRayTracer.jpg';

export const TagLines = [
    "I am a Computer Engineer",
    "I am a Developer",
    "I am a Coder",
    "I am a Learner",
]
export const aboutMeContent = {
    heading:'Computer Science Engineer by ❤',
    content:[
        'Hello There! I am <b>Rajiv Nayan Choubey</b>, an aspiring <i>Computer Science Engineer</i> and <i>Researcher</i>. The CPU clock cycle ticks me. My interests lies in the domain of <u>Web Development</u> and <u>Artificial Intelligence</u>. These days, I am also exploring the fields of <u>Computer Graphics</u>, <u>Compiler Designing</u>, and other core CS areas. Building things from scratch makes me euphoric.',
        'Quote that inspires me:<br><q>What I cannot create, I cannot understand </q> - Richard Feynman'
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
        'Keras',
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
            start: 2017,
            end: 2021
        },
        score: '9.52 CGPA'
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
        description:'Designed, developed, and deployed a web app for our startup - Campus Adda for ordering merchandise like Hoodies and T-Shirts. The website received 1000+ order requests within the institute and across Raipur city. The startup was founded by a group of four IIIT - Naya Raipur students, which further was recognized by Raipur Mayor and MorRaipur Club. As a result, hundreds of merchandise were sold throughout the Raipur city.',
        type:'professional'
    },
    {
        role:'Seasonal Intern (SDE)',
        time:{
            start:{
                month:1,
                year:2021
            },
            end:{
                month:6,
                year:2021
            },
        },
        location: 'Goldman Sachs',
        description:'Working on Digitization of documents',
        type:'professional'
    },
    {
        role:'Software Engineer (Analyst)',
        time:{
            start:{
                month:6,
                year:2021
            },
            end:'Present'
        },
        location: 'Goldman Sachs',
        // description:'Working on Digitization of documents',
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
        description:'Organised two-day technology fest for school students under IIIT Naya Raipur. With the team\'s help, managed 400 school students from various cities. Also, we built various technical galleries and took workshop/lectures for school students on various Science and Career topics.',
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
        description:'Planned and Organized Coding+Puzzle Event - \'Puzzle Express\' for techfest of the institute.',
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
        description:'Built, hosted, and maintained the website of Technovate\'20, techo-cultural festival of IIIT - Naya Raipur with a team of three members. The website was built using Django and was hosted from scratch on Linux Server provided by the Institute. The admins were able to add, modify, and delete the contents of the website using CMS portals without developer intervention. Before the pandemic, the website was able to serve a multitude of requests from all across India.',
        type:'volunteer'
    },
    

];


export const ProjectList = [
    {
        title : '3D Rendering Engine',
        githubLink : "https://github.com/rajivnayanc/3D-rendering-engine-js",
        hostedLink : "https://rajivnayanc.github.io/3D-rendering-engine-js/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'A software rendering engine for web browsers. Built Software Ray Tracer from scratch. Planning to implement Software Rasterizer.',
        featured:true,
        image:threeDRayTracer
    }, 
    {
        title : 'HouseFlix',
        githubLink : "https://github.com/rajivnayanc/3D-rendering-engine-js",
        techstack : ['JavaScript', 'React.js', 'Node.js'],
        desc: 'A media streaming service to serve videos over a network. Installed it in the home network connected with local NAS.',
        featured:true,
        image:houseflix
    },
    {
        title : 'NeuroFace',
        githubLink : "https://github.com/rajivnayanc/Deep_Learning_Projects/tree/master/Facial_Keypoints_Detection",
        reportLink : "https://github.com/rajivnayanc/Deep_Learning_Projects/blob/master/Facial_Keypoints_Detection/NeuroFace__Facial_Keypoints_Detection_using_Deep_Learning.pdf",
        techstack : ['Python 3', 'PyTorch', 'OpenCV'],
        desc: 'NeuroFace is a Deep Learning based Facial Keypoint detection application. It is an highly accurate OpenCV based desktop application which uses Convolutional Neural Networks to detect 15 Facial keypoints of the face.',
        featured:true,
        image:neuroface
    }, 
    {
        title : 'Image to ASCII Converter',
        githubLink : "https://github.com/rajivnayanc/image_to_ascii_image",
        hostedLink : "https://rajivnayanc.github.io/image_to_ascii_image/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'A web-app to convert an RGB image to set of ASCII characters. It uses intensity of each pixel of the grayscaled images and convert them to a corresponding ASCII character. This way, the whole image can be represented as ASCII characters. Go try them out and use them in your own terminals, or anywhere you want. 😉',
        featured:true,
        image:imagetoascii
    }, 
    {
        title : 'So called Flappy Bird',
        githubLink : "https://github.com/rajivnayanc/So_Called_Flappy_Bird",
        hostedLink : "https://rajivnayanc.github.io/So_Called_Flappy_Bird/",
        techstack : ['JavaScript', 'HTML', 'CSS'],
        desc: 'So called Flappy Bird is a Web based basic flappy bird game built on HTML5 Canvas. A trivial neural network is used to decide the next move based on next obstacle. One can also control the birds, which are represented as circles, using space key along with the AI.',
        featured:false,
        image:null
    },
    {
        title : 'GetNotify',
        githubLink : "https://github.com/rajivnayanc/GetNotify",
        techstack : ['Android Studio', 'Java', 'Firebase'],
        desc: 'Sometimes we need to monitor our long running tasks through phone. GetNotify is here to save the day. One can send message requests to particular Firebases API through long running scripts at regular intervals, and receive those messages as notifications on the phone from anywhere.',
        featured:false,
        image:null
    },
    {
        title : 'Resume-Creator: Github Action',
        githubLink : "https://github.com/rajivnayanc/resume-creator-action",
        hostedLink : "https://github.com/marketplace/actions/resume-creator-action",
        reportLink : "https://dev.to/rajivnayanc/json-resume-to-github-pages-3m14",
        techstack : ['JavaScript', 'Github Actions'],
        desc: 'A Github Action to read the JSON file containing the Resume data in a specific format, creates a static Resume Page, and hosts it on Github Pages.',
        featured:false,
        image:null
    },
    {
        title : 'Numpy Based Neural Network',
        githubLink : "https://github.com/rajivnayanc/Numpy_Vectorized_Feed_Forward_Neural_Network",
        techstack : ['Python 3', 'NumPy'],
        desc: 'A project for demonstrating the working and implementation of vectorised feed forward neural networks using numpy. One can use the provided FNN class for training small neural networks. It includes several features like batch training, different activation funtions, number of layers, etc. 🔥',
        featured:false,
        image:null
    },
    {
        title : 'Shoot the Balloons',
        githubLink : "https://github.com/rajivnayanc/Shoot_the_Balloons_HTML5_canvas",
        hostedLink : "https://rajivnayanc.github.io/Shoot_the_Balloons_HTML5_canvas/",
        techstack : ['JavaScript', 'HTML', 'CSS'],
        desc: 'Shoot the balloons is a HTML5 Canvas game, built using vanilla JS, where one has to shoot balloons from a fixed canon and score.',
        featured:false,
        image:null
    },
    {
        title : 'License Plate Detection',
        githubLink : "https://github.com/rajivnayanc/LicensePlateDetection-HumAIn-TCS",
        techstack : ['Python 3', 'PyTorch'],
        desc: 'A Deep Learning based License Plate Detection and License Plate Number extraction application. It uses YOLO-like Object detection algorithm to detect the license plate from the image and uses PyTessaract for license number extraction from the plate image. It was built for TCS HumAIn Hackathon.',
        featured:false,
        image:null
    },
    {
        title : 'Startup Management',
        githubLink : "https://github.com/rajivnayanc/Codeutsava",
        techstack : ['HTML', 'CSS', 'JS', 'PHP'],
        desc: 'A webapp to effectively manage startups inside an incubation center. The project was built during CodeUtsav, NIT Raipur Hackathon. It won the Honarable Mention award in the hackathon.',
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
