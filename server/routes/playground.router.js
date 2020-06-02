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
router.post('/', (req, res) => {   ///addPlayground
    console.log('pg router post');
    const queryText = `INSERT INTO playground ("pg_name", "address", "img_url", "description") 
                       VALUES ($1, $2, $3, $4);`; //RETURNING "id"?
    const values = [req.body.pg_name, req.body.address, req.body.img_url, req.body.description];
    pool.query(queryText, values)
    .then((response)=>{
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('Error POSTING addPg to the DB', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {   //rejectUnauthenticated,
    console.log(req.params.id);
    const queryText = `DELETE FROM playground WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((response)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
        console.log('Error DELETING playground from DB', error);
        res.sendStatus(500);
    })
});


module.exports = router;