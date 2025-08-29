const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
<<<<<<< HEAD
exports.REMOTE_DISTRO_URL = 'https://github.com/createye/SeverLauncher/blob/master/distribution.json'
=======
exports.REMOTE_DISTRO_URL = 'https://createye.github.io/SeverLauncher/distribution.json'
>>>>>>> 06f342fba99d3421cea4dae93480385b633a4880

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api