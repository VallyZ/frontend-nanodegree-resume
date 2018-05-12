// MODEL //

var bio = {
  name: 'Mailat Valentin',
  age: '19yo,',
  role: 'Web Developper',
  contacts: {
    email: 'geanny_vally@yahoo.com',
    github: 'VallyZ',
    location: 'Bucharest, Romania'
  },
  biopic: 'images/fry.jpg',
  welcomeMsg: 'Hi there!',
  skills: ['HTML 5', 'CSS', 'JavaScript', 'Jasmine']
};

var education = {
  school: {
    name: 'Octav Onicescu National College',
    location: 'Bucharest, Romania',
    specialization: 'Major: Sports Instructor',
    date: '2013-2017'
  },
  onlineCourses: {
    title: 'Front-End Web Developer nanodegree',
    url: 'https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001',
    school: ' - Udacity',
    date: '2018'
  }
};

var work = {
  job: 'Never been employed'
};

var projects = {
  title: ['Pixel Art Maker', 'Memory Game', 'Classic Arcade Game', 'Cat Clicker'],
  date: '2017-2018',
  images: ['images/pixel.png', 'images/memory.png', 'images/arcade.png', 'images/cat.png'],
  url: ['https://github.com/VallyZ/Pixel-Art-Maker', 'https://github.com/VallyZ/memory-game', 'https://github.com/VallyZ/Classic-Arcade-Game', 'https://github.com/VallyZ/CatClicker-udacity-organized']
};

// OCTOPUS //

var octopus = {

  init: function() {
    view.init();
  },

  bio: function() {
    return bio;
  },

  education: function() {
    return education;
  },

  work: function() {
    return work;
  },

  projects: function() {
    return projects;
  }
}

// VIEW //

var view = {

  init: function() {
    this.name = document.querySelector('#name');
    this.age = document.querySelector('#age');
    this.role = document.querySelector('#role');
    this.email = document.querySelector('.email');
    this.github = document.querySelector('.github');
    this.location = document.querySelector('.location');
    this.msg = document.querySelector('.welcome-message');
    this.skill1 = document.querySelector('.skill1');
    this.skill2 = document.querySelector('.skill2');
    this.skill3 = document.querySelector('.skill3');
    this.skill4 = document.querySelector('.skill4');
    this.job = document.querySelector('#job');
    this.projectEntry = document.querySelector('.project-entry');
    this.dateP = document.querySelector('.dateP');
    this.college = document.querySelector('.college');
    this.dateE = document.querySelector('.dateE');
    this.locationText = document.querySelector('.location-text');
    this.major = document.querySelector('.major');
    this.course = document.querySelector('.course');
    this.link = document.querySelector('.link');
    this.dateO = document.querySelector('.dateO');
    this.emailBot = document.querySelector('.emailBot');
    this.githubBot = document.querySelector('.githubBot');
    this.locationBot = document.querySelector('.locationBot');

    var googleMap = document.querySelector('#map');

    this.render();
  },

  render: function() {
    var bio = octopus.bio();
    var education = octopus.education();
    var work = octopus.work();
    var projects = octopus.projects();
    // Set name,age,role
    this.name.textContent = bio.name;
    this.age.textContent = bio.age;
    this.role.textContent = bio.role;
    // Set contacts
    this.email.textContent = bio.contacts.email;
    this.github.textContent = bio.contacts.github;
    this.location.textContent = bio.contacts.location;
    // Hi there!
    this.msg.textContent = bio.welcomeMsg;
    // Set skills
    this.skill1.textContent = bio.skills[0];
    this.skill2.textContent = bio.skills[1];
    this.skill3.textContent = bio.skills[2];
    this.skill4.textContent = bio.skills[3];
    //Set job
    this.job.textContent = work.job;
    //Set projects
    this.dateP.textContent = projects.date;
    for (i = 0; i < projects.title.length; i++) {
      var x = projects.title[i];
      var y = projects.images[i];
      var z = projects.url[i];
      var a = document.createElement('a');
      a.setAttribute('href', z);
      a.textContent = x;
      a.style.cssText = 'width:20%'
      this.projectEntry.appendChild(a);
      var img = document.createElement('img');
      img.setAttribute('src', y);
      img.className = 'small';
      a.appendChild(img);
    }
    //Set education
    this.college.textContent = education.school.name;
    this.dateE.textContent = education.school.date;
    this.locationText.textContent = education.school.location;
    this.major.textContent = education.school.specialization;
    this.course.textContent = education.onlineCourses.title + education.onlineCourses.school;
    this.link.setAttribute('href', education.onlineCourses.url);
    this.link.textContent = education.onlineCourses.url;
    this.dateO.textContent = education.onlineCourses.date;
    //Set contacts on the bottom
    this.emailBot.textContent = bio.contacts.email;
    this.githubBot.textContent = bio.contacts.github;
    this.locationBot.textContent = bio.contacts.location;
  }
}

octopus.init();