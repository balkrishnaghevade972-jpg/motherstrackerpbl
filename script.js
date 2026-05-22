function generatePlan() {

  let name = document.getElementById("name").value;
  let weight = parseInt(document.getElementById("weight").value);
  let stage = document.getElementById("stage").value;

  let calories = "";
  let nutrients = "";
  let meals = "";

  // Underweight

  if(weight < 50) {

    calories = "2600 kcal/day";

    nutrients =
      "Protein, Iron, Calcium, Healthy Fats";

    meals =
    `
      <h2>🍽 Underweight Mother Diet Plan</h2>

      <div class="meal-box">

        <h3>🌅 Breakfast</h3>
        <p>Banana Milkshake with Oats and Almonds</p>

        <h3>🍛 Lunch</h3>
        <p>Rice, Dal, Paneer, Salad</p>

        <h3>☕ Snacks</h3>
        <p>Dry Fruits and Yogurt</p>

        <h3>🌙 Dinner</h3>
        <p>Vegetable Soup with Chapati</p>

      </div>
    `;
  }

  // Normal Weight

  else if(weight >= 50 && weight <= 70) {

    calories = "2300 kcal/day";

    nutrients =
      "Balanced Protein, Vitamins, Iron";

    meals =
    `
      <h2>🍽 Normal Weight Diet Plan</h2>

      <div class="meal-box">

        <h3>🌅 Breakfast</h3>
        <p>Idli with Coconut Chutney and Milk</p>

        <h3>🍛 Lunch</h3>
        <p>Chapati, Dal, Vegetables</p>

        <h3>☕ Snacks</h3>
        <p>Fruit Salad and Nuts</p>

        <h3>🌙 Dinner</h3>
        <p>Khichdi with Curd</p>

      </div>
    `;
  }

  // Overweight

  else {

    calories = "2000 kcal/day";

    nutrients =
      "Low Fat, Fiber Rich Diet";

    meals =
    `
      <h2>🍽 Overweight Mother Diet Plan</h2>

      <div class="meal-box">

        <h3>🌅 Breakfast</h3>
        <p>Oats with Fruits</p>

        <h3>🍛 Lunch</h3>
        <p>Brown Rice with Vegetables</p>

        <h3>☕ Snacks</h3>
        <p>Sprouts Salad</p>

        <h3>🌙 Dinner</h3>
        <p>Soup with Multigrain Roti</p>

      </div>
    `;
  }

  document.getElementById("result").innerHTML = `

    <h2>🌸 Personalized Nutrition Plan</h2>

    <p><b>Mother Name:</b> ${name}</p>

    <p><b>Pregnancy Stage:</b> ${stage}</p>

    <p><b>Calories:</b> ${calories}</p>

    <p><b>Essential Nutrients:</b> ${nutrients}</p>

    <button onclick="openPopup()">
      View Detailed Diet Plan
    </button>
  `;

  document.getElementById("popup-data").innerHTML = meals;

  // Chrome Notification

  if(Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  if(Notification.permission === "granted") {

    new Notification("🌸 Nutrition Reminder", {
      body: "Drink water and eat healthy meals 💧"
    });
  }
}

function openPopup() {

  document.getElementById("popup").style.display = "block";
}

function closePopup() {

  document.getElementById("popup").style.display = "none";
}

function changeLanguage() {

  let language = document.getElementById("language").value;

  if(language === "marathi") {

    document.getElementById("title").innerHTML =
      "🌸 मातांसाठी पोषण ट्रॅकर";

    document.getElementById("subtitle").innerHTML =
      "निरोगी माता, निरोगी भविष्य";

    document.getElementById("btn").innerHTML =
      "पोषण योजना तयार करा";
  }

  else {

    document.getElementById("title").innerHTML =
      "🌸 Nutrition Tracker for Mothers";

    document.getElementById("subtitle").innerHTML =
      "Healthy Mothers, Healthy Future";

    document.getElementById("btn").innerHTML =
      "Generate Nutrition Plan";
  }
}
