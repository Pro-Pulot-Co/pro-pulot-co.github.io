// ========================================
// PRO PULOT CO.
// Premium Members Carousel
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(".carousel");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!carousel) return;

    const card = carousel.querySelector(".member-card");
    if (!card) return;

    const gap = 25;
    const cardWidth = card.offsetWidth + gap;

    let autoSlide;

    function nextSlide() {

        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });

        if (
            carousel.scrollLeft + carousel.clientWidth >=
            carousel.scrollWidth - 5
        ) {

            setTimeout(() => {

                carousel.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });

            }, 500);

        }

    }

    function prevSlide() {

        carousel.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });

    }

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    function startCarousel() {

        autoSlide = setInterval(nextSlide, 4000);

    }

    function stopCarousel() {

        clearInterval(autoSlide);

    }

    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    startCarousel();

});
/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();

        lightbox.classList.add("active");

    });

});

function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});
/* ==========================
   TRANSPARENT NAVBAR
========================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
/* ==========================
   LEADERSHIP PROFILE
========================== */
let currentLeader = "";

let currentProfileType = "leader";

const leaderOrder = [

    "leigh",

    "irik",

    "froii",

    "jessan",

    "aziel",

    "sheena",

    "derence",

    "philip",

    "justice",

    "roch",

    "rovelyn"

];

const specialOrder = [

    "Pao",

    "Sharon",

    "Randy",

    "Roswel",

    "Tonet",

    "Abba"

];

