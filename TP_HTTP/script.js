// Code JavaScript pour l'Exercice 1 (Client HTTP)
async function sendRequest() {
    const method = document.getElementById('req-method').value;
    const url = document.getElementById('req-url').value;
    const bodyContent = document.getElementById('req-body').value;
    
    const responseContainerEl = document.getElementById('client-response');
    const statusEl = document.getElementById('res-status');
    const bodyEl = document.getElementById('res-body');
    
    statusEl.textContent = "Chargement...";
    bodyEl.textContent = "";
    responseContainerEl.style.display = "block";

    try {
        const options = {
            method: method,
            headers: {}
        };

        // Si on a du contenu, et c'est ni GET ni HEAD, on ajoute le body
        if (bodyContent && ["POST", "PUT", "PATCH"].includes(method)) {
            options.body = bodyContent;
            options.headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, options);
        
        // Mettre a jour le statut visuel
        statusEl.textContent = `${response.status} ${response.statusText}`;
        statusEl.style.color = response.ok ? "green" : "red";

        // Extraction des donnees
        const data = await response.text();
        
        try {
            // Essayer de formater joliment si c'est du JSON
            const jsonData = JSON.parse(data);
            bodyEl.textContent = JSON.stringify(jsonData, null, 2);
        } catch(e) {
            // Sinon afficher en texte brut
            bodyEl.textContent = data;
        }

    } catch (error) {
        statusEl.textContent = "Erreur de requête";
        statusEl.style.color = "red";
        bodyEl.textContent = error.toString();
    }
}