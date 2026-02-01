import plugin from '../plugin.json';

class AcodePlugin {

  async init() {
    // plugin initialisation 
  }

  async destroy() {
    // plugin clean up
  }
}

if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    acode.toast("My Extension Loaded 🚀");
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init($page, cacheFile, cacheFileUrl);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acode.toast("My Extension UnLoaded");
    acodePlugin.destroy();
  });
}
