// import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import App from './App';

// const renderDom = Component => {
//     render(
//         <Component />,
//         document.getElementById('app')
//     )

// }
// renderDom(App);

// ReactDOM.render(<App />, document.getElementById('app') );


// class Index extends Component {
//     render() {
//         <App />,
//         document.getElementById('app')
//     }
// }

// export default Index;



//-------原来的原生JS实现继承、多态-------------------------------------------------------
/*
function Animal(){}
function Dog(){}

Object.defineProperties(Animal.prototype, {
    name: {
        value() {
            return 'Animal';
        }
    },
    say: {
        value(){
            return `I'm ${this.name()} `;
        }
    }
});

// dog instanceof Animal => true
// dog.__propto__.__proto__... === Animal.prototype
// dog.__proto__ === Dog.prototype
// Dog.prototype.__proto__ === Animal.prototype

Dog.prototype = Object.create(Animal.prototype, {
    //  注意：constructor属性是不可枚举的。
    constructor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value() {
            return 'Dog';
        }
    }
});

console.log("Dog.prototype.constructor: " + Dog.prototype.constructor);
document.write(new Dog().say());
*/

//-------[es2015已支持class]class 实现继承、多态-------------------------------------------------------
class Animal{
    name() {
        return 'Animal';
    }
    say() {
        return `I'm ${this.name()}`;
    }
}
class Dog extends Animal{
    // food = 'bone';
    name() {
        return 'Dog';
    }
}

console.log( new Dog() instanceof Animal );