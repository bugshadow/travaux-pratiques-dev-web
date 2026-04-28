# Chapitre 6 : Le Protocole HTTP - Travaux Pratiques

*Note : Ce document contient uniquement mes reponses aux differents exercices pratiques et theoriques du TP.*

## TP 1 : Exploration avec les DevTools

### Exercice 1.4 : Observer les codes de statut

| URL | Methode | Code | Content-Type |
|-----|---------|------|--------------|
| httpbin.org/get | GET | 200 OK | application/json |
| httpbin.org/post | POST | 200 OK | application/json |
| httpbin.org/status/201 | GET (par defaut) | 201 Created | text/html |

## TP 2 : Maîtrise de cURL

### Question 2.1 : Difference entre -i et -v
- `-i` (include) inclut uniquement les en-têtes HTTP de la reponse.
- `-v` (verbose) affiche toute la chronologie (DNS, TCP, en-têtes de requête et de reponse).

### Exercice avance : Commande cURL
```bash
curl -i -X POST \
  -H "Content-Type: application/json" \
  -H "X-Custom-Header: MonHeader" \
  -d '{"action": "test", "value": 42}' \
  https://httpbin.org/post
```

## TP 3 : API REST avec JavaScript

### Exercice pratique : Fonction fetchWithRetry
```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    for (let i = 0; i <= maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.status >= 500 && response.status < 600) {
                throw new Error(`Erreur serveur: ${response.status}`);
            }
            return response;
        } catch (error) {
            console.warn(`Tentative ${i + 1} echouee :`, error.message);
            if (i === maxRetries) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
```

## TP 4 : Analyse des Headers de Securite

### Exercice : Analyse de 3 sites

| Site | HSTS | X-Frame | CSP | Note |
|------|------|---------|-----|------|
| github.com | Oui (max-age=31536000; preload) | DENY | Oui | A+ (Excellent) |
| google.com | Non | SAMEORIGIN | Non | C (Passable) |
| stackoverflow.com | Non | SAMEORIGIN | Oui | B (Bon) |

## Exercices Recapitulatifs

### Exercice 2 : Questions theoriques
- **Quelle est la difference entre no-cache et no-store ?**  
  `no-store` interdit tout stockage, `no-cache` exige la validation aupres du serveur avant d'utiliser le cache.
- **Pourquoi POST n'est-il pas idempotent ?**  
  Une methode idempotente donne le même resultat sur le serveur si elle est executee plusieurs fois (ex: GET). Repeter un POST va generer plusieurs nouvelles entrees.
- **Que se passe-t-il si le serveur renvoie un code 301 ?**  
  C'est une redirection permanente. Le navigateur est automatiquement dirige vers la nouvelle URL stockee dans l'en-tête "Location".
- **a quoi sert le header Origin ?**  
  Il est utilise par le serveur pour le contrôle des requêtes Cross-Origin (CORS).
- **Pourquoi utiliser HttpOnly sur les cookies de session ?**  
  Cela securise le cookie en interdisant aux scripts JavaScript de le lire (ce qui attenue les attaques XSS).
