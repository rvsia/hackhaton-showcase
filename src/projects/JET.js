// JET.js
export default {
    name: 'JET: Jira Easy Tasks', // Required
    hackathon: 'June 2023', // Required
    authors: [{ // Required
        name: 'Ryan Abbott'
    }, {
        name: 'Ben Turner'
    }],
    link: 'https://github.com/RedHatInsights/JET',
    additionalLinks: [
        {label: 'Demo video', link: 'https://youtu.be/UeQaloQ9GcM'},
    ],
    labels: ['ConsoleDot'], // Required, select from Games, Fun, ConsoleDot
    description: 'JET (Jira Easy Tasks) is a simple web utility that streamlines the creation of Jira tickets for basic and repetitive engineering tasks. JET eliminates the need to log in to Jira and manually fill in all the necessary Jira fields every time you create a ticket, making the task creation process efficient and hassle-free.', // Required
    image: '/JET.png',
    keywords: ['Jet', 'Jira', 'Toil', 'Productivity'] // list of technologies, topics, etc.
}
