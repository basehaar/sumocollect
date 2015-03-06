Package.describe({
  summary: "Telescope SumoCollect Theme",
  version: '0.1.0',
  name: "telescope-theme-sumocollect"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/scss/screen.scss',
    'lib/client/js/fonts.js',
    ], ['client']);

});
