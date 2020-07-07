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
	// polls
	  let polls = [
    {
      id: 1,
      question: 'Python or JavaScript?',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 9,
      votesB: 15,
    },
  ]

	const handleAdd=(event)=>{
		console.log('are you working', activeItem);
		
		const poll = event.detail
		polls=[poll, ...polls]
		activeItem = 'Current Polls'
	}
</script>

<Header/>
<main>
	<Tabs { activeItem } { items } on:tabsChange={tabsChange}/>
	{ #if activeItem ==='Current Polls'}
		<p> Poll list component goes here</p>
	{ :else if activeItem ==="Add New Polls"}
	<!-- <p>New poll component goes here</p> -->
	<CreatePollForm on:add={handleAdd}/>
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