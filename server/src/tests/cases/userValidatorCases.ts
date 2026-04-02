
export const userCases = [
    // [age,role,email,expected]
    // valeur possible role : "admin"|"user"|"stagiaire|autre"
    // valeur possible age : age<18 | 18<=age<=120 | age>120 
    // valeur possible email : avec @ et . ou sans 
    // 4 x 3 x 2 = 24 scénario possible
    // paire avec Pairwise 
    // age x role 
    // age x email
    // role x email
  // age < 18
  [17, "admin", "yuqi.song@idle.com", false],
  [17, "user", "yuqisongidlecom", false],
  [17, "stagiaire", "yuqi.song@idle.com", true],
  [17, "autre", "yuqi.song@idle.com", "exception"],

  // 18–120
  [26, "admin", "yuqisongidlecom", false],
  [26, "user", "yuqi.song@idle.com", true],
  [26, "stagiaire", "yuqisongidlecom", false],
  [26, "autre", "yuqi.song@idle.com", "exception"],

  // > 120
  [121, "admin", "yuqi.song@idle.com", "exception"],
  [121, "user", "yuqisongidlecom", "exception"],
  [121, "stagiaire", "yuqi.song@idle.com", "exception"],
  [121, "autre", "yuqi.song@idle.com", "exception"],
];