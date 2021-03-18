module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response
    const responseMessage =
            {
                id: "6005",
                title: "Pruebas de perfil",
                description: "in-progress",
                responsable: "Jose"

            };
    context.res = {
        status: 201,
        body: responseMessage
    };
}