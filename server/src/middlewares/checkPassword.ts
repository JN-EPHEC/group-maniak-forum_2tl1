import type { Request, Response, NextFunction } from "express";

export const checkPassword = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(401).json({ message: "Veuillez entrer un mot de passe" });
    }

    // Tests
    const isLongEnough = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (!isLongEnough) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères" });
    }
    if (!hasUppercase) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins une majuscule" });
    }
    if (!hasLowercase) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins une minuscule" });
    }
    if (!hasDigit) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins un chiffre" });
    }
    if (!hasSpecial) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins un caractère spécial" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: "Erreur interne middleware checkPassword" });
  }
};