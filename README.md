# c-tabs.js

Librairie Javascript dédiée à la gestion d'onglets et tabulations.

[Démo](https://ita-design-system.github.io/c-tabs.js/)

## Installation

```html
<body>
    <!-- Il est recommandé de placer la librairie avant la balise fin de body -->
    <script src="/path/to/c-tabs.js"></script>
</body>
```

## Usage

Les boutons tabulations et onglets doivent disposer de leurs attributs/classes initiales au chargement de la page. **c-tabs.js** assure la bascule correcte des classes au clic sur les tabulations ou appel de la méthode open.

* **Tabulations / boutons (tab)** déclenchant l'ouverture ou la fermeture des onglets:
    * `c-tab="ID_ONGLET_1"` attribut spécifiant que le clic ouvre l'onglet dont l'identifiant est `ID_ONGLET_1`
* **Conteneur des onglets (panes), peut être n'importe quelle balise HTML: Les paramètres des tabulations/onglets doivent être renseignés sous forme d'attributs sur chaque conteneur d'onglets:**
    * **`data-pane-default-class`** définit la classe d'un onglet fermé.
    * **`data-pane-active-class`** définit la classe de l'onglet actif.
    * **`data-tab-default-class`** définit la classe du bouton tab fermé.
    * **`data-tab-active-class`** définit la classe du bouton tab actif.
* **Onglet (pane)**
    * `c-tab-name="ID_ONGLET_1"` attribut identifiant l'onglet


```html
<nav>
    <a  href="#" 
        c-tab="tab1" 
        class="
            c-dis m-inline-flex
            c-dim m-pt-2 m-pr-4 m-pb-2 m-pl-4
            c-txt m-ff-lead-700 m-ws-nowrap m-td-none
            c-skin m-c-primary-500 m-bb-5">
        Tab numéro 1
    </a>
    <a  href="#" 
        c-tab="tab2" 
        class="
        c-dis m-inline-flex
        c-dim m-pt-2 m-pr-4 m-pb-2 m-pl-4
        c-txt m-ff-lead-400 m-ws-nowrap m-td-none
        c-skin m-c-primary-500 m-bb-3">
        Tab numéro 2
    </a>
    <a  href="#" 
        c-tab="tab3" 
        class="
        c-dis m-inline-flex
        c-dim m-pt-2 m-pr-4 m-pb-2 m-pl-4
        c-txt m-ff-lead-400 m-ws-nowrap m-td-none
        c-skin m-c-primary-500 m-bb-3">
        Tab numéro 3
    </a>
</nav>
<!-- 
    CONTENEUR DES ONGLETS
    Doit contenir les attributs suivants
    data-pane-default-class définit la classe d'un onglet fermé
    data-pane-active-class définit la classe de l'onglet actif
    data-tab-default-class définit la classe du bouton tab fermé
    data-tab-active-class définit la classe du bouton tab actif
-->
<div    data-pane-default-class="u-d-none"
        data-pane-active-class=""
        data-tab-default-class="
            c-dis m-inline-flex
            c-dim m-pt-2 m-pr-4 m-pb-2 m-pl-4
            c-txt m-ff-lead-400 m-ws-nowrap m-td-none
            c-skin m-c-primary-500 m-bb-3"
        data-tab-active-class="
            c-dis m-inline-flex
            c-dim m-pt-2 m-pr-4 m-pb-2 m-pl-4
            c-txt m-ff-lead-700 m-ws-nowrap m-td-none
            c-skin m-c-primary-500 m-bb-5">
    <div c-tab-name="tab1">
        Onglet numéro 1
    </div>
    <div c-tab-name="tab2" class="u-d-none">
        Onglet numéro 2
    </div>
    <div c-tab-name="tab3" class="u-d-none">
        Onglet numéro 3
    </div>
</div>
```

## Méthodes

```javascript
// Initialise ou actualise les instances de c-tabs
// A invoquer au chargement de la page ainsi qu'à chaque changement
cTabs.update();

// Ouvre l'onglet spécifié et affecte les tabulations liées à ce groupe d'onglets
cTabs.open('ID_ONGLET');
```
