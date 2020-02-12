const recipes = {
  FR: [
    {
      id: "1",
      name: "Sauce tomates, haricots rouges",
      image: require('./images/sauce_tomates_haricots_rouges.jpg'),
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
        { name: "persil" },
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
        "Ajouter le céleri et le persil"
      ]
    },
    {
      id: "2",
      name: "Gaufres healthy",
      image: require('./images/gaufres.jpg'),
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
    }
  ]
};

export default recipes;