import './App.css'
import Navbar from './components/Navbar';
import HighLight from './components/Highlights';
import Hero from './components/Hero';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
import Features from './components/Features';
import Howitworks from './components/Howitworks';
import Footer from './components/Footer';
const App=()=> {
  return (
<main className='bg-black'>
<Hero/>
<HighLight/>
<Model/>
<Features/>
<Howitworks/>
<Footer/>
</main>
  )
}

export default Sentry.withProfiler(App);
