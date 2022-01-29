const { Superhero } = require('./../models');

module.exports.create = async (req, res, next) => {
    const { body } = req;
    try {
        const createdHero = await Superhero.create(body);
        if (createdHero) {
            return res.status(200).send({ data: createdHero });
        }
        res.status(400).send('Something going wrong');
    }catch(err){
        next(err);
    }
}

module.exports.parseAllHeroes = async (req, res)=>{
    const {params: {pageId}} = req
    try{
        const allHero = await Superhero.findAll({limit: 5, offset: (pageId-1)*5})
        if(allHero){
            return res.status(200).send(allHero)
        }
    }catch(e){
        console.log(e)
    }
}


module.exports.editHero = async (req, res, next) => {
    try {
      const [updRowsCount, updRows] = await Superhero.update(req.body, {
        where: {
          id: req.params.superheroId,
        },
        returning: true,
      });
      if (updRowsCount) {
        const data = updRows.get();
        return res.status(201).send(data);
      }
      return next(new Error());
    } catch (e) {
      next(e);
    }
  };

  module.exports.deleteHero = async (req, res, next) => {
    try {
      const foundHero = await Superhero.destroy({
        where: {
          id: req.params.userId,
        },
      });
      if (foundHero) {
        return res.status(201).send(foundHero);
      }
      return next(new Error());
    } catch (e) {
      next(e);
    }
  };


