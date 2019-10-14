const db = require('../database')

module.exports={
    getMovie:(req,res)=>{
        let sql = `select * from movies`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    addMovie:(req,res)=>{
        console.log('tes');
        let {nama,tahun,description}=req.body
        let sql = `insert into movies values (0,'${nama}',${tahun},'${description}')`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    deleteMovie:(req,res)=>{
        let {id}=req.body
        let sql = `delete from movies where id=${id}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    updateMovie:(req,res)=>{
        console.log('tes');
        let {id,nama,tahun,description}=req.body
        let sql = `update movies set nama='${nama}', tahun=${tahun}, description='${description}' where id=${id}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}