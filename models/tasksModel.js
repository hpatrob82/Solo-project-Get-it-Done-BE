const db = require('./conn');
const express = require("express");

class tasksModel {
    constructor(id, task_name) {
        this.id = id;
        this.task_name = task_name;
    }
    static async getAll() {
        const response = await db.any(`SELECT * FROM tasks;`);
        return response;
    }
    static async addEntry(task_name) {
        const response = await db.result(`INSERT INTO tasks (task_name) VALUES ($1)`, [task_name])
        return response;
    }
    async deleteEntry(id) {
        const response = await db.result(`DELETE FROM tasks WHERE id = $1` [this.id])
        return response;
    }
}
module.exports = tasksModel;