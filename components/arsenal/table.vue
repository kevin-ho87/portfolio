<template>
    <table>
      <thead>
        <tr>
          <th v-for="stat in stats"
            @click="order(stat)"
          >
            {{ stat | capitalise }}
            <span class="arrow" :class="sortOrders[stat] ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="col in filteredData">
          <td v-for="key in col">
            {{ key }}
          </td>
        </tr>
      </tbody>

    </table>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['players', 'stats'],
  data () {
    let sortOrders = {}

    _.forEach(this.stats, (value, key) => {
      sortOrders[value] = true
    })

    return {
      selectedSort: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData () {
      let sortType = this.sortOrders[this.selectedSort] ? 'asc' : 'desc'
      return _.orderBy(this.players, this.selectedSort, sortType)
    }
  },
  filters: {
    capitalise (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    order (value) {
      this.selectedSort = value
      this.sortOrders[this.selectedSort] = !this.sortOrders[this.selectedSort]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/base/settings";

// Table
table {
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  border: 2px solid #fff;
  padding: 1rem;
}
th {
  text-align: left;
  cursor: pointer;
  background-color: $c-arsenal-secondary;
  color: #fff;
}
td {
  background-color: #ececec;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

</style>