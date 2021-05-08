import logo from './images/test.jpg';
import logo2 from './images/test2.jpg';

export const TagLines = [
    "I am a Computer Engineer",
    "I am a Developer",
    "I am a Coder",
    "I am a Learner",
]
export const aboutMeContent = {
    heading:'I am a Computer Science Engineer',
    content:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat fringilla libero quis feugiat. Donec augue lorem, laoreet in velit quis, mollis euismod arcu. Fusce laoreet a tellus nec cursus. Nam quis dolor vestibulum ligula lobortis porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras placerat lectus ex, a maximus magna dignissim lacinia. Quisque mi nibh, eleifend ac nibh auctor, consectetur fermentum lorem. Nunc dictum gravida nulla eu porttitor. Donec ex mauris,cursus sit amet mattis a, elementum ut eros. Pellentesque dapibus tempor sem at pretium.',
        'Proin neque orci, commodo nec magna quis, tempus feugiat orci. vel posuere turpis. Fusce quis lacus feugiat, pellentesque lectus eget, accumsan libero. Quisque nulla sem, interdum a ligula eu, suscipit gravida dolor. Sed molestie et urna malesuada gravida. In nunc eros, malesuada ut quam vel, euismod consequat dui. Maecenas non volutpat leo. Nulla id fringilla ligula. Nunc metus velit, condimentum ut sapien at, ornare vehicula odio. Proin tincidunt venenatis massa in consectetur. Quisque convallis, arcu et finibus eleifend, mi orci dapibus tortor, non porttitor neque neque in dolor. Mauris dictum varius faucibus. Phasellus id volutpat sapien. Sed a interdum quam.'
    ]
};

export const skillSets = {
    'Languages':[
        'C++',
        'Python',
        'JavaScript'
    ],
    'Framework':[
        'Node.js',
        'Django',
        'PyTorch',
        'Tensorflow'
    ],
    'Tools':[
        'Adobe Photoshop',
        'Figma'
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
        score: '86.4 %'
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
        title : 'NeuroVision',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images Converts EEG Signal into ImagesConverts EEG Signal into Images',
        featured:true,
        image:logo
    },
    {
        title : 'NeuroVision',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images Converts EEG Signal into ImagesConverts EEG Signal into Images',
        featured:true,
        image:logo2
    },
    {
        title : 'NeuroVision',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images Converts EEG Signal into ImagesConverts EEG Signal into Images',
        featured:true,
        image:logo
    },
    {
        title : '3D Rasterizer',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images',
        featured:false,
        image:"#"
    },
    {
        title : '3D Rasterizer',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images Converts EEG Signal into ImagesConverts EEG Signal into ImagesConverts EEG Signal into Images Converts EEG Signal into ImagesConverts EEG Signal into Images',
        featured:true,
        image:logo2
    },
    {
        title : '3D Rasterizer',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images',
        featured:false,
        image:"#"
    },
    {
        title : '3D Rasterizer',
        githubLink : "/",
        hostedLink : "/",
        reportLink : "/",
        techstack : ['C++', 'Python', 'Java'],
        desc: 'Converts EEG Signal into Images Converts EEG Signal into ImagesConverts EEG Signal into Images',
        featured:false,
        image:"#"
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