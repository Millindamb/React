//this is our custom function which will add the element to the root
function customRender(reactelement,container){
    // method 1

    //their a problem in this code as in thses code we are setting the attributes manually
    // //this will create a new element of react element tyep(a)
    // const domEle=document.createElement(reactelement.type)
    // //set the inner HTML to (click this to open google)
    // domEle.innerHTML=reactelement.children;
    // domEle.setAttribute('href',reactelement.props.href)
    // domEle.setAttribute('target',reactelement.props.target)

    // conatiner.appendChild(domEle);

    //method 2 : more automatic as compared to method 1

    const domElement = document.createElement(reactelement.type);
    // set inner text
    domElement.innerHTML = reactelement.children;
    // set attributes automatically
    for (const prop in reactelement.props) {
        domElement.setAttribute(prop, reactelement.props[prop]);
    }
    container.appendChild(domElement);
}
//this is a element  
const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click this to open google'
};

const mainContainer = document.querySelector('#root')

// a method which will add the element to the root
customRender(reactelement,mainContainer);