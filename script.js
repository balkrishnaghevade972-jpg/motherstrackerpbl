const content = {

  english: {

    title:
      "🌸 Nutrition Tracker for Mothers",

    subtitle:
      "Healthy Mothers, Healthy Future",

    button:
      "Generate Nutrition Plan",

    resultTitle:
      "🌸 Personalized Nutrition Suggestions",

    viewDiet:
      "View Detailed Diet Plan",

    reminder:
      "Drink water and eat healthy meals 💧",

    stages: [

      "Before Pregnancy",

      "First Trimester",

      "Second Trimester",

      "Third Trimester",

      "After Pregnancy"
    ]
  },

  marathi: {

    title:
      "🌸 मातांसाठी पोषण ट्रॅकर",

    subtitle:
      "निरोगी माता, निरोगी भविष्य",

    button:
      "पोषण योजना तयार करा",

    resultTitle:
      "🌸 वैयक्तिक पोषण सूचना",

    viewDiet:
      "सविस्तर आहार योजना पहा",

    reminder:
      "पाणी प्या आणि वेळेवर जेवा 💧",

    stages: [

      "गर्भधारणेपूर्वी",

      "पहिला त्रैमासिक",

      "दुसरा त्रैमासिक",

      "तिसरा त्रैमासिक",

      "प्रसूतीनंतर"
    ]
  }
};

/* Change Language */

function changeLanguage() {

  let lang =
    document.getElementById("language").value;

  document.getElementById("title").innerHTML =
    content[lang].title;

  document.getElementById("subtitle").innerHTML =
    content[lang].subtitle;

  document.getElementById("btn").innerHTML =
    content[lang].button;

  let stage =
    document.getElementById("stage");

  for(let i = 0; i < 5; i++) {

    stage.options[i].text =
      content[lang].stages[i];
  }

  if(lang === "marathi") {

    document.getElementById("name").placeholder =
      "आईचे नाव लिहा";

    document.getElementById("weight").placeholder =
      "वजन लिहा (KG)";
  }

  else {

    document.getElementById("name").placeholder =
      "Enter Mother's Name";

    document.getElementById("weight").placeholder =
      "Enter Weight (KG)";
  }
}

/* Generate Plan */

