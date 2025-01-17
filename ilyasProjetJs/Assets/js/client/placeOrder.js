function createOrder(orderData) {
    console.log("Commande créée :", orderData);
}

function readOrders() {
    return [
        { id: 1, service: "Plomberie", date: "2025-01-02", status: "En attente" },
        { id: 2, service: "Jardinage", date: "2025-01-03", status: "Confirmé" },
    ];
}

function updateOrder(orderId, updatedData) {
    console.log(`Commande avec ID ${orderId} mise à jour avec :`, updatedData);
}

function deleteOrder(orderId) {
    console.log(`Commande avec ID ${orderId} supprimée.`);
}
