dev:
    npm run site:dev

format:
    npx eslint --fix --no-error-on-unmatched-pattern "**/*.{ts,mts,vue}"
    npx stylelint --fix ".vitepress/theme/**/*.css" ".vitepress/theme/**/*.vue"

lint:
    npm run lint

lint-css:
    npm run lint:css

lint-typescript:
    npm run lint:typescript

lint-vue:
    npm run lint:vue
