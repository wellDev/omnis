const knex = require("../database")

const UserController = {

    // Create new users
    async create(req, res){
        try{
            const { email, password } = req.body
            const results = await knex('users').insert({
                email,
                password
            });
            return res.status(200).send(results)
        }catch(error){
            next(error)
        }
    },

    // Show Users
    async read(req, res, next){
        try{
            const { id, email, created_at, updated_at, page = 1 } = req.query
            const countObj = knex('users').count()

            const query = knex('users')
				.limit(5)
                .offset((page - 1) * 5)
                
            if(id){ 
                query.where({id}) 

                countObj
                .where({ id })
            }
            if(email){ query.where({email}) }
            if(created_at){ query.where({created_at}) }
            if(updated_at){ query.where({updated_at}) }

			const [count] = await countObj

            res.header('X-Total-Count', count["count(*)"] )
            
			const results = await query

			return res.json(results);
        }catch(error){
            next(error)
        }
    },

	async update(req, res, next){
		try{
			const { email } = req.body;
			const { id } = req.params;

			await knex('users')
			.update({ email })
			.where({ id })

			return res.send()
		}catch(error){
			next(error)	
		}
	},

	async delete(req, res, next){
		try{
			const { id } =  req.params
			await knex('users')
			.where({ id })
			.del()
			
			return res.send()
		}catch(error){
			next(error)
		}
	}
}

// Exporting the object 
module.exports = UserController;