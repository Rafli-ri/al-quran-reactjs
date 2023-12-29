# Al-Quran App React + TypeScript + Vite
This application is still in the development process.

- Demo URL : [E-AlQuran ID](https://e-al-quran.netlify.app/)

- source API : [EQuran.id](https://equran.id/apidev) 

tools : 
 - React js + TypeScript
 - Tailwind CSS
 - React Icon
   
Feature : 
- Show all surah 
- Search Surah
- show modal tafsir surah
- play audio surah
- Responsive

## preview

### Web Version
1. Home Page
![Home Page](https://github.com/Rafli-ri/al-quran-reactjs/blob/main/image/Home%20Page.png?raw=true)

2. Surah
![Surah](https://github.com/Rafli-ri/al-quran-reactjs/blob/main/image/surah-detail.png?raw=true)
   
3. Show Tafsir Surah
![Show Tafsir](https://github.com/Rafli-ri/al-quran-reactjs/blob/main/image/Modal%20tafsir%20surah%20.png?raw=true)

4. Play Audio
![Play](https://github.com/Rafli-ri/al-quran-reactjs/blob/main/image/Play%20audio%20surah.png?raw=true)


### Mobile Version
1. Home Page Mobile
   
![Home Page Mobile](https://github.com/Rafli-ri/al-quran-reactjs/blob/main/image/Home%20Page%20Mobile.png?raw=true)


2. Surah and show audio player
   
![surah and audio player](https://github.com/Rafli-ri/al-quran-reactjs/blob/main/image/surah%20mobile.PNG?raw=true)



### Configuration
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
