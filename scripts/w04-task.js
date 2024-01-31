/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Christian Uche",
    photo: "images/chrispics.PNG",
    favoriteFood: [
        "Rice and Stew",
        "Egusi and Semovita",
        "Akara and Bread",
        "Irish Potatoes"
    ],
    hobbies: [
        "Reading",
        "Playing the Piano",
        "Making Research", 
        "coding",
        "Travelling",
        "Helping",
        "Drawing"
    ],
    placesLived: []
};
myProfile.placesLived.push({
    place: 'Nigeria Lagos, Ikeja',
    length: '5 year'
  });
  
  // Add additional object literals with appropriate values to the placesLived array for each place you have lived.
  myProfile.placesLived.push(
    {
      place: 'Nigeria Calabar, 8 miles',
      length: '3 years'
    },
    {
      place: 'Nigeria Abuja, Wuse',
      length: '1 years'
    },
    {
        place: "Gabon Libreville, Zembab",
        length: "7 years"
    }
  );


/* Populate Profile Object with placesLive objects */

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    // Create an HTML <li> element
    let li = document.createElement('li');
    
    // Set the textContent of the <li> element to the value of the hobby
    li.textContent = food;
    
    // Append the <li> element as a child of the HTML <ul> element with an ID of hobbies
    document.querySelector('#favorite-foods').appendChild(li);
  });
  

/* Hobbies List */
// For each hobby in the hobbies property
myProfile.hobbies.forEach(hobby => {
    // Create an HTML <li> element
    let li = document.createElement('li');
    
    // Set the textContent of the <li> element to the value of the hobby
    li.textContent = hobby;
    
    // Append the <li> element as a child of the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(li);
  });
  

/* Places Lived DataList */
// For each object in the placesLived property
myProfile.placesLived.forEach(place => {
    // Create an HTML <dt> element and put its place property in the <dt> element
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    // Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    // Append the HTML <dt> and <dd> elements to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  

