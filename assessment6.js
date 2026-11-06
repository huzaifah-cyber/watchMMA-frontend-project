console.log("Starting JavaScript execution");

// Array containing the latest fights (Closest to Oct 27, 2026)
let fights = [
  "Nikoloz Abramishvili vs Aaron McKenzie",
  "Ibragim Ibragimov vs Nika Kupravishvili",
  "Ruslan Bolkvadze vs Tracy Reeder",
  "David Mgoyan vs Asa Ten Pow",
  "Bakhtiyar Nesipbek vs Abdul Kamara",
  "Levan Kirtadze vs Pedro Carvalho",
  "David Mora vs Alim Nabiev",
  "Mate Sanikidze vs Everton Nascimento",
  "Sayed Ali Asli vs Manuchar Kvashilava",
  "Giorgi Poladishvili vs Elvin Kamilli",
  "Elene Loladze vs Ekaterina Yar",
  "Zurab Ivaniadze vs Mucahit Aydin",
  "Sandro Tevzadze vs Rob Cunningham",
  "Joshua Adeboye vs Ruslan Mirishov",
  "Gimbat Magomedov vs Muhammadjon Aliyev",
  "Jake Woodley vs Zayne Havener",
  "Thomas Blackorby vs Devan Worth",
  "Hilarie Rose vs Bruna Ellen",
  "Jansey Silva vs Guram Mestvirishvili"
];

// Function to display the unordered list on the Latest Fights page
function displayFights(){
    let fightList = "<ul>";

    //Loop for iterating over each item in the fights list and concatenating them
    for (let i=0; i<fights.length; i++){
        
        fightList += "<li>"+fights[i]+"</li>";

        console.log("Fight added to list successfully: "+fights[i]);
    }
    console.log("Total fights added to the list successfully: "+fights.length);

    fightList += "</ul>";

    document.getElementById("list").innerHTML = fightList;
}

// This event handling code triggers the displayFights function
window.onload=function(){
    displayFights();
};