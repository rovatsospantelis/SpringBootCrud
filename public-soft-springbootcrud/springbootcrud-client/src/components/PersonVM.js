import constants from '@/components/constants'

export default {
  name: 'person',
  components: {},
  data: function () {
    return {
      visible: false,
      context: 'Person',
      person: initPerson(),
      genderOptions: ['MALE', 'FEMALE'],
      rules: {
        name: {
          required: true,
          max: constants.sizes.SIZE_M,
          trigger: 'blur'
        },
        mobilePhone: {
          required: true,
          min: constants.sizes.SIZE_XXS,
          max: constants.sizes.SIZE_XS,
          trigger: 'blur'
        },
        email: {
          required: true,
          type: 'email',
          max: constants.sizes.SIZE_M,
          trigger: 'blur'
        },
        active: {
          required: false,
          trigger: 'blur'
        },
        comments: {
          required: false,
          max: constants.sizes.SIZE_XL,
          trigger: 'blur'
        },
        gender: {},
        department: {
          required: false,
          trigger: 'blur'
        }
      }
    }
  },
  created () {
    console.log('Person created')
  },
  mounted () {
    this.$events.$on('edit-person', eventData => this.onEditPerson(eventData))
    console.log('Person mounted')
  },
  destroyed: function () {
    this.$events.$off('edit-person')
    console.log('Person destroyed')
  },
  computed: {
    isDeletable: function () {
      return this.person.id != null
    }
  },
  methods: {
    onEditPerson (eventData) {
      console.log('Edit Person:' + eventData)
      if (eventData != null) {
        this.$http.get('persons/' + eventData.id)
          .then(response => {
            this.person = response.data
            this.visible = true
            this.clearValidation()
          })
      } else {
        Object.assign(this.$data.person, initPerson())
        this.visible = true
        this.clearValidation()
      }
    },
    save () {
      this.$refs['personForm'].validate().then(() => {
        let _self = this
        if (this.person.id != null) {
          // existing person, update
          this.$http.patch('persons/' + this.person.id, this.person, {
            // transform the selected roles into URIs, before sending
            transformRequest: [function (data, headers) {
              return _self.transformRequest(data)
            }]
          }).then(response => {
            this.handleSuccess(response)
          }).catch(e => this.handleError(e))
        } else {
          // new person, create
          this.$http.post('persons', this.person, {
            // transform the selected roles into URIs, before sending
            transformRequest: [function (data, headers) {
              return _self.transformRequest(data)
            }]
          }).then(response => this.handleSuccess(response))
            .catch(e => this.handleError(e))
        }
      }).catch(e => {
        console.error('validation FAILED')
      })
    },
    cancel () {
      this.visible = false
      this.clearValidation()
    },
    handleSuccess (response) {
      this.visible = false
      this.successFloat(this.$messages.successAction)
      console.log('fire person-edited event')
      this.$events.fire('person-edited', this.person)
    },
    handleError (e) {
      this.showDefaultError(e)
    },
    confirmDelete () {
      this.$confirm(this.$messages.confirmAction, this.$messages.confirmActionTitle, {
        confirmButtonText: this.$messages.yes,
        cancelButtonText: this.$messages.no,
        cancelButtonClass: 'btn btn-warning',
        confirmButtonClass: 'btn btn-danger',
        closeOnClickModal: false,
        closeOnPressEscape: false,
        type: 'warning'
      }).then(() => {
        // delete person
        this.$http.delete('persons/' + this.person.id).then(response => this.handleSuccess(response))
      })
    },
    transformRequest (data) {
      if (data.mobilePhone === '') {
        delete data.mobilePhone
      }
      return JSON.stringify(data)
    },
    clearValidation () {
      if (this.$refs['personForm']) {
        this.$refs['personForm'].clearValidate()
      }
    }
  }
}

/**
 * Create a new totally empty Person
 * @returns {{id: null, name: string, mobilePhone: string, gender: null, email: string, comments: string, active: boolean}}
 */
function initPerson () {
  return {
    id: null,
    name: '',
    mobilePhone: '',
    gender: null,
    email: '',
    comments: '',
    active: true
  }
}
