function createInvoice(invoiceData) {
    console.log("Facture créée :", invoiceData);
}

function readInvoices() {
    return [
        { id: 1, project: "Réparation Cuisine", amount: 200, status: "Payé" },
        { id: 2, project: "Peinture Salon", amount: 150, status: "Non payé" },
    ];
}

function updateInvoice(invoiceId, updatedData) {
    console.log(`Facture avec ID ${invoiceId} mise à jour avec :`, updatedData);
}

function deleteInvoice(invoiceId) {
    console.log(`Facture avec ID ${invoiceId} supprimée.`);
}
