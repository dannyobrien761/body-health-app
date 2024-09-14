# Body Health App
## Body Health App Project Outline
This project is a use case example of an app for e-commerce health store that specialises in the sale of herbs for body health. The app project outline is as follows:
**Informed Purchases for Customers:** Enhancing customer value by providing detailed product information and recommendations.
**Interactive and User-Centric Design:** Creating a user-friendly experience for e-commerce stores to improve product recommendations and categorization.
**Seamless Product Categorization:** Streamlining product categorization to help customers find specific products for particular purposes, catering to the needs of health store customers and e-commerce businesses in general.
### Project Description:
An App that categorizes herbs by their effect on different body-parts. You choose the desired body-part you would like to improve or heal and you get associated herbs that would help with that desired effect.
### Project Goals:
The overall goal of the project is to create an app that increase the knowlege to action side of an e-commerce business. To build a user focused, interactive app that improves the e-commerce experience for categorization of products.
 Categorizing the products by there uses and effects. Rather than a user scrolling through a normal e-commerce store where they would click on certain products and find out there uses and effects then click out of the product page and continue scrolling untill they find what they are looking for. I came up with a solution to give a quick product introductory, in the form of a image, small message of uses and a link to the product(which would then go to the product e-commerce page).

### purpose
To inform users of benefits of products,categorize those products and have seamless user experience. For e-commerce store that could have multiple products that can be included into different categories and therefore makes it easier for consumers to find exactly what they are looking for.

### Target Audience:
E-commerce stores particularly health stores that are usually trying to solve problems for users. For example this can be used for a wide range of businesses, in this case, I choose a herb selling business that has the herbs categorized by their effect on different body-parts. You choose the desired body-part you would like to improve or heal and you get associated herbs that would help with that desired effect. I came across this probelem in health stores in particular where they would have a wide range of vitamins and supplements all that have a wide range of effects that cross over for there benificial properties. I always end up getting lost among the choices. So I decided to create a system that if you are looking to, clear your skin for example you can simply choose the skin body-part and you get associated herbs that improve your skin. Some of the herbs shown might have multiple benefits and therefore be associated with multiple body-parts. It is a user focused interactive e-commerce experience rather than the normal methods of categorizing products into product pages and repeating a lot of the same products accross multiple pages. In brick and mortar health stores this app would essentially be replaced with a knowledgable shop assistant that can talk to customers about what they are looking for and inform them of the possible choices of products they have on display. 


![responsivity Mockup](/assets/media-for--readme/amiresponsive.png)

## Features
**Body-part selection** feature allows you to select a body part say the 'eye' and returns herb cards which gives information on specific herbs that have a variety of different medicinal qualities for the eye or whicherver body part is selected within the frame. 

**event listensers for body parts** so once clicked the herbs associated with the 'improvement' are listed under the title 'herbs to improve the body-part'.

**updated herb cards** :herb cards appear only if they are in the index of the associated body-part. Herb cards will be removed if there is not an associated herb to fill them.

**highliting body part category choosen**
the first solution I choose to make this feature was simply highlighting the box changing the box color on the active class when clicked and keep the structure of the box selection unchanged. 

then I decided to add to the feature and make a transition effect to make the box larger when the box is clicked. The box once clicked changes to the active css class that has a different flex property to the box class before it is clicked therefore it has a transition with an ease in effect.

```css
.box {
  transition: all 700ms ease-in;
}

.box.active {
  flex: 1;
}
.body-parts .box:not(.active) {
  flex: 0.8; /* Shrink non-active boxes */
}


```

**responsive design** to allow for preferred user experience, body part and herb card containers are made smaller or larger depending on screen size.

I used the below css to remove the images from the body part list on the smaller screens. Within the media query for screen sizes below 400px I was able to maximise the use of the space allowing for better user experience.
```css
.box img {
    display: none;
  }
```


### Features Left to Implement
Once this would be implemented into an e-commerce site I would put in an add to basket button on the herb-card itself to allow for a seamless experience.

add collapsing images for the body-parts categorys. When you click the bodypart name it would expand and show the image in full, associated herb-cards, all other image boxes would currently only display collapsed image and title of category.This would also allow for more room in the viewport for smaller screen experiences and visual keep tract of which category (body-part) you are currently looking at rather than the option I choose which was highlighting the box and keep the structure of the box selection unchanged. 


## Testing 
<ul>
<li>I tested that this page works in different browsers chrome, Firefox, safari
<li>I confirm that the herb cards and body part selection panel texts are all readable and easy to understand. 
<li>I have tested and confirm the form works: clickable and actionable content, and perfroms as expected across multiple screen sizes.
</ul>

### Bugs
high payload from js script which delays the loading of herb card content

### Validator Testing


