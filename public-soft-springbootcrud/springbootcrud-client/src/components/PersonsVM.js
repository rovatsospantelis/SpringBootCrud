import Person from '@/components/Person'

export default {
  components: {
    Person
  },
  created () {
    this.refreshPersons()
    console.log('Persons created')
  },
  mounted () {
    // subscribe to the 'row-selected' event (wherever it may come from, should come from the child table component)
    this.$events.$on('row-selected', eventData => this.onPersonSelected(eventData))
    this.$events.$on('person-edited', eventData => this.onPersonEdited(eventData))
    console.log('Persons mounted')
  },
  beforeDestroy () {
    // un-subscribe from events
    this.$events.$off('row-selected')
    this.$events.$off('person-edited')
  },
  destroyed () {
    console.log('Persons destroyed')
  },
  data: function () {
    return {
      url: 'persons/search/findByQuery?query=',
      query: '',
      persons: [],
      fields: [
        {
          name: 'id',
          title: 'Α/Α',
          sortField: 'id'
        },
        {
          name: 'name',
          title: 'Όνομα',
          sortField: 'name'
        },
        {
          name: 'email',
          title: 'Email',
          sortField: 'email'
        }
      ]
    }
  },
  watched: {
    query: function (newValue) {
      this.query = newValue
      console.log(newValue)
      this.refreshPersons()
    }
  },
  methods: {
    createPerson (event) {
      console.log('fire edit-person event')
      this.$events.fire('edit-person', null)
    },
    onPersonSelected (dataItem) {
      console.log('fire edit-person event')
      this.$events.fire('edit-person', dataItem)
    },
    onPersonEdited (dataItem) {
      this.refreshPersons()
    },
    refreshPersons () {
      this.$http.get(this.url + this.query)
        .then(response => {
          this.persons = response.data._embedded.persons
        })
        .catch(e => {
          console.log('error: ')
          console.log(e)
        })
    }
  }
}
