/**
* MY TABS NATIVE
*/
const cTabs = {
    /**
    * OPEN TAB PANE
    * METHOD
    * @param {name} string The tab pane name
    * Sets all the not active panes into the same container to attribute class myTabs.default.options.paneDefaultClass
    * Sets the active panes to attribute class myTabs.default.options.paneActiveClass
    * Sets all the not active tabs/triggers to attribute class myTabs.default.options.tabDefaultClass
    * Sets the active tabs/triggers to attribute class myTabs.default.options.tabActiveClass
    */
    open: function(name) {
        // If instance exists
        if (cTabs.instances[name] !== undefined) {
            
            // Panes. Apply add/remove class names on panes
            cTabs.instances[name].els_panes.forEach(function(el) {
                el.setAttribute('class', cTabs.instances[name].options.paneDefaultClass);
            });
            // Set active pane
            cTabs.instances[name].el_pane.setAttribute('class', cTabs.instances[name].options.paneActiveClass);

            // Related tabs - Tabs/triggers pointing to the same pane container
            cTabs.instances[name].els_related_tabs.forEach(function(el) {
                el.setAttribute('class', cTabs.instances[name].options.tabDefaultClass);
            });

            // Active tabs. Apply add/remove class names on tabs/triggers
            cTabs.instances[name].els_tabs.forEach(function(el) {
                el.setAttribute('class', cTabs.instances[name].options.tabActiveClass);
            });
        }
    },
    /**
    * INSTANCES
    * OBJECT
    * Populated object on update method containing all involved elements
    */
    instances: {},
    /**
    * UPDATE
    * METHOD
    * Refresh tabs status and tab listeners
    */
    update: function() {
        // Reset instances
        cTabs.instances = {};
        // Build instances of tabs and panes
        // Each pane/tab name is unique
        document.querySelectorAll('[my-tab-name]').forEach(function(el) {
            // Parameters must be set on panes container
            if (el.parentElement.dataset.paneDefaultClass !== undefined
                && el.parentElement.dataset.paneActiveClass !== undefined
                && el.parentElement.dataset.tabDefaultClass !== undefined
                && el.parentElement.dataset.tabActiveClass !== undefined) {
                console.log('ok pour '+el);
                const tab_id = el.getAttribute('my-tab-name');
                cTabs.instances[tab_id] = {
                    // Triggers that toggle open/close the specified pane
                    els_tabs: document.querySelectorAll('[my-tab="'+tab_id+'"]'),
                    // All triggers related to the panes container (including current)
                    els_related_tabs: [],
                    // All panes into the same container
                    els_panes: [],
                    // The pane element
                    el_pane: el,
                    // The panes container element
                    el_panes: el.parentElement,
                    // Init default/user settings to apply
                    options: {}
                }
                // Populate all panes into the same container
                // + all related triggers 
                Object.keys(el.parentElement.children).forEach(function(index) {
                    // Pane contained into the parent container
                    cTabs.instances[tab_id].els_panes.push(el.parentElement.children[index]);
                    // Related triggers pointing to this pane
                    const related_tab_id = el.parentElement.children[index].getAttribute('my-tab-name');
                    document.querySelectorAll('[my-tab="'+related_tab_id+'"]').forEach(function(el_related_tab) {
                        cTabs.instances[tab_id].els_related_tabs.push(el_related_tab);
                    });
                });
                // Apply default options
                // Object.keys(cTabs.defaults.options).forEach(function(param) {
                //     cTabs.instances[tab_id]['options'][param] = cTabs.defaults.options[param];
                // });
                // Check user options attribute on panes container
                // const user_options_name = el.parentElement.getAttribute('my-tabs-options');
                // If present
                // if (user_options_name !== null) {
                //     // Check if object
                //     if (typeof myTabsOptions[user_options_name] == 'object') {
                //         // Iterate each overridden parameter 
                //         Object.keys(myTabsOptions[user_options_name]).forEach(function(param) {
                //             cTabs.instances[tab_id]['options'][param] = myTabsOptions[user_options_name][param];
                //         });
                //     }
                // }
            }
            
        });
        // Build instance array list of ids
        const instances_id_list = Object.keys(cTabs.instances);
        if (instances_id_list.length > 0) {
            instances_id_list.forEach(function(instance_id) {
                // Add listener on each trigger
                cTabs.instances[instance_id].els_tabs.forEach(function(el) {
                    el.addEventListener('click', function(e) {
                        // Avoids anchor to scroll to id if trigger is a link
                        e.preventDefault();
                        // Open tab method with specified id
                        cTabs.open(instance_id);
                    })
                });
            });
        }
    }
}
cTabs.update();
// export { myTab };
