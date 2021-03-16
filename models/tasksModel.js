const db = require('./conn');
const express = require("express");

class tasksModel {
    constructor(id, task_name) {
        this.id = id;
        this.task_name = task_name;
    }
    static async addEntry(task_name) {
        const response = await db.result(`INSERT INTO Tasks (task_name) VALUES ($1)`, [task_name])
        return response;
    }
    async deleteEntry() {
        const response = await db.result(`DELETE FROM Tasks WHERE id = $1` [this.id])
    }
}
module.exports = tasksModel;