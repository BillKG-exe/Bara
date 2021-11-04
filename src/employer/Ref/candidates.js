const candidates = [
    { id: null, picture: '/img/1.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso, BF', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'interviewed', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'UX/UI Designer', company: 'Tesla' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Ouaga I' }
    ] }, 
    { id: null, picture: '/img/4.jpg', name: 'John Doe', place: 'Ouagadougou, BF', jobTitle: 'Computer Engineer', search: 'Software Engineer', status: 'Hired', experiences: [
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Doctorat', place: 'University of Ouaga I' }
    ] },
    { id: null, picture: '/img/9.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'interviewed', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Bobo Dioulasso' }
    ] },
    { id: null, picture: '/img/1.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso, BF', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'Hired', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'UX/UI Designer', company: 'Tesla' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Ouaga I' }
    ] }, 
    { id: null, picture: '/img/4.jpg', name: 'John Doe', place: 'Ouagadougou, BF', jobTitle: 'Computer Engineer', search: 'Software Engineer', status: 'interviewed', experiences: [
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Doctorat', place: 'University of Ouaga I' }
    ] },
    { id: null, picture: '/img/9.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'New Candidates', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Bobo Dioulasso' }
    ] },
    { id: null, picture: '/img/7.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso, BF', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'New Candidates', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'UX/UI Designer', company: 'Tesla' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Ouaga I' }
    ] }, 
    { id: null, picture: '/img/8.jpg', name: 'John Doe', place: 'Ouagadougou, BF', jobTitle: 'Computer Engineer', search: 'Software Engineer', status: 'New Candidates', experiences: [
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Doctorat', place: 'University of Ouaga I' }
    ] },
    { id: null, picture: '/img/9.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'New Candidates', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Bobo Dioulasso' }
    ] },
    { id: null, picture: '/img/10.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso, BF', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'interviewed', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'UX/UI Designer', company: 'Tesla' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Ouaga I' }
    ] }, 
    { id: null, picture: '/img/11.jpg', name: 'John Doe', place: 'Ouagadougou, BF', jobTitle: 'Computer Engineer', search: 'Software Engineer', status: 'interviewed', experiences: [
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Doctorat', place: 'University of Ouaga I' }
    ] },
    { id: null, picture: '/img/13.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'Hired', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Bobo Dioulasso' }
    ] },
    { id: null, picture: '/img/12.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso, BF', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'New candidates', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'UX/UI Designer', company: 'Tesla' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Ouaga I' }
    ] }, 
    { id: null, picture: '/img/11.jpg', name: 'John Doe', place: 'Ouagadougou, BF', jobTitle: 'Computer Engineer', search: 'Software Engineer', status: 'Hired', experiences: [
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Doctorat', place: 'University of Ouaga I' }
    ] },
    { id: null, picture: '/img/15.jpg', name: 'Jane Doe', place: 'Bobo Dioulasso', jobTitle: 'Software Engineer', search: 'Software Engineer', status: 'New CanDiDates', experiences: [
        { title: 'Software Developer', company: 'Google Inc' },
        { title: 'Software Engineer', company: 'Microsoft Inc' },
        { title: 'Hardware Engineer', company: 'Uber' },
        { title: 'Data Scientist', company: 'Oracle' },
        { title: 'Machine Learning Expert', company: 'Coursera' },
        { title: 'System Design Engineer', company: 'Uber' }
    ], education: [
        { degree: 'Bachelor in Science', place: 'University of Bobo Dioulasso' }
    ] }
]

module.exports = candidates