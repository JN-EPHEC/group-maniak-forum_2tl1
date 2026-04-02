import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

class Database {
    private static instance: Database;
    public sequelize: Sequelize;
// private constructor to prevent direct instantiation
    private constructor() {
        const dbUrl = process.env.DATABASE_URL;
// Check if DATABASE_URL is provided
        if (!dbUrl) {
            throw new Error("DATABASE_URL is missing in environment variables");
        }
// Initialize Sequelize with the database URL
        this.sequelize = new Sequelize(dbUrl, {
            logging: false,
        });
// Attempt to connect to the database
        this.connect();
    }
// Static method to get the singleton instance of the Database class
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
// Method to authenticate the connection to the database
    private async connect() {
        try {
            await this.sequelize.authenticate();
            console.log("Database connected successfully!");
        } catch (err) {
            console.error("Database connection error:", err);
        }
    }
}
// Export the Sequelize instance for use in other parts of the application

export default Database.getInstance().sequelize;