const Personne = function (name, firstName, age, job, hobbies) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.job = job;
    this.hobbies = hobbies;

    // methode avec toute les proprietes
    this.anyPropertyM = function () {
        return "Je suis " + this.firstName +" "+ this.name +","+ " j'ai " + this.age +" ans"+ " et je suis " +
            this.job +"." + " Voici ma passion : " + this.hobbies + "." ;
    }
}
// création tableau classique
let arrayM = [];

// création de 5 nouvelles instances
let raoul = new Personne("leclercq", "raoul", 32, "courtier", "la musique");
let alfred = new Personne("leclercq", "alfred", 28, "livreur", "les jeuxVideo");
let tony = new Personne("leclercq", "tony", 18, "charpentier", "la course à pied");
let pascal = new Personne("leclercq", "pascal", 43, "acteur", "le cinema");
let albert = new Personne("leclercq", "albert", 21, "astronaute", "les echecs");

// placement des instances dans le tableau
arrayM[0]= raoul;
arrayM[1]= alfred;
arrayM[2]= tony;
arrayM[3]= pascal;
arrayM[4]= albert;

// boucle qui permet d'afficher les infos de chaque instance du tableau
for (let i = 0 ; i < arrayM.length ; i++) {
    let infoObjet = document.createElement("div");
    infoObjet.innerHTML = arrayM[i].anyPropertyM();
    document.body.appendChild(infoObjet);
}

