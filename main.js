 import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
import HomePage from './pages/home'
import ContactPage from './pages/contact';
import test from './pages/test';

document.querySelector('#app').innerHTML = HomePage();
console.log(HomePage());
import { router } from './libs';
import ProjectPage from './pages/project';

const render = (container,content) => {
  container.innerHTML = content();
}



// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(app,HomePage);
})
router.on('/contact',()=>{
  render(app,ContactPage);
})
router.on('/test',()=>{
  render(app,test);
})
router.on('/project',()=>{
  render(app,ProjectPage);
})


router.resolve();
