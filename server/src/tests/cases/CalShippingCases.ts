export const ShippingCases = [
    // [Dist, Poids, Type, Attendu, Description]
    [0,5,"standard",10,"Couvre la paire de base (D1, W1) et(W1, T1)."],
    [0,25,"express",30,"Couvre la paire de base (D1, W2) et(W2, T2)."],
    [51,5,"express",50,"Couvre la paire de base (D2, T2)."],
    [51,25,"standard",37.5,"Couvre la paire de base (D2, W2)"],
    [1500,5,"express",100,"Couvre la paire de base (D3, W1) et(D3, T2)."],
    [1500,25,"standard",75,"Couvre la paire de base (D3, W2) et(D3, T1)."],

    //erreurs
    [-1,5,"standard","Exception"," Distance négative interdite"],
    [10,0,"standard","Exception","Poids nul interdit"],
    [10,-5,"standard","Exception","Poids négatif interdit"],
    [10,51,"standard","Exception","Poids trop lourd interdit"],
];

