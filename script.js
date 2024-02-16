/* .js files add interaction to your website */
//Facts about mental health
var factList = [
"Nearly 1 in 5 American adults will have a diagnosable mental health condition in any given year. ",/*0*/
"46 percent of Americans will meet the criteria for a diagnosable mental health condition sometime in their life, and half of those people will develop conditions by the age of 14.",/*1*/
"Number of youth with depression who did not receive any mental health treatment: 2.17 million",/*2*/
"Number of US Adults with Suicidal Thoughts: 11.4 million",/*3*/
"Percent of People (ages 13+) in US with PTSD (Lifetime prevalence): 5.7%",/*4*/
"Major depression is one of the most common mental illnesses.",/*5*/
"Anxiety disorders are among the most common mental illnesses in America" , /*6*/
"Teens who don't sleep enough feel anxious, stressed and depressed often" , /*7*/ 
"Sleep deprivation can happen to everyone at any point in their life" , /*8*/
"Sleep deprivation negatively affects your mental health, making it harder for you to manage and process your emotions" ,
"Sleep-deprived teens are far more likely to use stimulants like caffeine and nicotine to get through the day but also to deal with sleep-related negative moods by self-medicating with alcohol" ,
"If you're sleep deficient, you may have trouble making decisions, solving problems, controlling your emotions and behavior, and coping with change" ,
"Participants who averaged 6 hours or less of sleep per night were about 2.5 times more likely to have frequent mental distress when controlling for confounders than those who slept more than 6 hours"
];

//Generator variables
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
