const FACTS = [
  "If you have 3 quarters, 4 dimes, and 4 pennies, you have $1.19. You also have the largest amount of money in coins without being able to make change for a dollar.",
  "The numbers '172' can be found on the back of the U.S. $5 dollar bill in the bushes at the base of the Lincoln Memorial.",
  "President Kennedy was the fastest random speaker in the world with upwards of 350 words per minute.",
  "In the average lifetime, a person will walk the equivalent of 5 times around the equator.",
  "Odontophobia is the fear of teeth.",
  "The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.",
  "In the early days of the telephone, operators would pick up a call and use the phrase, 'Well, are you there?'. It wasn't until 1895 that someone suggested answering the phone with the phrase 'number please?'",
  "The surface area of an average-sized brick is 79 cm squared.",
  "According to suicide statistics, Monday is the favored day for self-destruction.",
  "Cats sleep 16 to 18 hours per day.",
  "The most common name in the world is Mohammed.",
  "It is believed that Shakespeare was 46 around the time that the King James Version of the Bible was written. In Psalms 46, the 46th word from the first word is shake and the 46th word from the last word is spear.",
  "Karaoke means 'empty orchestra' in Japanese.",
  "The Eisenhower interstate system requires that one mile in every five must be straight. These straight sections are usable as airstrips in times of war or other emergencies.",
  "The first known contraceptive was crocodile dung, used by Egyptians in 2000 B.C.",
  "Rhode Island is the smallest state with the longest name. The official name, used on all state documents, is 'Rhode Island and Providence Plantations.'",
  "When you die, your hair still grows for a couple of months.",
  "There are two credit cards for every person in the United States.",
  "Isaac Asimov is the only author to have a book in every Dewey-decimal category.",
  "The newspaper serving Frostbite Falls, Minnesota, the home of Rocky and Bullwinkle, is the Picayune Intelligence.",
  "It would take 11 Empire State Buildings, stacked one on top of the other, to measure the Gulf of Mexico at its deepest point.",
  "The first person selected as the Time Magazine Man of the Year was Charles Lindbergh in 1927.",
  "The most money ever paid for a cow in an auction was $1.3 million.",
  "It took Leo Tolstoy six years to write 'War & Peace'.",
  "The Neanderthal's brain was bigger than yours is.",
  "On the new hundred dollar bill, the time on the clock tower of Independence Hall is 4:10.",
  "Each of the suits on a deck of cards represents the four major pillars of the economy in the middle ages: heart represented the Church, spades represented the military, clubs represented agriculture, and diamonds represented the merchant class.",
  "The names of the two stone lions in front of the New York Public Library are Patience and Fortitude. They were named by then-mayor Fiorello LaGuardia.",
  "The Main Library at Indiana University sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.",
  "The sound of E.T. walking was made by someone squishing her hands in jelly.",
  "Lucy and Linus (who were brother and sister) had another little brother named Rerun. (He sometimes played left-field on Charlie Brown's baseball team, [when he could find it!]).",
  "The pancreas produces Insulin.",
  "1 in 5,000 north Atlantic lobsters are born bright blue.",
  "There are 10 human body parts that are only 3 letters long (eye, hip, arm, leg, ear, toe, jaw, rib, lip, gum).",
  "A skunk's smell can be detected by a human a mile away.",
  "The word 'lethologica' describes the state of not being able to remember the word you want.",
  "The king of hearts is the only king without a mustache.",
  "Henry Ford produced the Model T only in black because the black paint available at the time was the fastest to dry.",
  "Mario, of Super Mario Bros. fame, appeared in the 1981 arcade game, Donkey Kong. His original name was Jumpman, but was changed to Mario to honor the Nintendo of America's landlord, Mario Segali.",
  "The three best-known western names in China: Jesus Christ, Richard Nixon, and Elvis Presley.",
  "Every year about 98% of the atoms in your body are replaced.",
  "Elephants are the only mammals that can't jump.",
  "The international telephone dialing code for Antarctica is 672.",
  "World Tourist day is observed on September 27.",
  "Women are 37% more likely to go to a psychiatrist than men are.",
  "The human heart creates enough pressure to squirt blood 30 feet (9 m).",
  "Diet Coke was only invented in 1982.",
  "There are more than 1,700 references to gems and precious stones in the King James translation of the Bible.",
  "When snakes are born with two heads, they fight each other for food.",
  "American car horns beep in the tone of F.",
  "Turning a clock's hands counterclockwise while setting it is not necessarily harmful. It is only damaging when the timepiece contains a chiming mechanism.",
  "There are twice as many kangaroos in Australia as there are people. The kangaroo population is estimated at about 40 million.",
  "Police dogs are trained to react to commands in a foreign language; commonly German but more recently Hungarian.",
  "The Australian $5 to $100 notes are made of plastic.",
  "St. Stephen is the patron saint of bricklayers.",
  "The average person makes about 1,140 telephone calls each year.",
  "Stressed is Desserts spelled backward.",
  "If you had enough water to fill one million goldfish bowls, you could fill an entire stadium.",
  "Mary Stuart became Queen of Scotland when she was only six days old.",
  "Charlie Brown's father was a barber.",
  "Flying from London to New York by Concord, due to the time zones crossed, you can arrive 2 hours before you leave.",
  "Dentists have recommended that a toothbrush be kept at least 6 feet (2 m) away from a toilet to avoid airborne particles resulting from the flush.",
  "You burn more calories sleeping than you do watching TV.",
  "A lion's roar can be heard from five miles away.",
  "The citrus soda 7-UP was created in 1929; '7' was selected because the original containers were 7 ounces. 'UP' indicated the direction of the bubbles.",
];

function changeText(el, str, fadeTime) {
  let duration = fadeTime * 0.5;
  el.animate(
    {
      opacity: 0,
    },
    {
      duration,
      fill: "forwards",
    }
  );
  setTimeout(() => {
    el.innerHTML = str;
    el.animate(
      {
        opacity: 1,
      },
      {
        duration,
        fill: "forwards",
      }
    );
  }, duration);
}

function randomFact(el) {
  changeText(el, FACTS[Math.floor(Math.random() * FACTS.length)], 400);
}

setInterval(() => {
  let ellipsis = document.getElementById("ellipsis");
  if (ellipsis === null) return;
  let n = Number(ellipsis.dataset.n);

  if (n < ellipsis.children.length) {
    ellipsis.children[n].style.opacity = 1;
    ellipsis.dataset.n = n + 1;
  } else {
    for (let dot of ellipsis.children) {
      dot.style.opacity = 0;
    }
    ellipsis.dataset.n = 0;
  }
}, 1000);

setTimeout(() => {
  let msg = document.getElementById("message");
  document.getElementById("ellipsis").remove();
  changeText(
    msg,
    "Hello, you've had this page open for 30 minutes. You should probably clean your tabs more often. Anyway, here's some cool facts!",
    400
  );

  let fact = document.getElementById("ee-fact");

  randomFact(fact);
  setInterval(() => {
    randomFact(fact);
  }, 30 * 1000);
}, 30 * 60 * 1000);

window.onmousemove = (ev) => {
  let backgroundText = document.getElementById("background-text");
  const BG_MOVE_SCALE = 10;

  let ratioY = ev.clientY / window.innerHeight;
  let ratioX = ev.clientX / window.innerWidth;

  backgroundText.animate(
    {
      top: `${BG_MOVE_SCALE * -ratioY}vmin`,
      left: `${BG_MOVE_SCALE * -ratioX}vmin`,
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
};

document.cookie = "hehehehe=;";
