const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {  // just / according to Chris
    console.log('pg router get');
    const queryText = `SELECT * FROM playground ORDER BY "id";`;  //;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error selecting playground query', err);
            res.sendStatus(500);
        });
});

// router.put('/', (req, res) => {
//     //console.log('router put', req.body);
//     const queryText = `UPDATE "playground" SET "title"= $2, "description"= $3 WHERE "id"=$1`;
//     const queryValues = [req.body.id, req.body.title, req.body.description];
//     pool.query(queryText, queryValues)
//         .then(() => {
//             res.sendStatus(200);
//             console.log("router put worked!");
//         })
//         .catch((err) => {
//             console.log('Error updating movie query', err);
//             res.sendStatus(500)
//         });
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;