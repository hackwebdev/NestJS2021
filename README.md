Notes:

- \_app.js - wraps around all the pages components

Naming Convention:

- LowerCase for your pages
- UpperCase for any other components

Edited pages/index.js

- in the browser:
  - http://localhost:3000/

Created pages/about.js

- rafce
- in the browser:
  - http://localhost:3000/about

pages/index.js

- added a Head tag with the title and meta

Add chrome extension

- quick source viewer

pages/about.js

- added a Head tag with the title and meta

pages/\_app.js

- we wrap a Layout around the component
- so we can have a Nav,Header and Footer on every page
- it is where we import the global styling

create components/

- for components that are not pages
- anytime you have a component that doesn't have a route, it's own URL you put it in here.

components/Layout.js

- bring in Layout.module.css
- import styles from '../styles/Layout.module.css'
- to use className={styles.container}
- in tha \_app.js we wrap it with Layout
- from the Layout.js we bring in children as props

styles/

- rename Home.module.css into Layout.module.css

pages/\_app.js

- import Layout
- we wrap the component with layout
- the Layout will show in every page

styles/Nav.module.css

- Navbar styling

Create components/Nav.js

- import navStyles from '../styles/Nav.module.css'
- add Link
- import Link

Bring Nav to the Layout

- import Nav
- add Nav component

create styles/Header.module.css

components/Header.js

- bring in Header.module.css

Bring Nav to the Layout

Custom Document
pages/\_document.js

- has access to Html, Head, Main, NextScript
- only rendered on the server
- you dont probably want to mess with this
- need to restart server this file is changed

Data Fetching

- we can add the functions either above or below the component
- 3 Fetching Data Techniques
  - getStaticProps which lets us fetch data during build time
  - getServerSideProps which we fetch the data on every request(slower)
  - getStaticPaths dynamically generate paths based on data were fetching

pages/index.js

- we will use getStaticProps

Create styles/Article.module.css

Create components/ArticleList.js

- where we will map the articles
- and have an ArticleItem component for each individual article

Insert ArticleList inside pages/index.js
