exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://phptravels.net/',
      show: true,
      windowSize: '1200x900',
      slowMo: 100,
      waitForTimeout: 5000
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js', './step_definitions/loginSteps.js']
  },
  
  // Configuración de plugins
  plugins: {
    // Plugin para tomar capturas de pantalla en caso de falla
    screenshotOnFail: {
      enabled: true
    },
    // Plugin para el manejo de intentos
    tryTo: {
      enabled: true
    },
    // Plugin para reintentar un paso fallido
    retryFailedStep: {
      enabled: true
    },
    // Plugin para reintentar acciones específicas
    retryTo: {
      enabled: true
    },
    // Plugin para interactuar con cada elemento
    eachElement: {
      enabled: true
    },
    // Plugin para pausar en caso de falla
    pauseOnFail: {}
  },

  stepTimeout: 0,


// Configuración para sobrescribir el tiempo de espera de pasos específicos
  stepTimeoutOverride: [
    {
      pattern: 'wait.*', // Sobrescribe el tiempo de espera para los métodos que empiezan con 'wait'
      timeout: 0 // Sin límite de tiempo
    },
    {
      pattern: 'amOnPage', // Sobrescribe el tiempo de espera para el método 'amOnPage'
      timeout: 0 // Sin límite de tiempo
    }
  ],
  
  tests: './*_test.js',
  name: 'bdd-puppeteer'
}