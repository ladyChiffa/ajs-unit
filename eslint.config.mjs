import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

/*
Структура нового конфига (с 9 версии) линейная.
Это значит, что каждый объект дает какие-то определенные указания.
Если указания пересекаются (то есть, затрагивают одно и то же), то действовать будет нижестоящий. 
Если в объекте не указано, для каких файлов действует правило - то действие распространяется на весь проект.
*/

export default defineConfig([
  {
    // Так мы включим поддержку и модулей в браузере и в ноде, то есть ESM и CJS.
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    // Игнорирование всегда отдельным объектом. Вторую звездочку ставить не обязательно.
    ignores: ["dist/*", "coverage/*"],
  },
  // Рекомендованные правила стилистики js.configs.recommended являются объектом, поэтому включены без фигурных скобок.
  js.configs.recommended,
  {
    // Тут мы прописываем, что для файлов тестов будут действовать настройки их плагина, а также добавляем некоторые правила.
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "jest/expect-expect": "error",
    },
  },
  // еще пример настройки
  {
    files: ['src/**/*.js'],
    rules: {
      indent: ['error', 4], // отсупы, авто
      semi: ['error', 'always'], // точка с запятой, авто
      quotes: ['error', 'single'], // одинарные кавычки, авто
      'no-unused-vars': 'off', // не используемые переменные
      'no-console': 'off', // console.log
      'no-var': 'error', 
    }
  },
]);
