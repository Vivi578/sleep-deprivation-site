/* .js files add interaction to your website */
//Prompts for sleep
var promptList = [
"How do I want to feel when I wake up tomorrow morning?" /*0*/,
"What did I learn about myself today?" /*1*/,
"Write down one word to describe my day (ex: calm, hectic) and write a sentence about it (today was calm because I did my morning routine and that helped me stay in the present moment)" /*2*/,
"List the to-dos you crossed off today. Celebrate how good that feels!" /*3*/,
"What didn’t go so well today? How come?",
"What didn’t go so well today? How come?",
"What are you worried about right now?",
"What area of your life do you feel the most fulfilled? Why?",
"What area of your life do you feel least fulfilled? Why?",
"Who do you feel most grateful for today?",
"When you reflect on your day, what’s the first moment that comes to mind? Why do you think?",
"Is there anything that’s been bothering you or taking up space in your mind? What is it?",
"Did you feel stressed today? If so, why?",
"How did you practice self-care today?",
"List your daily top 3 (the 3 best moments of your day).",
"What’s a lesson you can take away from today?",
"What is something that would’ve made today better?",
"Rate your current mental health/mental state on a scale of 1-10. Explain.",
"Make a gratitude list. Write down as many things as you can think of. Get specific!",
"Brain dump any future anxieties or stresses you have. Feel the weight lift as you put them on paper.",
"Make a “don’t forget!” checklist for tomorrow.",
"What does “personal growth” mean to you? How can you take steps there?",
"Create a fun bucket list for the next few months.",
"How can you stay focused tomorrow?",
"Write down some written manifestations for the next week/month.",
"Write yourself a note of encouragement for the morning!",
"What do I want to see in my dreams tonight?",
"I will revisit this in the morning, but for now, I need to just get it out of my mind…",
"List 5 positive affirmations to start your day tomorrow",
"Describe your dream bed. Go into as much detail as possible, including the color of the bedding, the type of pillows you’d have, the number of blankets, etc.",
"Describe the strangest place you’ve ever fallen asleep and what happened when you woke up there.",
"How does my body feel right now? What words would I use to describe how I’m feeling? What thoughts am I having trouble letting go of?",
"These things might keep me up if I don’t write them down.",
"Today taught me that…",
"Here’s everything that went well today.",
"What was the biggest challenge I faced today? What did it make me realize? How will I approach it next time?",
"Five things I’m grateful for today.",
"List five words that describe today and why.",
"If I let go of one thing that’s bothering me, this is what it would feel like.",
"If I feel like I still need help working through this problem tomorrow, here is a list of people I will ask for help from.",
"Tomorrow, I must (email, call, change the oil in my car, print my resume, etc.)...",
"What is your ideal morning routine?",
"What thoughts are you having trouble letting go of?",
"Was there a point in the day that you felt like the best version of yourself?",
"Describe something about tomorrow that excites you.",
"What is the most important thing you learned today? How does this change tomorrow?",
"Choose one difficult situation from your day. Describe how you are proud of the way you handled it.",
"If you had to live this day over again, what is the best advice you would give yourself? ",
"What limiting beliefs do you have about yourself that are holding you back?",
"Describe one way that you made progress toward your goals today.",
"How will you make sure that you stay positive tomorrow?",
"Describe the people you surround yourself with. Do they help or hinder your self growth?",
"Write down one small positive thought to read tomorrow morning.",
"Think of a positive thought you can write down for yourself to read next week."
]
var prompt = document.getElementById("prompt");
var promptButton = document.getElementById("promptButton");
var count = 0;

promptButton.addEventListener("click", displayPrompt);

function displayPrompt(){
  prompt.innerHTML = promptList[count];
  count++;
  if (count == promptList.length){
    count = 0;
  }
}