const leaders = {

    leigh:{
    name:"Leigh Pacilan",
    position:"Captain",
    image:"images/officers/Leigh.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Captain of Pro Pulot Co., providing strategic leadership while promoting sportsmanship, teamwork, and organizational excellence throughout the community.",

    responsibilities:[
        "Provide strategic leadership",
        "Oversee club operations",
        "Guide organizational planning",
        "Represent Pro Pulot Co."
    ]
},

    irik:{
    name:"Irik Patria",
    position:"Co-Captain",
    image:"images/officers/Irik.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Co-Captain of Pro Pulot Co., supporting the Captain in leading the organization while coordinating club activities, strengthening teamwork, and ensuring smooth day-to-day operations.",

    responsibilities:[
        "Support the Captain in club leadership",
        "Coordinate team activities and events",
        "Promote teamwork and sportsmanship",
        "Assist in organizational planning"
    ]
},

  froii:{
    name:"Froii Katipunan",
    position:"Treasurer",
    image:"images/officers/Froii.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Treasurer of Pro Pulot Co., overseeing the organization's financial resources while ensuring transparency, accountability, and responsible budget management.",

    responsibilities:[
        "Manage club finances and records",
        "Monitor membership dues",
        "Prepare financial reports",
        "Support budget planning"
    ]
},

    jessan:{
    name:"Jessan Marie Gravador",
    position:"Scheduler",
    image:"images/officers/Jessan.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Scheduler of Pro Pulot Co., coordinating club activities, tournaments, practices, and ensuring members stay informed of upcoming events.",

    responsibilities:[
        "Organize club schedules",
        "Coordinate tournaments and practices",
        "Maintain the activity calendar",
        "Communicate event schedules"
    ]
},

  aziel:{
    name:"Aziel JD Altamarino",
    position:"Software & Social Media Engineer",
    image:"images/officers/aziel.jpg",

    tenure:"2nd Gen Member • Since 2026",

    bio:"Serves as the Systems & Software Engineer of Pro Pulot Co., leading the development, maintenance, and continuous improvement of the organization's official website and digital platforms. As the developer of the official Pro Pulot Co. website, he drives the club's digital initiatives to strengthen communication, streamline operations, and provide members with a modern and engaging online experience.",

    responsibilities:[
        "Design, develop, and maintain the official Pro Pulot Co. website",
        "Manage the organization's digital systems and technology solutions",
        "Implement new features and continuously improve the member experience",
        "Support digital communications and lead technology innovation"
    ]
},

   sheena:{
    name:"Sheena Adlao",
    position:"Equipment Manager",
    image:"images/officers/Sheena.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Equipment Manager of Pro Pulot Co., ensuring club equipment is properly maintained, organized, and available for every activity and event.",

    responsibilities:[
        "Maintain club equipment",
        "Prepare equipment for events",
        "Monitor equipment inventory",
        "Ensure equipment readiness"
    ]
},

    justice:{
    name:"Justice Villanueva",
    position:"Member Onboarding Associate",
    image:"images/officers/Justice.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as a Member Onboarding Associate of Pro Pulot Co., ensuring every new member feels welcomed, informed, and connected to the community.",

    responsibilities:[
        "Welcome and orient new members",
        "Introduce club programs and activities",
        "Assist with member integration",
        "Promote a positive community experience"
    ]
},

    roch:{
    name:"Roch Laquinon",
    position:"Member Onboarding Associate",
    image:"images/officers/Roch.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as a Member Onboarding Associate of Pro Pulot Co., helping new members become active participants while fostering an inclusive and supportive environment.",

    responsibilities:[
        "Assist with member onboarding",
        "Support community engagement activities",
        "Encourage participation in club events",
        "Help build an inclusive community"
    ]
},

  rovelyn:{
    name:"Rovelyn Amil",
    position:"Member Onboarding Associate",
    image:"images/officers/rovelyn.jpg",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as a Member Onboarding Associate of Pro Pulot Co., creating a welcoming environment that encourages every member to grow, participate, and enjoy the community.",

    responsibilities:[
        "Welcome new members",
        "Support onboarding activities",
        "Encourage active participation",
        "Promote a friendly club culture"
    ]
},

   derence:{
    name:"Derence Gadiana",
    position:"Dink Master 1",
    image:"images/officers/Derence.png",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Dink Master 1 of Pro Pulot Co., mentoring members in developing proper pickleball fundamentals, refining techniques, and building confidence on the court.",

    responsibilities:[
        "Coach members on fundamental pickleball skills",
        "Demonstrate proper techniques and strategies",
        "Support player development during club activities",
        "Promote sportsmanship and continuous learning"
    ]
},
    
  philip:{
    name:"Philip Clavecillas",
    position:"Dink Master 2",
    image:"images/officers/Philip.png",

    tenure:"Founding Member • Since 2026",

    bio:"Serves as Dink Master 2 of Pro Pulot Co., assisting in player development by helping members improve their skills, confidence, and understanding of the game.",

    responsibilities:[
        "Assist in coaching new members",
        "Provide technical guidance during practices",
        "Encourage continuous skill development",
        "Support community training activities"
    ]
}

};

const specialMembers = {

    Pao:{
        name:"Pao Nemil",
        title:"Featured Special Member",
        image:"images/feature/member1.jpg",

        tenure:"Special Guest",

        bio:"A valued friend of Pro Pulot Co. who joined the community during a memorable club event and continues to share the spirit of sportsmanship and fellowship.",

        responsibilities:[
            "Promoted camaraderie and friendship",
            "Supported Pro Pulot Co. events"
            ]
    },

    Sharon:{
        name:"Sharon Ano-os",
        title:"Featured Special Member",
        image:"images/feature/member2.png",

        tenure:"Special Guest",

        bio:"A valued guest of Pro Pulot Co. who joined the community during a special club event, contributing to an atmosphere of friendship, sportsmanship, and shared enthusiasm for pickleball.",

        responsibilities:[
        "Built meaningful connections with members",
        "Promoted sportsmanship and camaraderie",
            ]
        
    },

    Randy:{
        name:"Randy Cipriano",
        title:"Featured Special Member",
        image:"images/feature/member3.png",

        tenure:"Special Guest",

        bio:"Joined Pro Pulot Co. during a memorable gathering, becoming part of a special occasion that strengthened friendships and celebrated the spirit of the pickleball community.",
 
        responsibilities:[
        "Supported community engagement",
        "Encouraged positive fellowship",
            ]
        
    },

    Roswel:{
        name:"Roswel Dayanan",
        title:"Featured Special Member",
        image:"images/feature/member4.png",

        tenure:"Special Guest",

        bio:"Recognized as a featured special member for sharing meaningful moments with Pro Pulot Co. through fellowship, community events, and a genuine passion for bringing people together through sport.",

        responsibilities:[
        "Joined community events",
        "Fostered friendship and unity",
        "Shared positive experiences with members",
        "Contributed to memorable club moments"
    ]
        
    },
    
Tonet:{
        name:"Tonet Macatunog",
        title:"Featured Special Member",
        image:"images/feature/member5.png",

        tenure:"Special Guest",

        bio:"An active member of Pro Pulot Co. who embodies the values of teamwork, sportsmanship, and camaraderie, consistently contributing to a positive and welcoming pickleball community.",

        responsibilities:[
        "Fostered friendship and unity",
        "Shared positive experiences with members",
    ]
        
    },

Abba:{
        name:"Bang Teves",
        title:"Featured Special Member",
        image:"images/feature/member6.png",

        tenure:"Special Guest",

        bio:"A proud member of Pro Pulot Co., dedicated to fostering friendship, continuous growth, and a shared passion for pickleball while helping strengthen the spirit of the community.",
        responsibilities:[
        "Fostered friendship and unity",
        "Shared positive experiences with members",
    ]
        
    }
};

