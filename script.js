function generatePlan() {

  let name = document.getElementById("name").value;
  let weight = parseInt(document.getElementById("weight").value);
  let stage = document.getElementById("stage").value;

  let calories = "";
  let meals = "";
  let nutrients = "";

  // Underweight
  if (weight < 50) {

    calories = "2600 kcal/day";

    nutrients =
      "High Protein, Iron, Calcium, Healthy Fats";

    meals =
      `
      🍌 Banana Milkshake with Oats<br>
      🍚 Rice with Dal and Paneer<br>
      🥜 Dry Fruits and Yogurt<br>
      🥣 Vegetable Soup with Chapati
      `;
  }

  // Normal Weight
  else if (weight >= 50 && weight <= 70) {

    calories = "2300 kcal/day";

    nutrients =
      "Balanced Protein, Vitamins, Iron, Calcium";

    meals =
      `
      🥞 Idli with Coconut Chutney<br>
      🥗 Chapati with Dal and Vegetables<br>
      🍎 Fruit Salad and Nuts<br>
      🍲 Khichdi with Curd
      `;
  }

  // Overweight
  else {

    calories = "2000 kcal/day";

    nutrients =
      "Low Fat, Fiber Rich, Iron, Vitamins";

    meals =
      `
      🥣 Oats with Fruits<br>
      🍛 Brown Rice with Vegetables<br>
      🥗 Sprouts Salad<br>
      🍲 Soup with Multigrain Roti
      `;
  }

  document.getElementById("result").innerHTML = `

    <h2>🌸 Personalized Nutrition Plan</h2>

    <p><b>Mother Name:</b> ${name}</p>

    <p><b>Pregnancy Stage:</b> ${stage}</p>

    <p><b>Recommended Calories:</b> ${calories}</p>

    <p><b>Essential Nutrients:</b> ${nutrients}</p>

    <div class="meal-box">

      <h3>🍽 Suggested Meals</h3>

      <p>${meals}</p>

    </div>

  `;

  // Chrome Notifications

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  if (Notification.permission === "granted") {

    new Notification("🌸 Nutrition Reminder", {
      body: "Drink water and eat healthy meals on time 💧"
    });

  }

}
