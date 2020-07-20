const sendQuery = require('./utils/send-query')

const GET_ALL_TODOS = `
  {
    allTodos {
      data {
        _id
        text
        completed
      }
    }
  }
`

exports.handler = async () => {
  const {data, errors} = sendQuery(GET_ALL_TODOS)

  console.log('data >>>>>>>>>', data)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({todos: data.allTodos.data}),
  }
}
