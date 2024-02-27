onload = () =>{
  document.body.classList.remove("container");
};

// Check if the user has visited the second page
const hasVisitedSecondPage = sessionStorage.getItem('visitedSecondPage');

if (hasVisitedSecondPage) {
  // Clear the flag indicating that the second page has been visited
  sessionStorage.removeItem('visitedSecondPage');
}