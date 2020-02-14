const recipes = {
  FR: [
    {
      id: "1",
      name: "Sauce tomates, haricots rouges",
      image: require('./images/sauce_tomates_haricots_rouges.jpg'),
      servings: 6,
      preparationTime: '30min',
      season: 'Toutes',
      ingredients: [
        { name: "oignon", nb: 1 },
        { name: "gousses d'ail", nb: 2 },
        { name: "boite de colis de tomates", nb: 1 },
        { name: "boite de concassé de tomates", nb: 1 },
        { name: "boite haricots rouges", nb: 1 },
        { name: "sel" },
        { name: "poivre" },
        { name: "huile d'olive" }
      ],
      optionalIngredients: [
        { name: "céleri", nb: 2 },
        { name: "coriandre" },
      ],
      instructions: [
        "Faire revenir l'oigon dans l'huile d'olive",
        "Ajouter les boites de tomates",
        "Ajouter l'ail pressé",
        "Ajouter les haricots rouges",
        "Servir avec du riz ou des pates"
      ],
      optionalInstructions: [
        "Couper le céleri en petits morceaux",
        "Ajouter le céleri et la coriandre"
      ]
    },
    {
      id: "2",
      name: "Gaufres healthy",
      image: require('./images/gaufres.jpg'),
      servings: 3,
      preparationTime: '20min',
      season: 'Toutes',
      ingredients: [
        { name: "oeufs", nb: 2 },
        { name: "compote de pomme", nb: 30 },
        { name: "farine d'epeautre", nb: 140 },
        { name: "levure", nb: 3 },
        { name: "sel" },
      ],
      instructions: [
        "Mixer tous les ingrédients dans un blander",
        "Verser la pate dans un gaufrier",
        "Laisser cuire environ 4 minutes 30",
      ],
    },
    {
      id: "3",
      name: "Panais, sauce tomates, lentilles",
      image: require('./images/panais_sauce_tomates_lentilles.jpg'),
      servings: 4,
      preparationTime: '40min',
      season: 'Hiver',
      ingredients: [
        { name: "oignon", nb: 1 },
        { name: "gousses d'ail", nb: 2 },
        { name: "boite de concassé de tomates", nb: 1 },
        { name: "panais", nb: 400 },
        { name: "lentilles", nb: 200 },
        { name: "sel" },
        { name: "poivre" },
        { name: "origan" },
        { name: "herbe de provence" },
        { name: "huile d'olive" }
      ],
      optionalIngredients: [
        { name: "céleri", nb: 2 },
        { name: "coriandre" },
      ],
      instructions: [
        "Faire cuire les lentilles le temps indiqué sur le paquet",
        "Faire cuire les panais au four à 180°C pendant 15 min",
        "Faire revenir l'oigon dans l'huile d'olive",
        "Ajouter l'ail pressé",
        "Ajouter la boites de tomates concassées",
        "Ajouter les lentilles",
        "Sortir les panais du four et ajouter la sauce"
      ],
      optionalInstructions: [
        "Couper le céleri en petits morceaux",
        "Ajouter le céleri et la coriandre"
      ]
    },
  ], 
  informations: {
    title: "Recettes végétariennes",
    servings: "Nb de personnes : ",
    preparationTime: "Temps : ",
    season: "Saison : ",
    ingredients: "Ingrédients",
    instructions: "Instructions",
    add: "Ajouter cette recette"
  }
};

export default recipes;