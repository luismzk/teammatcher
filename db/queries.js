const Pool = require('pg').Pool

const pool = new Pool({
  user: 'luismzk',
  host: 'localhost',
  database: 'teammatcher',
  password: 'martinezkowalski',
  port: 5433,
})

const getUsers = (request, response) => {
  	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    	if (error) {
      		throw error
    	}
    	response.status(200).json(results.rows)
  	})
}


const createUser = (request, response) => {
  const { first_name, last_name, user_name, password, email } = request.body

  pool.query('INSERT INTO users (first_name, last_name, user_name, password, email) VALUES ($1, $2, $3, $4, $5)',
			 	[first_name, last_name, user_name, password, email], (error, results) => {
				    if (error) {
				      	throw error
				    }
				    response.status(201).send(`User added with ID: ${result.insertId}`)
		  		})
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      	throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {

  getUsers,
  //getUserById,
  createUser,
  //updateUser,
  deleteUser

}