const members = {

Agnes:{
    name:"Agnes",
    title:"Official Member",
    image:"images/Agnes.png",

    tenure:"1st Gen Member • Since 2026",

    bio:"An active member of Pro Pulot Co. who values friendship, teamwork, and continuous improvement while helping foster a welcoming and supportive pickleball community.",

    responsibilities:[
        "Actively participates in club activities",
        "Promotes teamwork and sportsmanship",
        "Supports community events",
        "Encourages a positive club environment"
    ]
},

Cherry:{
    name:"Cherry",
    title:"Official Member",
    image:"images/Cherry2.png",

    tenure:"1st Gen Member • Since 2026",

    bio:"A dedicated member of Pro Pulot Co. who enjoys building lasting friendships through pickleball while contributing to the club's inclusive and energetic community.",

    responsibilities:[
        "Participates in club activities",
        "Builds meaningful friendships",
        "Supports community engagement",
        "Promotes sportsmanship"
    ]
},

CherryM:{
    name:"Cherry M",
    title:"Official Member",
    image:"images/Cherry.png",

    tenure:"3rd Gen Member • Since 2026",

    bio:"A valued member of Pro Pulot Co. who contributes to the club's positive culture through active participation, teamwork, and a genuine passion for pickleball.",

    responsibilities:[
        "Supports club programs",
        "Participates in community events",
        "Encourages teamwork",
        "Promotes a welcoming atmosphere"
    ]
},

Derence:{
    name:"Derence Gadiana",
    title:"Official Member",
    image:"images/Derence.png",

    tenure:"Founding Member • Since 2026",

    bio:"A founding member of Pro Pulot Co. recognized for mentoring fellow players, promoting skill development, and helping strengthen the club's culture of continuous learning.",

    responsibilities:[
        "Founding member of Pro Pulot Co.",
        "Supports player development",
        "Promotes teamwork and sportsmanship",
        "Contributes to club activities"
    ]
},

Diosa:{
    name:"Diosa",
    title:"Official Member",
    image:"images/Diosa.png",

    tenure:"3rd Gen Member • Since 2026",

    bio:"An enthusiastic member of Pro Pulot Co. who enjoys connecting with fellow players while promoting friendship, respect, and sportsmanship within the community.",

    responsibilities:[
        "Participates in club events",
        "Promotes friendship and respect",
        "Supports community growth",
        "Encourages positive engagement"
    ]
},

Froii:{
    name:"Froii Katipunan",
    title:"Official Member",
    image:"images/Froii.png",

    tenure:"Founding Member • Since 2026",

    bio:"A founding member of Pro Pulot Co. who exemplifies commitment, teamwork, and sportsmanship while helping cultivate a welcoming and supportive pickleball community.",

    responsibilities:[
        "Founding member of Pro Pulot Co.",
        "Supports club activities and events",
        "Promotes teamwork and sportsmanship",
        "Contributes to community growth"
    ]
},

Irik:{
    name:"Irik Patria",
    title:"Official Member",
    image:"images/Irik3.png",

    tenure:"Founding Member • Since 2026",

    bio:"A founding member of Pro Pulot Co. recognized for leadership, collaboration, and dedication to building a strong and united pickleball community.",

    responsibilities:[
        "Founding member of Pro Pulot Co.",
        "Promotes leadership through example",
        "Supports community initiatives",
        "Encourages positive member engagement"
    ]
},

Irish:{
    name:"Irish",
    title:"Official Member",
    image:"images/Irish.png",

    tenure:"3rd Gen Member • Since 2026",

    bio:"A valued member of Pro Pulot Co. who embraces friendship, teamwork, and continuous growth while contributing to the club's vibrant and inclusive community.",

    responsibilities:[
        "Participates in club activities",
        "Supports community events",
        "Builds meaningful friendships",
        "Promotes sportsmanship"
    ]
},

JD:{
    name:"JD Altamarino",
    title:"Official Member",
    image:"images/JD.png",

    tenure:"2nd Gen Member • Since 2026",

    bio:"An active member of Pro Pulot Co. who contributes both on and off the court by supporting the club's digital initiatives while promoting innovation, teamwork, and community engagement.",

    responsibilities:[
        "Supports the club's digital initiatives",
        "Promotes innovation and collaboration",
        "Participates in club activities",
        "Encourages community engagement"
    ]
},

Jan:{
    name:"Jan",
    title:"Official Member",
    image:"images/Knarly.png",

    tenure:"2nd Gen Member • Since 2026",

    bio:"A dedicated member of Pro Pulot Co. who values teamwork, sportsmanship, and meaningful connections while actively participating in the club's activities and events.",

    responsibilities:[
        "Participates in club activities",
        "Supports a positive team culture",
        "Promotes friendship and respect",
        "Contributes to community engagement"
    ]
},

Jessan:{

    name:"Jessan Marie Gravador",
    title:"Official Member",
    image:"images/Jessan.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Jessan is a dependable and enthusiastic member of Pro Pulot Co. who consistently supports the community through active participation and teamwork. She is known for her positive attitude, sportsmanship, and willingness to help both on and off the court.",
    responsibilities:[
        "Actively participates in club activities and tournaments",
        "Promotes teamwork and sportsmanship",
        "Supports community events and initiatives"
    ]

},

Jikoy:{

    name:"Jikoy",
    title:"Official Member",
    image:"images/Jikoy.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Jikoy brings enthusiasm and energy to every game. As an active member of the community, he values camaraderie, continuous improvement, and creating an enjoyable environment for everyone.",
    responsibilities:[
        "Represents the values of Pro Pulot Co.",
        "Encourages fellow members during games",
        "Participates in club activities"
    ]

},

Justice:{

    name:"Justice Villanueva",
    title:"Official Member",
    image:"images/Justice.png",
    tenure:"Founding Member • Since 2026",
    bio:"Justice is one of the welcoming faces of Pro Pulot Co., always helping new members feel comfortable and included. His approachable personality and commitment to the community make him a valuable part of the organization.",
    responsibilities:[
        "Assists in welcoming new members",
        "Supports onboarding activities",
        "Promotes an inclusive community"
    ]

},

Leigh:{

    name:"Leigh Pacilan",
    title:"Official Member",
    image:"images/Leigh.png",
    tenure:"Founding Member • Since 2026",
    bio:"Leigh is a dedicated member whose passion for pickleball inspires others. Through leadership, teamwork, and consistent participation, Leigh contributes to the growth and success of the Pro Pulot Co. community.",
    responsibilities:[
        "Supports club programs and activities",
        "Encourages member engagement",
        "Promotes teamwork and sportsmanship"
    ]

},

Louell:{

    name:"Louell",
    title:"Official Member",
    image:"images/Louell.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Louell is an active member who enjoys building friendships through pickleball. With a positive outlook and cooperative spirit, Louell contributes to the welcoming culture of Pro Pulot Co.",
    responsibilities:[
        "Participates in community events",
        "Supports fellow members",
        "Represents the values of the club"
    ]

},

Philip:{

    name:"Philip",
    title:"Official Member",
    image:"images/Philip.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Philip is a committed member of Pro Pulot Co. who enjoys the competitive and social aspects of pickleball. He consistently contributes to maintaining a welcoming environment while encouraging fellow members to improve their game.",
    responsibilities:[
        "Actively participates in club activities",
        "Supports fellow members",
        "Promotes sportsmanship and teamwork"
    ]

},

Roch:{

    name:"Roch Laquinon",
    title:"Official Member",
    image:"images/Roch.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Roch is a passionate member dedicated to fostering an inclusive and enjoyable pickleball community. Through active participation and support for new members, Roch helps strengthen the club's culture.",
    responsibilities:[
        "Assists in community activities",
        "Supports new member engagement",
        "Represents Pro Pulot Co. with pride"
    ]

},

Rochelle:{

    name:"Rochelle",
    title:"Official Member",
    image:"images/Rochelle.png",
    tenure:"2nd Gen Member • Since 2026",
    bio:"Rochelle brings enthusiasm, positivity, and dedication to every club activity. She enjoys building friendships through pickleball while contributing to the continued growth of the Pro Pulot Co. family.",
    responsibilities:[
        "Participates in club events",
        "Encourages teamwork",
        "Promotes a welcoming environment"
    ]

},

Rovie:{

    name:"Rovie",
    title:"Official Member",
    image:"images/Rovie2.png",
    tenure:"2nd Gen Member • Since 2026",
    bio:"Rovie is an energetic member who enjoys both the recreational and competitive sides of pickleball. Through active participation and positive engagement, Rovie helps create a supportive community for everyone.",
    responsibilities:[
        "Supports club activities",
        "Encourages fellow members",
        "Demonstrates good sportsmanship"
    ]

},

Ryle:{

    name:"Ryle",
    title:"Official Member",
    image:"images/Ryle.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Ryle is a valued member of Pro Pulot Co. known for dedication, teamwork, and a genuine passion for pickleball. He contributes to the club by participating actively and helping build a strong sense of community.",
    responsibilities:[
        "Represents the club positively",
        "Participates in tournaments and events",
        "Supports community engagement"
    ]

},

Sheena:{

    name:"Sheena Adlao",
    title:"Official Member",
    image:"images/Sheena.png",
    tenure:"Founding Member • Since 2026",
    bio:"Sheena is a dedicated member of Pro Pulot Co. who values teamwork, friendship, and continuous growth in the sport of pickleball. Her positive attitude and active participation contribute to the welcoming culture of the community.",
    responsibilities:[
        "Supports club activities and events",
        "Encourages teamwork and camaraderie",
        "Promotes a positive member experience"
    ]

},

Stancy:{

    name:"Stancy",
    title:"Official Member",
    image:"images/Stancy.png",
    tenure:"1st Gen Member • Since 2026",
    bio:"Stancy is an enthusiastic member who enjoys the competitive spirit and community that Pro Pulot Co. offers. Through active participation and sportsmanship, Stancy helps strengthen the club's vibrant environment.",
    responsibilities:[
        "Participates in community activities",
        "Supports fellow members",
        "Represents the values of Pro Pulot Co."
    ]

},
    
};

