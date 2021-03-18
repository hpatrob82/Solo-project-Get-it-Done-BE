'use strict';

const express = require('express'),
    router = express.Router(),
    tasksModel = require('../models/tasksModel');

router.get('/:name', async(req, res) => {
    const { name } = req.params;
    const taskName = await tasksModel.getByName(name);
    if (taskName) {
        res.json(taskName).status(200);
    } else {
        res.status(400);
    }

});
router.get('/', async(req, res) => {
    const tasksData = await tasksModel.getAll();
    res.json(tasksData).status(200);
});

router.post('/', async(req, res) => {
    const { task_name } = req.body;
    const response = await tasksModel.addEntry(task_name);
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('/tasks')
    } else {
        res.sendStatus(500);
    }
})

router.post('/delete', async(req, res) => {
    const { task_name } = req.body
    const tasks = new tasksModel(tasks_id);
    const response = await comics.deleteEntry();
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('/tasks')
    } else {
        res.sendStatus(500);
    }
})

module.exports = router;