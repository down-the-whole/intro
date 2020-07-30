// @ts-check
const reactPlugin = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
    jsx: 'react',
    plugins: [reactPlugin],
    // alias: {
    //     react: '@pika/react',
    //     'react-dom': '@pika/react-dom',
    // }
}

module.exports = config
