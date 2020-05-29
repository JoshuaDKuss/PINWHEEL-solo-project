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
//      console.log('pg router put');
//     //console.log('router put', req.body);
//     const queryText = `UPDATE "playground" SET "description"= $4 WHERE "id"=$1`;
//     const queryValues = [req.body.id, req.body.description];
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
// router.post('/', (req, res) => {
//     console.log('pg router post');
//     const queryText = `INSERT INTO "playground" ("description") VALUES ($1);`;
//     const values = [req.body.description];
//     pool.query(queryText, values)
//     .then((response)=>{
//         res.sendStatus(201)
//     })
//     .catch((error)=>{
//         console.log('Error POSTING to the DB', error);
//         res.sendStatus(500);
//     })
// });

module.exports = router;