import sql from "better-sqlite3";

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //added 2s to test suspense
    // throw new Error('Failed'); //added to test error.js
    return db.prepare('SELECT * FROM meals').all();
}