const leaderModal = document.getElementById("leader-modal");

function loadLeader(id){

    currentLeader = id;
    currentProfileType = "leader";
    document.getElementById("profile-type-title").textContent =
    "Official Leadership Profile";

    document.getElementById("profile-heading").textContent =
    "Leadership Profile";

    document.getElementById("responsibility-heading").textContent =
    "Primary Responsibilities";
    
    const leader = leaders[id];

    console.log("Position:", leader.position);

    document.getElementById("leader-photo").src = leader.image;
    document.getElementById("leader-name").textContent = leader.name;
    document.getElementById("leader-position").textContent = leader.position;

    document.getElementById("leader-tenure").textContent = leader.tenure;
    document.getElementById("leader-bio").textContent = leader.bio;

    const responsibilityList = document.getElementById("leader-responsibilities");

    responsibilityList.innerHTML = "";

   if (leader.responsibilities) {

    leader.responsibilities.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        responsibilityList.appendChild(li);

    });

   }
}

function loadSpecialMember(id){

    currentLeader = id;
    currentProfileType = "special";
    document.getElementById("profile-type-title").textContent =
    "Featured Special Member";

    document.getElementById("profile-heading").textContent =
    "Featured Profile";

    document.getElementById("responsibility-heading").textContent =
    "Highlights";
    
    const member = specialMembers[id];

    document.getElementById("leader-photo").src = member.image;

    document.getElementById("leader-name").textContent = member.name;

    document.getElementById("leader-position").textContent = member.title;

    document.getElementById("leader-tenure").textContent = member.tenure;

    document.getElementById("leader-bio").textContent = member.bio;

    const responsibilityList =
        document.getElementById("leader-responsibilities");

    responsibilityList.innerHTML = "";

    member.responsibilities.forEach(item=>{

        const li = document.createElement("li");

        li.textContent = item;

        responsibilityList.appendChild(li);

    });

}

