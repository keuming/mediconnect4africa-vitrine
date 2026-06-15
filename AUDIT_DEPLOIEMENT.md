# Audit & Préparation Déploiement — Site Vitrine MediConnect Africa

**Domaine cible :** www.mediconnect4africa.cloud (vitrine)
**Domaine app dashboard :** manager.mediconnect4africa.cloud (existant — projet `mediconnect-m9xf`)

---

## 1. Constat sur le projet uploadé

Le zip fourni contient le **projet Manus complet** (React 19 + tRPC 11 + Drizzle ORM + MySQL/TiDB + OAuth Manus + Forge API). Ce projet :

- est conçu pour la **plateforme Manus** (auth OAuth Manus, base MySQL/TiDB, clés Forge API) ;
- n'est **pas directement déployable sur Vercel** sans réécrire l'authentification, migrer MySQL→Postgres/Neon, et obtenir des clés Forge API.

**Cependant**, la véritable "vitrine" que les visiteurs voient (`client/public/*.html`) est constituée de **9 pages HTML statiques autonomes**, déjà fonctionnelles, sans dépendance Manus. C'est ce que j'ai extrait, audité, corrigé et préparé pour Vercel.

---

## 2. Pages incluses dans la vitrine statique

| Fichier | Rôle |
|---|---|
| `mediconnect.html` | Page d'accueil (devient `/`) |
| `prestataires.html` | Présentation prestataires |
| `demo.html` | Page de démonstration (comptes test) |
| `offres-assurance.html` | Catalogue offres d'assurance (API live) |
| `offre-details.html` | Détail d'une offre + souscription |
| `confirmation-souscription.html` | Confirmation souscription + PDF |
| `faq.html` | FAQ |
| `api-docs.html` | Documentation API (référence/exemples) |
| `dashboard.html` | Dashboard postulants — **⚠️ voir limitation §4** |

Plus assets : `i18n.js`, `favicon.ico/png`, documents légaux (`CGU.txt`, `Politique_Confidentialite.txt`, `Guide_Patient.txt`, `MediConnect-API-Collection.json`, `Contrat_Standard_Apporteur_MediConnect.docx`).

---

## 3. Corrections appliquées

### 3.1 Cohérence des domaines (48 occurrences corrigées)
Avec la nouvelle séparation des domaines :
- **www.mediconnect4africa.cloud** = vitrine (ce projet)
- **manager.mediconnect4africa.cloud** = application dashboard (12 espaces métier)

Tous les liens qui pointaient vers `https://mediconnect4africa.cloud/...` (login, register, dashboard, bd, ou plateforme générale) ont été réécrits vers `https://manager.mediconnect4africa.cloud/...` :

| Avant | Après | Occurrences |
|---|---|---|
| `mediconnect4africa.cloud/login` | `manager.mediconnect4africa.cloud/login` | 18 |
| `mediconnect4africa.cloud/register` | `manager.mediconnect4africa.cloud/register` | 14 |
| `mediconnect4africa.cloud/bd` | `manager.mediconnect4africa.cloud/bd` | 6 |
| `mediconnect4africa.cloud/dashboard` | `manager.mediconnect4africa.cloud/dashboard` | 1 |
| `mediconnect4africa.cloud` (liens "Plateforme"/"Écosystème"/"Accéder à la plateforme"/badge APK) | `manager.mediconnect4africa.cloud` | 9 |
| `og:url` (mediconnect.html) | `www.mediconnect4africa.cloud` | 1 |

### 3.2 Nettoyage technique
- Suppression du dossier `__manus__/` (runtime de debug spécifique à la plateforme Manus, inutile et non souhaitable en production).
- Vérification : toutes les pages ont `<meta charset>` et `<meta viewport>`.
- Vérification : tous les liens internes (`href="/xxx.html"`) pointent vers des fichiers réellement présents — aucun lien cassé détecté.
- Vérification : l'appel API live (`offres-assurance.html`, `offre-details.html`, `confirmation-souscription.html`) vers `https://mediconnect-backend-v2.vercel.app/api/assurance/offres` est **conservé tel quel** — ce backend est déjà en production et fonctionne.

