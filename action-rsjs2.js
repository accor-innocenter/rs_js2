#!/usr/bin/env node

const { withHermes } = require('hermes-javascript')

withHermes((hermes, done) => {
    try {
        const dialog = hermes.dialog();

        console.log("we are logged");

        dialog.flow('AccorInnovationCenter:OrderRS', (message, flow) => {
            
            console.log(message);

            flow.end();
            
            return "Voici le menu.";

        })
    } catch (error) {
        console.error(error.toString());
        done();
    }
})