# Planned Furniture
Este é um pequeno projeto, onde consiste básicamente uma homepage e uma página secundaria onde o usuario pode utilizar alguns filtros, para ver exatamente oque ele quer, se existir o item.

- Veja online no seu navegador [Lucas Tavares Planned Furniture](https://lucastavares-planned-furniture.netlify.app/)
- Caso queira testar na sua máquina uma versão de testes utilize o commit (d411fa5ade7b2013409053aa2e6f0051c0bd241a) importante ter uma imagem com o nome de defaultBcg para ser a default e uma com o nome de logo.svg dentro da pasta /images/ todas as outras imagens devem ser adicionadas manualmente para rodar localmente sem a utilização do back-end pela contentful.


Imagens:
- [pixabay](https://pixabay.com/pt)
- [flat-icon](https://www.flaticon.com/)

Packages:

- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- Além destes packages estou utiliando [Context-Api](https://pt-br.reactjs.org/docs/context.html)

Back-end:
- [Contentful](https://www.contentful.com/)
- [Json example](https://www.contentful.com/developers/docs/concepts/data-model/)
- [Ordenar os resultado](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/order)

<br />

## Exemplos de códigos:
### Contex.js

Exemplo de código: como fazer apenas 1 handleChange para multiplos inputs?
```javascript
handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = event.target.name
    this.setState({
        [name]: value
    }, this.filterFurnitures)
}
```

Exemplo de código: como encontar o maior valor e o menor valor?
```javascript
let maxPrice = Math.max(...furnitures.map(item => item.price));
let minPrice = Math.min(...furnitures.map(item => item.price));
```

Exemplo de código: como fazer uma função que recebe um slug, retornar um objeto?
```javascript
getFurniture = (slug) => {
    let tempFurnitures = [...this.state.furnitures];
    const furniture = tempFurnitures.find(furniture => furniture.slug === slug)
    return furniture
}
```

Exemplo de código: como fazer uma função que recebe uma coleção de itens e formata o objeto? 
```javascript
formatData(items) {
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let furniture = { ...item.fields, images, id };
        return furniture;
    });
    return tempItems
}
```

Exemplo de código: como filtar algo? 
```javascript
//Filter if diff
if (type !== 'all') {
        tempFurnitures = tempFurnitures.filter(furniture => furniture.type === type)
    }
//Filter if true
if (mirror) {
    tempFurnitures = tempFurnitures.filter(furniture => furniture.mirror === true);
}
//Filter with: parse and if true
price = parseInt(price)
tempFurnitures = tempFurnitures.filter(furniture => furniture.price <= price);
////Filter if multiples parameters (>= && <=)
tempFurnitures = tempFurnitures.filter(furniture =>
    furniture.heigth >= minHeight && furniture.heigth <= maxHeight);

```

### pages/SingleFurniture
Exemplo de código: como acessar o valor do slug na minha url (utilizando react-router-dom)? 
```javascript
constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }
```

Exemplo de código: como fazer destructuring de objeto e array?
```javascript
    const { name, description, heigth, width, price, extras, images, mirror } = furniture
    const [mainImg, ...otherImgs] = images;
```

<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## In the project directory, you can run:

### Create .env-development file

Create a file .env-development on project root and add the params:

```javascript
REACT_APP_API_SPACE=YOUR_CONTENTFUL_API_SPACE
REACT_APP_API_ACCESS_TOKEN=YOUR_CONTENTFUL_API_ACCESS_TOKEN
```

Or just ignore this step if you wanna install this project locally.

### `npm install`

Install the app dependencies.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
