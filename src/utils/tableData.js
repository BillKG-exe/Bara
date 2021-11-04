function createData(job, views, applicants, rate, date) {
    return { job, views, applicants, rate, date };
  }
  
  const rows = [
    createData('Software Engineer', 159, 478, 24, '01/2021'),
    createData('Data Scientist', 41, 148, 37, '01/2021'),
    createData('Back End Engineer', 212, 567, 24, '02/2021'),
    createData('UX/UI Designer', 28, 319, 67, '04/2021'),
    createData('Hardware Engineer', 60, 100, 49, '05/2021'),
  ];

  module.exports = rows