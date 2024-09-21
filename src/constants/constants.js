export const MENU = [
    {
        point: 'Why Spring',
        subpoints: [
            'Overview',
            'Microservices',
            'Reactive',
            'Event Driven',
            'Cloud',
            'Web Applications',
            'Serverless',
            'Batch',
        ],
        additional: false,
    },
    {
        point: 'Learn',
        subpoints: ['Overview', 'Quickstart', 'Guides', 'Blog'],
        additional: false,
    },
    {
        point: 'Projects',
        subpoints: [
            'Overview',
            'Spring Boot',
            'Spring Framework',
            'Spring Cloud',
            'Spring Cloud Data Flow',
            'Spring Data',
            'Spring Integration',
            'Spring Batch',
            'Spring Security',
            'View all projects',
        ],
        additional: true,
        additionalPoint: 'DEVELOPMENT TOOLS',
        additionalSubpoints: ['Spring Tools 4', 'Spring Initializr'],
    },
    {
        point: 'Academy',
        subpoints: ['Courses', 'Get Certified'],
        additional: false,
    },
    {
        point: 'Solutions',
        subpoints: [
            'Overview',
            'Tanzu Spring',
            'Spring Consulting',
            'Spring Academy For Teams',
            'Security Advisories',
        ],
        additional: false,
    },
    {
        point: 'Community',
        subpoints: ['Overview', 'Events', 'Authors'],
        additional: false,
    },
];

export const PROJECTS = [
    {
        name: 'Spring Boot',
        description:
            'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
        image: 'images/spring-boot.svg',
    },
    {
        name: 'Spring Framework',
        description:
            'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
        image: 'images/spring-framework.svg',
    },
    {
        name: 'Spring Data',
        description:
            'Provides a consistent approach to data access - relational, non-relational, map-reduce, and beyond.',
        image: 'images/spring-data.svg',
    },
    {
        name: 'Spring Cloud',
        description:
            'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
        image: 'images/spring-cloud.svg',
    },
    {
        name: 'Spring Cloud Data Flow',
        description:
            'Provides an orchestration service for composable data microservice applications on modern runtimes.',
        image: 'images/spring-data-flow.svg',
    },
    {
        name: 'Spring Security',
        description:
            'Protects your application with comprehensive and extensible authentication and authorization support.',
        image: 'images/spring-security.svg',
    },
];

export const FOOTER_LINKS = [
    [
        [
            {
                name: 'Why Spring',
                bold: true,
            },
            {
                name: 'Microservices',
                bold: false,
            },
            {
                name: 'Reactive',
                bold: false,
            },
            {
                name: 'Event Driven',
                bold: false,
            },
            {
                name: 'Cloud',
                bold: false,
            },
            {
                name: 'Web Applications',
                bold: false,
            },
            {
                name: 'Serverless',
                bold: false,
            },
            {
                name: 'Batch',
                bold: false,
            },
        ],
    ],
    [
        [
            {
                name: 'Learn',
                bold: true,
            },
            {
                name: 'Quickstart',
                bold: false,
            },
            {
                name: 'Guides',
                bold: false,
            },
            {
                name: 'Blog',
                bold: false,
            },
        ],
        [
            {
                name: 'Community',
                bold: true,
            },
            {
                name: 'Events',
                bold: false,
            },
            {
                name: 'Authors',
                bold: false,
            },
        ],
    ],
    [
        [
            {
                name: 'Solutions',
                bold: true,
            },
            {
                name: 'Tanzu Spring',
                bold: false,
            },
            {
                name: 'Spring Consulting',
                bold: false,
            },
            {
                name: 'Spring Academy For Teams',
                bold: false,
            },
            {
                name: 'Spring Advisories',
                bold: false,
            },
        ],
    ],
    [
        [
            {
                name: 'Projects',
                bold: true,
            },
            {
                name: 'Training',
                bold: true,
            },
        ],
        [
            {
                name: 'Thank you',
                bold: true,
            },
        ],
    ],
];
