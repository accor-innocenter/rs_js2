import { config, i18n, logger } from 'snips-toolkit'
import handlers from './handlers'

// Enables deep printing of objects.
process.env.DEBUG_DEPTH = undefined

export default async function ({
    hermes,
    done
}) {
    try {
        const { name } = require('../package.json')

        // Initialize logger, config and i18n.
        logger.init(name)
        logger.enable('error') // Replace 'error' with '*' to log everything.
        config.init()
        await i18n.init(config.get().locale)

        // Get the dialog subset.
        const dialog = hermes.dialog()

        dialog.flow('AccorInnovationCenter:OrderRS', (message, flow) => {
            
            console.log(message);

            return "Voici le menu.";

        })


    } catch (error) {
        // Output initialization errors to stderr and exit
        const message = await i18n.errorMessage(error)
        logger.error(message)
        logger.error(error)
        // Exit
        done()
    }
}
