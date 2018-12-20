<template>
  <div>

    <demo-block title="选择完整时间">
      <van-datetime-picker
        type="datetime"
        :loading="loading"
        v-model=" currentDate1"
        :min-date=" minDate"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="选择日期（年月日）">
      <van-datetime-picker
        type="date"
        v-model=" currentDate2"
        :min-date=" minDate"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="选择日期（年月）">
      <van-datetime-picker
        type="year-month"
        v-model=" currentDate3"
        :min-date=" minDate"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="选择时间">
      <van-datetime-picker
        type="time"
        v-model=" currentDate4"
        :min-hour=" minHour"
        :max-hour=" maxHour"
        @change="onChange"
      />
    </demo-block>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minHour: 10,
        maxHour: 20,
        minDate: new Date(2018, 0, 1).getTime(),
        maxDate: new Date(2019, 10, 1).getTime(),
        currentDate1: new Date(2018, 2, 1).getTime(),
        currentDate2: null,
        currentDate3: new Date(2018, 0, 1),
        currentDate4: "12:00",
        loading: false
      };
    },
    methods: {
      onChange(event) {
        console.log(event);
      }
    }
  };
</script>
<style>
  @import "main.css";
</style>
