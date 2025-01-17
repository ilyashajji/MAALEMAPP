function createProject(projectData) {
    console.log("Projet créé :", projectData);
}

function readProjects() {
    return [
        { id: 1, title: "Réparation Cuisine", status: "En cours" },
        { id: 2, title: "Peinture Salon", status: "Terminé" },
    ];
}

function updateProject(projectId, updatedData) {
    console.log(`Projet avec ID ${projectId} mis à jour avec :`, updatedData);
}

function deleteProject(projectId) {
    console.log(`Projet avec ID ${projectId} supprimé.`);
}
