<template>
  <b-container class="bv-example-row" fluid="md">
    <b-row>
      <b-col cols="6">
        <canvas id="quadrantOneChart" style="height: 500px; width: 500px;"></canvas>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import Chart from 'chart.js';
// import API from '@/api/api';

export default {
  name: 'MainDashboard',
  data: () => ({
    quadrantOneDatasets: [
      {
        label: 'Some place',
        borderColor: 'rgb(3, 94, 252)',
        data: [25.8, 44, 41, 42, 46.3, 37.3, 32, 46.3, 37.3, 32, 46.3, 37.3],
        backgroundColor: 'rgba(0, 0, 0, 0)',
				fill: false,
      }, {
        label: 'Average',
        borderColor: 'rgb(217, 157, 37)',
        data: [32, 44, 31, 35, 36.3, 37.3, 32, 46.3, 37.3, 32, 46.3, 37.3],
        backgroundColor: 'rgba(0, 0, 0, 0)',
				fill: false,
        tension: 0.4,
      },
    ],
    quadrantOneOptions: {
      responsive: true,
      legend: {
        display: true,
        labels: {
          boxWidth: 6,
          padding: 8,
          usePointStyle: true,
        }
      },
      ticks: {
        suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
      },
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          },
        }],
      },
      plugins: {
        title: {
          align: 'start',
          display: true,
          position: 'bottom',
          text: 'Daily ED Attendances 75+',
        },
        tooltips: {
          mode: 'index',
        },
      },
    },
  }),
  computed: {
    ...mapState('pageNavigation', ['currentPage']),
  },
  mounted () {
    var ctx = document.getElementById('quadrantOneChart').getContext('2d');
    // eslint-disable-next-line no-undef, no-unused-vars
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: this.quadrantOneDatasets,
        options: this.quadrantOneOptions,
      },
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
