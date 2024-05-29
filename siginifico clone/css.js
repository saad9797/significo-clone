//when position is absolute and you are centering a div
//toh bhaijo bhi height ya width do ge uske respect me center hota hai or agr jese hejight ke repect me center nhi krna toh height mt do

//jab theme color dedia ho toh bg color nhi dena wo override krdega

//any object not given height-> is remain blank until a text,img etc is added and i it will take only that much height that the text or the image requires

//no wrap ka matlab sab aik hi line me ayen gi cheezen or warp matlab jab jgah khata hojae toh dusri line me ajaen whitespace nowrap is tailwind css property

//absolute lagane se utna hi space consume hoga jitna text hai matlab block element nahi banta

//allignment ke lie div use hota hai or designing ke lie element

//kisi cheez ki height ziadah ho lambi jaa rhi ho toh woh define na hi kro toh ACha hai

//jab bhi kabhi height define kie bghair kisi div me kaam krna ho tah usko padding dedo

//height mostly issliye define nhi krte kiun ke div lamba neeche tak jaarha hota hai

//when designing the second part of a page first give width and then nexsteps like height,alignement etc.

//px parent me define kro py child me

//better approach ke joo bhi root element at ahai usko width assign kro or uske childs ko height

//our solutions wale button me aik div bnaya hai jiske andar aik div hai jiska overflow hodden hai or uske andar span tag hai jo nline block hai or usko uper neeche translate y se kra skhte hai toh woh jese hi uper jayega gayab hojayega

//flex element ho h na di jae toh woh apne parent ki height inherit krta hai
//usko inline bnane ke lie items center dedo

//sticky elements ko parent ke respect me rok skhte hai hain
//jisko rokna hai usko sticky top-0 left-0
//or parent ko relative dedo
// parent:craft section w-full px-10 flex gap-10 justify-between py-10 relative  items-start
// child sticky:ltext w-[50%] w-1/2 sticky top-0 left-0  bg-yellow-500

//image ya text ko dalne se pehle div bnai uske andar dalo

//remember to align with respect to div use flex

//absolute is used effectively only in the first landing page of the application

//flex usko dete hain jiske child ko align krna ho or absolute usko jisko khud ko align krna ho

//parent element mostly consist of aligm=nment
//second parent element mostly consist of properties
//i.e example 1st parent 2nd second parent of elemtn 1st is actually root
// slide w-full h-screen flex-shrink-0 relative flex items-center justify-center
// w-[60%] text-center font-pp-neue-machina relative


//images ko hmesha text ke bahir wale div me bnaya hai
//kch iss type ka structure follow hua hai
// section
//     ->textdiv
//     ->imgdiv


// /absolute has some default value to overcome that by tp-0 left-0 or align according to need 

// whenever code is working inappropriately in css:
// it may be a possibility that by accident ap ne height wa width ya kch or 
// do dfa define krdi ho 
//iss liye it gives a different result whenever the page is refreshed

//for adding a small border (not full) a div is used

//to align all elements in a single coloumn:
// Removed flex and flex-col classes from the outermost div.
// Added mx-auto (margin-auto) class to the image container to center it horizontally.
// Removed text class and added mx-auto to center the text.
// Added block class to the button to ensure it takes up the full width of its container and centers it horizontally.


//css also has variables can be defined after --