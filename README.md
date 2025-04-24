---
title: c-tabs.js
description: Documentation de la librairie c-tab.js dédiée à la gestion d'onglets et tabulations.
layout: libdoc_page.liquid
permalink: index.html
date: git Last Modified
---

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/ita-design-system/c-tabs.js?style=for-the-badge)](https://github.com/ita-design-system/c-tabs.js/releases)

{% sandbox 'Démo c-tabs.js' %}
<nav>
    <button type="button"
        c-tab="tab1"
        class="tab-btn active">
        Tab numéro 1
    </button>
    <button type="button"
        c-tab="tab2"
        class="tab-btn">
        Tab numéro 2
    </button>
    <button type="button"
        c-tab="tab3"
        class="tab-btn">
        Tab numéro 3
    </button>
</nav>
<!-- 
    CONTENEUR DES ONGLETS
    Doit contenir les attributs suivants
    data-pane-default-class définit la classe d'un onglet fermé
    data-pane-active-class définit la classe de l'onglet actif
    data-tab-default-class définit la classe du bouton tab fermé
    data-tab-active-class définit la classe du bouton tab actif
-->
<div    data-pane-default-class="d-none"
        data-pane-active-class=""
        data-tab-default-class="tab-btn"
        data-tab-active-class="tab-btn active">
    <div c-tab-name="tab1">
        <h2>Onglet numéro 1</h2>
        <p>Les boutons tabulations et onglets doivent disposer de leurs attributs/classes initiales au chargement de la page. c-tabs.js assure la bascule correcte des classes au clic sur les tabulations ou appel de la méthode open.</p>
        <p>Les paramètres des tabulations/onglets doivent être renseignés sous forme d'attributs sur chaque conteneur d'onglets:</p>
        <ul>
            <li><code>data-pane-default-class</code> définit la classe d'un onglet fermé</li>
            <li><code>data-pane-active-class</code> définit la classe de l'onglet actif</li>
            <li><code>data-tab-default-class</code> définit la classe du bouton tab fermé</li>
            <li><code>data-tab-active-class</code> définit la classe du bouton tab actif</li>
        </ul>
    </div>
    <div c-tab-name="tab2"
        class="d-none">
        <h2>Onglet numéro 2</h2>
        <p>Invidunt sed sea justo lorem diam. Justo elitr labore sit sanctus sea labore dolore, erat voluptua sed tempor accusam takimata.</p>
    </div>
    <div c-tab-name="tab3"
        class="d-none">
        <h2>Onglet numéro 3</h2>
        <p>Magna elitr nonumy sadipscing sadipscing kasd duo nonumy amet, accusam diam et est elitr. Stet ipsum diam diam sit sed..</p>
    </div>
</div>
<script src="{{ libdocConfig.htmlBasePathPrefix }}assets/c-tabs.js"></script>
<!-- DEMO UNIQUEMENT -->
<style>
    .d-none {
        display: none;
    }
    .tab-btn {
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 0.3em 1em;
        border-bottom: 2px solid #EEE;
        border-radius: 0;
        color: #444;
        cursor: pointer;
    }
    .tab-btn.active {
        border-bottom: 2px solid yellowgreen;
        color: #000;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif; 
        padding: 2rem;
        margin: 0;
        line-height: 1.5em;
    }
</style>
{% endsandbox %}

## Installation

Il est recommandé de placer les fichiers dans cet ordre avant la balise fin de body.

### En local

```html
<script src="/path/to/c-tabs.js"></script>
```

### Sur CDN

Via [https://www.jsdelivr.com/](https://www.jsdelivr.com/)

Version la plus récente

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-tabs.js/ui/js/c-tabs.js
```

Version la plus récente minifiée

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-tabs.js/ui/js/c-tabs.min.js
```

Typologie avec numéro de version

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-tabs.js@<TAG_VERSION>/ui/js/c-tabs.js
```

Typologie numéro de version + minification automatique

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-tabs.js@<TAG_VERSION>/ui/js/c-tabs.min.js
```

Exemple v0.1.0

```html
https://cdn.jsdelivr.net/gh/ita-design-system/c-tabs.js@v0.1.0/ui/js/c-tabs.js
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
        class="tab-btn active">
        Tab numéro 1
    </a>
    <a  href="#" 
        c-tab="tab2"
        class="tab-btn">
        Tab numéro 2
    </a>
    <a  href="#" 
        c-tab="tab3"
        class="tab-btn">
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
<div    data-pane-default-class="d-none"
        data-pane-active-class=""
        data-tab-default-class="tab-btn"
        data-tab-active-class="tab-btn active">
    <div c-tab-name="tab1">
        Onglet numéro 1
    </div>
    <div c-tab-name="tab2"
        class="d-none">
        Onglet numéro 2
    </div>
    <div c-tab-name="tab3"
        class="d-none">
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
