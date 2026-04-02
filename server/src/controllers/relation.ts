import express from "express";
import groupes from "../models/groupes.js";
import artistes from "../models/artistes.js";
// Déclaration des relations entre les models
groupes.hasMany(artistes,{
    foreignKey: "groupeId",
    as: "artistes"
});
artistes.belongsTo(groupes,{
    foreignKey: "groupeId",
    as: "groupe"
})

export default {groupes,artistes};