---

## 4. ⚠️ Limitation connue : `dashboard.html`

Cette page ("Dashboard Postulants") et la documentation `api-docs.html` référencent un backend **tRPC** hébergé sur `mediconnect4africa.com/api/trpc` (chatbot, `consultations.record`, `health.pathologyStats`, gestion postulants/prestataires). Ce backend fait partie du **projet Manus** (Express + tRPC + MySQL/TiDB) et **n'est pas inclus** dans ce déploiement statique.

**Conséquence :** `dashboard.html` affichera une page vide/erreur tant que ce backend tRPC n'est pas déployé séparément (nécessite MySQL/TiDB + clés OAuth/Forge Manus).

**Recommandation :** soit (a) héberger ce backend séparément (ex: Render/Railway avec MySQL géré), soit (b) migrer ces fonctionnalités (postulants/prestataires/chatbot) vers le backend Node/Express + Neon Postgres existant (`mediconnect-backend-v2`), en suivant le même pattern que les routes `/api/assurance/*`. Je peux faire cette migration sur demande dans une prochaine session.

Les 8 autres pages sont 100% autonomes et fonctionnelles.

---

## 5. Déploiement sur Vercel

### Étape 1 — Nouveau dépôt GitHub
```bash
mkdir mediconnect4africa-vitrine && cd mediconnect4africa-vitrine
# copier le contenu du zip fourni ici
git init
git add .
git commit -m "feat: site vitrine MediConnect Africa - version statique corrigée"
git branch -M main
git remote add origin https://github.com/keuming/mediconnect4africa-vitrine.git
git push -u origin main
```
*(créer le dépôt vide `mediconnect4africa-vitrine` sur github.com/keuming au préalable)*

### Étape 2 — Importer sur Vercel
1. vercel.com → **Add New** → **Project** → importer `keuming/mediconnect4africa-vitrine`
2. Framework Preset : **Other** (site statique — `vercel.json` gère tout)
3. Build Command : laisser vide (ou `echo "static"`)
4. Output Directory : `.` (racine)
5. **Deploy**

### Étape 3 — Domaines
Dans le projet Vercel **mediconnect4africa-vitrine** :
- Settings → Domains → ajouter `www.mediconnect4africa.cloud`
- (optionnel) ajouter `mediconnect4africa.cloud` (apex) avec redirection vers `www`

Dans le projet Vercel **mediconnect-m9xf** (dashboard existant) :
- Settings → Domains → ajouter `manager.mediconnect4africa.cloud`

### Étape 4 — DNS (chez le registrar du domaine `.cloud`)
| Type | Hôte | Valeur |
|---|---|---|
| CNAME | `www` | `cname.vercel-dns.com` |
| A (apex, optionnel) | `@` | `76.76.21.21` |
| CNAME | `manager` | `cname.vercel-dns.com` |

Vercel affichera les valeurs exactes à configurer une fois les domaines ajoutés à chaque projet (parfois un `A record` ou `CNAME` spécifique selon le projet).

---

## 6. Statut final

| Élément | Statut |
|---|---|
| 8 pages vitrine | ✅ Prêtes, liens corrigés |
| `dashboard.html` (postulants) | ⚠️ Nécessite backend tRPC séparé |
| API offres d'assurance (live) | ✅ Fonctionnelle (backend existant) |
| Liens vers l'app (login/register/bd) | ✅ Redirigés vers `manager.mediconnect4africa.cloud` |
| `vercel.json` (clean URLs, root→accueil) | ✅ Créé |
| Déploiement Vercel | ⏳ À faire par TOMA (accès github.com/vercel.com requis) |
