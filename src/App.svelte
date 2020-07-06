<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte'
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
	{ #if activeItem ==='Current Polls'}
		<p> Poll list component goes here</p>
	{ :else if activeItem ==="Add New Polls"}
	<!-- <p>New poll component goes here</p> -->
	<CreatePollForm/>
	{ /if}
</main>
<Footer/>
<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>