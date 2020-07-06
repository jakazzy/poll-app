<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Tabs from './shared/Tabs.svelte'

	// tabs
	let items =['Current Polls', 'Add New Polls']
	let activeItem = 'Current Polls'
	const tabsChange=(event)=>{
		activeItem = event.detail
	}
</script>

<Header/>
<main>
	<Tabs { activeItem } { items } on:tabsChange={tabsChange}/>
</main>
<Footer/>
<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>