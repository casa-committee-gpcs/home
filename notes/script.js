document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".notes-card");

  cards.forEach(card => {
    const header = card.querySelector(":scope > .notes-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const siblings = Array.from(card.parentElement.children)
        .filter(el => el !== card && el.classList.contains("notes-card"));

      siblings.forEach(sib => sib.classList.remove("active"));
      card.classList.toggle("active");
    });
  });
});

//Synonyms for searching..

const SEARCH_SYNONYMS = {
  // Subjects
  "bms": ["business management", "principles of management"],
  "mml": ["machine learning", "ml"],
  "dhp": ["digital hardware", "digital hardware principles"],
  "coa": ["computer organization"],
  "cn": ["computer networks", "networking"],
  "os": ["operating systems"],
  "dsa": ["data structures", "data structures and algorithms"],

  // Semesters
  "semester 1": ["sem 1", "first sem", "1st sem"],
  "semester 2": ["sem 2", "second sem", "2nd sem"],
  "semester 3": ["sem 3", "third sem", "3rd sem"],
  "semester 4": ["sem 4", "fourth sem", "4th sem"],
  "semester 5": ["sem 5", "fifth sem", "5th sem"],

  // Branches
  "aiml": ["ai ml", "artificial intelligence", "machine learning"],
  "co": ["computer organization"]
};

//Searching related JS ahead

function normalize(text) {
  return text.toLowerCase().trim();
}

function expandQuery(query) {
  const q = normalize(query);
  let terms = new Set([q]);

  for (const key in SEARCH_SYNONYMS) {
    if (q.includes(key) || SEARCH_SYNONYMS[key].includes(q)) {
      terms.add(key);
      SEARCH_SYNONYMS[key].forEach(s => terms.add(s));
    }
  }

  return [...terms];
}

const searchInput = document.querySelector(".notes-search input");
const allCards = document.querySelectorAll(".notes-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value;

  if (!query) {
    // Reset cards
    allCards.forEach(card => {
      card.style.display = "";
      card.classList.remove("active", "match");

      // Reset all list items inside
      card.querySelectorAll("li").forEach(li => {
        li.classList.remove("match");
        li.style.display = "";
      });
    });

    return;
  }

  const terms = expandQuery(query);

  allCards.forEach(card => {
    const items = card.querySelectorAll("li");
    let cardHasMatch = false;

    items.forEach(li => {
      const link = li.querySelector("a");
      if (!link) return;

      const text = normalize(link.innerText);
      let matched = false;

      for (const term of terms) {
        if (text.includes(term)) {
          matched = true;
          break;
        }
      }

      // ✅ hide/show LIST ITEM (not <a>)
      li.style.display = matched ? "" : "none";
    
      if (matched) {
        cardHasMatch = true;
        li.classList.add("match");
      } else {
        li.classList.remove("match");
      }
    });

    // Semester / parent card logic
    if (cardHasMatch) {
      card.style.display = "";
      card.classList.add("active", "match");
    } else {
      card.style.display = "none";
      card.classList.remove("active", "match");
    }
  });
});