function loadMember(id){

    currentLeader = id;
    currentProfileType = "member";

    document.getElementById("profile-type-title").textContent = "Member Profile";

    document.getElementById("profile-heading").textContent =
    "Member Profile";

    document.getElementById("responsibility-heading").textContent =
    "Community Contributions";
    
    const member = members[id];

    document.getElementById("leader-photo").src = member.image;
    document.getElementById("leader-name").textContent = member.name;
    document.getElementById("leader-position").textContent = member.title;
    document.getElementById("leader-tenure").textContent = member.tenure;
    document.getElementById("leader-bio").textContent = member.bio;

    const responsibilityList =
        document.getElementById("leader-responsibilities");

    responsibilityList.innerHTML = "";

    member.responsibilities.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;
        responsibilityList.appendChild(li);

    });

}

document.querySelectorAll(".leader-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        loadLeader(this.dataset.leader);

        leaderModal.classList.add("active");

    });

});

document.querySelectorAll(".directory-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        const id = this.dataset.member;

        loadMember(id);

        leaderModal.classList.add("active");

    });

});

document.querySelectorAll(".featured-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        const id = this.dataset.special;

        loadSpecialMember(id);

        leaderModal.classList.add("active");

    });

});

document.querySelector(".leader-close").onclick=function(){

    leaderModal.classList.remove("active");

}

leaderModal.onclick=function(e){

    if(e.target===leaderModal){

        leaderModal.classList.remove("active");

    }

}

document.getElementById("leader-next").onclick = function(){

    if(currentProfileType === "special"){

        console.log(currentLeader);
        console.log(specialOrder);
        console.log(specialOrder.indexOf(currentLeader));
        
        let index = specialOrder.indexOf(currentLeader);

        index++;

        if(index >= specialOrder.length){
            index = 0;
        }

        loadSpecialMember(specialOrder[index]);

    }else{

        let index = leaderOrder.indexOf(currentLeader);

        index++;

        if(index >= leaderOrder.length){
            index = 0;
        }

        loadLeader(leaderOrder[index]);

    }

};

document.getElementById("leader-prev").onclick = function(){

    if(currentProfileType === "special"){

        let index = specialOrder.indexOf(currentLeader);

        index--;

        if(index < 0){
            index = specialOrder.length - 1;
        }

        loadSpecialMember(specialOrder[index]);

    }else{

        let index = leaderOrder.indexOf(currentLeader);

        index--;

        if(index < 0){
            index = leaderOrder.length - 1;
        }

        loadLeader(leaderOrder[index]);

    }

};