function generatePlan() {

  let lang =
    document.getElementById("language").value;

  let name =
    document.getElementById("name").value;

  let stage =
    document.getElementById("stage").value;

  let calories = "";
  let nutrients = "";
  let meals = "";

  /* Before Pregnancy */

  if(stage === content[lang].stages[0]) {

    calories = "2000 kcal/day";

    nutrients =
      lang === "english"
      ? "Folic Acid, Iron, Calcium"
      : "फॉलिक अॅसिड, आयर्न, कॅल्शियम";

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 Before Pregnancy Diet Plan"
      : "🌸 गर्भधारणेपूर्वी आहार योजना"}
      </h2>

      <p>

      ${lang === "english"

      ? "Before pregnancy, mothers should eat nutritious foods rich in iron, calcium, proteins, and folic acid. This helps prepare the body for a healthy pregnancy and improves baby development."

      : "गर्भधारणेपूर्वी महिलांनी आयर्न, कॅल्शियम आणि प्रोटीनयुक्त अन्न खाणे आवश्यक आहे. यामुळे शरीर निरोगी राहते."}

      </p>

      <h3>🌅 Breakfast</h3>

      <p>
      🥛 Milk, Oats, Fruits and Dry Fruits
      </p>

      <h3>🍛 Lunch</h3>

      <p>
      🍚 Rice, Dal, Chapati and Green Vegetables
      </p>

      <h3>☕ Evening Snacks</h3>

      <p>
      🍎 Fruit Salad and Nuts
      </p>

      <h3>🌙 Dinner</h3>

      <p>
      🥣 Soup, Salad and Chapati
      </p>

    </div>
    `;
  }

  /* First Trimester */

  else if(stage === content[lang].stages[1]) {

    calories = "2200 kcal/day";

    nutrients =
      lang === "english"
      ? "Iron, Protein, Vitamins"
      : "आयर्न, प्रोटीन, व्हिटॅमिन्स";

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 First Trimester Diet Plan"
      : "🌸 पहिला त्रैमासिक आहार"}
      </h2>

      <p>

      ${lang === "english"

      ? "During the first trimester, mothers need proteins, iron, and vitamins for early baby growth. Healthy meals reduce weakness and provide energy."

      : "पहिल्या त्रैमासिकात बाळाच्या वाढीसाठी प्रोटीन, आयर्न आणि व्हिटॅमिन्स आवश्यक असतात."}

      </p>

      <h3>🌅 Breakfast</h3>

      <p>
      🍌 Banana Milkshake with Oats
      </p>

      <h3>🍛 Lunch</h3>

      <p>
      🍚 Rice, Dal and Paneer
      </p>

      <h3>☕ Evening Snacks</h3>

      <p>
      🥜 Dry Fruits and Yogurt
      </p>

      <h3>🌙 Dinner</h3>

      <p>
      🥣 Vegetable Soup with Chapati
      </p>

    </div>
    `;
  }

  /* Second Trimester */

  else if(stage === content[lang].stages[2]) {

    calories = "2400 kcal/day";

    nutrients =
      lang === "english"
      ? "Calcium, Protein, Iron"
      : "कॅल्शियम, प्रोटीन, आयर्न";

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 Second Trimester Diet Plan"
      : "🌸 दुसरा त्रैमासिक आहार"}
      </h2>

      <p>

      ${lang === "english"

      ? "During the second trimester, mothers require more calcium and protein because the baby's bones and muscles grow rapidly."

      : "दुसऱ्या त्रैमासिकात बाळाची हाडे आणि स्नायू विकसित होतात त्यामुळे कॅल्शियम आणि प्रोटीन आवश्यक असते."}

      </p>

      <h3>🌅 Breakfast</h3>

      <p>
      🥞 Idli with Coconut Chutney and Milk
      </p>

      <h3>🍛 Lunch</h3>

      <p>
      🥗 Chapati, Dal and Vegetables
      </p>

      <h3>☕ Evening Snacks</h3>

      <p>
      🍎 Fruit Salad and Nuts
      </p>

      <h3>🌙 Dinner</h3>

      <p>
      🍲 Khichdi with Curd
      </p>

    </div>
    `;
  }

  /* Third Trimester + After Pregnancy */

  else {

    calories = "2500 kcal/day";

    nutrients =
      lang === "english"
      ? "Fiber, Protein, Calcium"
      : "फायबर, प्रोटीन, कॅल्शियम";

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 Third Trimester / After Pregnancy Diet"
      : "🌸 तिसरा त्रैमासिक / प्रसूतीनंतर आहार"}
      </h2>

      <p>

      ${lang === "english"

      ? "During the third trimester and after delivery, mothers need extra energy, calcium, and fiber for recovery and breastfeeding."

      : "तिसऱ्या त्रैमासिकात आणि प्रसूतीनंतर शरीराला जास्त ऊर्जा आणि पोषणाची गरज असते."}

      </p>

      <h3>🌅 Breakfast</h3>

      <p>
      🥣 Oats with Fruits
      </p>

      <h3>🍛 Lunch</h3>

      <p>
      🍛 Brown Rice and Vegetables
      </p>

      <h3>☕ Evening Snacks</h3>

      <p>
      🥗 Sprouts Salad
      </p>

      <h3>🌙 Dinner</h3>

      <p>
      🍲 Soup with Multigrain Roti
      </p>

    </div>
    `;
  }

  /* Result */

  document.getElementById("result").innerHTML = `

    <h2>
    ${content[lang].resultTitle}
    </h2>

    <p>

      <b>
      ${lang === "english"
      ? "Mother Name"
      : "आईचे नाव"}
      :
      </b>

      ${name}

    </p>

    <p>

      <b>
      Calories:
      </b>

      ${calories}

    </p>

    <p>

      <b>
      ${lang === "english"
      ? "Essential Nutrients"
      : "महत्त्वाचे पोषक घटक"}
      :
      </b>

      ${nutrients}

    </p>

    <button onclick="openPopup()">

      ${content[lang].viewDiet}

    </button>
  `;

  document.getElementById("popup-data").innerHTML =
    meals;

  /* Chrome Notification */

  if(Notification.permission !== "granted") {

    Notification.requestPermission();
  }

  if(Notification.permission === "granted") {

    new Notification("🌸 Reminder", {

      body: content[lang].reminder
    });
  }
}

/* Popup */

function openPopup() {

  document.getElementById("popup").style.display =
    "block";
}

function closePopup() {

  document.getElementById("popup").style.display =
    "none";
}
