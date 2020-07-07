import { writable } from 'svelte/store'

// polls
const polls = [
    {
      id: 1,
      question: 'Python or JavaScript?',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 9,
      votesB: 15,
    },
  ]
const PollStore = writable(polls)

export default PollStore