- **HTML**
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdannyobrien761.github.io%2Fbody-health-app%2F)
- **CSS**
- This document validates as CSS level 3 + SVG !
[(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdannyobrien761.github.io%2Fbody-health-app%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- **CSS**
  
- **Accessibility**
  - I confirm that with a accessibility score of over 90 in the lighthouse dev tools that the colors and fonts choosen are easy to read and accessible.
![lighthouse scrore screenshot](/assets/media-for--readme/lighthouse-summary.png)
## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - in my GitHub repository,  I navigated to the Settings tab 
  - From the source section drop-down menu, I selected the Master Branch
  - Once the master branch has been selected, the page automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://dannyobrien761.github.io/body-health-app/


## Credits 
### Content 
[content placeholder- Brad traversy 50projects50days](https://github.com/bradtraversy/50projects50days/tree/master/content-placeholder)

I took inspiration from the "content placeholder" project from the 50projects in 50 days repository  by brad traversy (link above). The inspiration taken as outlined below and in the code comments for specific reference is clearly defined. Please see below the html structure for the content 'herb-cards' and one of the js code snippets described below. 

#### the html snip from the content placeholder project:
<body>
    <div class="card">
      <div class="card-header animated-bg" id="header">&nbsp;</div>

      <div class="card-content">
        <h3 class="card-title animated-bg animated-bg-text" id="title">
          &nbsp;
        </h3>
        <p class="card-excerpt" id="excerpt">
          &nbsp;
          <span class="animated-bg animated-bg-text">&nbsp;</span>
          <span class="animated-bg animated-bg-text">&nbsp;</span>
          <span class="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div class="author">
          <div class="profile-img animated-bg" id="profile_img">&nbsp;</div>
          <div class="author-info">
            <strong class="animated-bg animated-bg-text" id="name"
              >&nbsp;</strong
            >
            <small class="animated-bg animated-bg-text" id="date">&nbsp;</small>
          </div>
        </div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>

The inspiration I took :
  i used the  ''>&nbsp<'' featured above to fill the h3 and p elements in my html code and use this method of then writing a js function to change the html tags content (seen below).

### excerpt from 'content placeholder' js file:
![content placeholder js file inspiration](/assets/media-for--readme/image-3.png)

### Excerpt from my initial solution to show the appropriate herb cards on click:

![commit history 'js code for 2 body parts and 1 card'](/assets/media-for--readme/image.png)

the "Content-placeholder" project above which inspired the code that once the body parts would be selected, would display them onto a Content-card. I took the code from the above and customized it to include a nodelist of 'herb information in my getHerb functions and then be inserted into the content cards with the same logic of the content placeholder project. eg title.innerHTML method.  

### inspiration taken from the below project in script.js file :

[3d-boxes-background- Brad traversy 50projects50days](https://github.com/bradtraversy/50projects50days/tree/master/3d-boxes-background)


```javaScript
  function createBoxes() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
        boxesContainer.appendChild(box)
      }
    }
  }
  createBoxes()

```

#### my code snippet used in my final version to create new herbcards if there are more herbs, than cards on display 

```javaScript
// If there are not enough herb-card elements, create new ones
    if (herbCards.length < herbs.length) {
        for (let i = herbCards.length; i < herbs.length; i++)  {
            const newCard = document.createElement('div');
            newCard.classList.add('herb-card');`
```
i used the above for loop logic and the document.createElement method 


[Expanding Cards- Brad traversy 50projects50days](https://github.com/bradtraversy/50projects50days/blob/master/expanding-cards/script.js)

I used the following js code from the above git hub account. I used the code to add the 'active' css class to the selected body part box element in my project so once the body part is selected it would highlight the box and give refference for users from which body part they clicked and the herbs associated with it. 

```javaScript
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

```
#### My code for reference is as follows: 

```javaScript
/another event listener for box elements to highlight once selected
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () =>{
        removeActiveClasses();
        box.classList.add('active');
    });
})

function removeActiveClasses() {
    boxes.forEach(box => {
        box.classList.remove('active');
    });
};
```

### Media

I created the images for the body parts using the adobe firefly AI image generator to get images that were consistant in design, size, and specific to each body part.

#### the images for the herbs were all souced on unsplash as follows:
- [Patrick Hendry - Yoga Fog](https://unsplash.com/photos/person-doing-yoga-exercises-w5SgojGZooI)
- [Unsplash+ In collaboration with Margaret Jaszowska](https://unsplash.com/photos/a-close-up-of-a-pile-of-seeds-bt1mUm-CLmM)
- [Unsplash+
In collaboration with Behnam Norouzi](https://unsplash.com/photos/a-close-up-of-a-mushroom-on-a-white-surface-ev3JZFuEvco)
- [Unsplash+ In collaboration with Anna Jakutajc-Wojtalik](https://unsplash.com/photos/a-group-of-potted-plants-sitting-on-top-of-a-wooden-tray-Tk6mX-Xo7bc)
- [Natalia Luchanko](https://unsplash.com/photos/yellow-petaled-flower-on-grass-04Nh3LC_EwM)
- [Unsplash+ In collaboration with Getty Images](https://unsplash.com/photos/hands-in-gloves-potting-rosemary-plant-in-new-clay-pot-on-background-of-fresh-green-basil-plant-on-wooden-floor-repotting-and-cultivating-aromatic-herbs-at-home-horticulture-tfnaRJwiqfc)
-[Kat von Wood](https://unsplash.com/photos/a-cup-of-tea-next-to-a-bowl-of-tea-and-a-book-M9BBRitwlDk)
- [Laura Mitulla](https://unsplash.com/photos/rocks-glass-beside-half-empty-bottle-on-white-surface-7Zlds3gm7NU)
- [Jocelyn Morales](https://unsplash.com/photos/brown-and-white-stone-fragment-trGaaSlz6d0)
- [Unsplash+In collaboration with Nik](https://unsplash.com/photos/a-potted-plant-with-a-small-tree-in-it-slr66az0iRo)
- [Unsplash+ In collaboration with Thomas Franke](https://unsplash.com/photos/a-close-up-of-a-bunch-of-green-leaves-nztbzUbyb9A)
- [Heather Ford](https://unsplash.com/photos/selective-focus-photography-of-blue-petaled-flowers-in-clear-glass-jar-Tinbs_bjKxA)
- [Priscilla Du Preez 🇨🇦](https://unsplash.com/photos/green-leafed-plants-on-white-background-INjdgkCwHp0)
- [Markus Spiske](https://unsplash.com/photos/green-leaf-plants-ngP0x8HuPVM)

