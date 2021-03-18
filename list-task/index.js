module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response
    const responseMessage = {list: [
            {
                id: "0505",
                title: "Consultar perfil",
                description: "in-progress",
                responsable: "Raul"

            },
            {
                id: "0502",
                title: "Registrar perfil",
                description: "in-progress",
                responsable: "Rafael"

            },
            {
                id: "0605",
                title: "Reporte de pruebas",
                description: "Done",
                responsable: "Raul"

            },
            {
                id: "6005",
                title: "Pruebas de perfil",
                description: "in-progress",
                responsable: "Jose"

            }
        ]};

    context.res = {
        status: 201,
        body: responseMessage
    };
}