
import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
    swaggerDefinition : {
        openapi : "3.0.0",
        info : {
            title : "Mon API de fou malade",
            version : "1.0.0",
        },
        component: {
        securitySchemes:{
            basicAuth:{
                type:"http",
                scheme:'basic'
            },
            digestAuth:{
                type:"http",
                scheme:'digest'
            }
        }
    },
    },
    // Chemin vers les fichiers qui ont des annotations
    apis : ["./src/routes/*.ts","./src/config/swaggerSchemas.ts"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);

