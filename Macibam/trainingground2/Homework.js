const search = document.getElementById('search'), 
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');
 

  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string

// Search meal and fetch from API 
// Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily.
function searchMeal(e) {
  e.preventDefault();

 

  // Clear single meal
  single_mealEl.innerHTML = '';

  // Get search term
  const term = search.value;
 
  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
      
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
            )
            .join('');
        }
      });
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term'); // alert who popup when u didnt enter anything
  }
}

// Fetch meal by ID
//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
   
    });
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and heading
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Add meal to DOM            
function addMealToDOM(meal) { // The HTML DOM is a standard object model and programming interface for HTML. 
  const ingredients = [];
// Loop - Loops are handy, if you want to run the same code over and over again, each time with a different value.
  for (let i = 1; i <= 20; i++) { //for - loops through a block of code a number of times
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  } 
 // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" /> 
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main"> 
        <p>${meal.strInstructions}</p> 
        <h2>Ingredients</h2>  
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')} 
        </ul>  
      </div>
    </div>
  `;
}

// Event listeners The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);


mealsEl.addEventListener('click', e => {
  const mealInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});