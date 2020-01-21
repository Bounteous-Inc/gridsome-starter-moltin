module.exports = {
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:gridsome/recommended",
  ],
  plugins: [
    "gridsome"
  ],
  "settings": {
    "import/resolver": {
      "alias": [
        ['~', "./src"]
      ]
    }
  },
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "vue": "never"
      }
    ],
    "no-console": "off",
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "vue/script-indent": [
      "error",
      2,
      {
        "baseIndent": 1
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.vue"
      ],
      "rules": {
        "indent": "off"
      }
    }
  ]
};